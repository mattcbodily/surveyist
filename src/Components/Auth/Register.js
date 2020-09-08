import React, {useState} from 'react';

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
            <p>Have an account? Sign in here</p>
        </section>
    )
}