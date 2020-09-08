import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default props => {
    let [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        axios.post('/api/login', {email, password})
        .then(res => {
            //use context api here
        })
        .catch(err => console.log(err));
    }

    return (
        <section>
            <h3>Sign In</h3>
            <form>
                <label>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={e => login(e)}>Log In</button>
            </form>
            <p>Don't have an account? <Link to='/register'>Sign up here</Link></p>
        </section>
    )
}