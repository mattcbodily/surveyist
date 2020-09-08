import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default props => {
    let [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    return (
        <section>
            <h3>Sign In</h3>
            <form>
                <label>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button>Log In</button>
            </form>
            <p>Don't have an account? <Link to='/register'>Sign up here</Link></p>
        </section>
    )
}