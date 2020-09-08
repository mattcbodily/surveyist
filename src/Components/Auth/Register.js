import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default props => {
    let [username, setUsername] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [verPassword, setVerPassword] = useState('');
        

    return (
        <section>
            <h3>Register</h3>
            <form>
                <label>Username</label>
                <input value={username} onChange={e => setUsername(e.target.value)}/>
                <label>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <label>Verify Password</label>
                <input type='password' value={verPassword} onChange={e => setVerPassword(e.target.value)}/>
                <button>Register</button>
            </form>
            <p>Have an account? <Link to='/login'>Sign in here</Link></p>
        </section>
    )
}