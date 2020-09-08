import React, {useState} from 'react';

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
            <p>Don't have an account? Sign up here</p>
        </section>
    )
}