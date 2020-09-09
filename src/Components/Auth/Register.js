import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Auth.scss';

export default props => {
    let [username, setUsername] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [verPassword, setVerPassword] = useState('');
        
    const register = (e) => {
        e.preventDefault();
        if(password && password === verPassword){
            axios.post('/api/register', {username, email, password})
            .then(res => {
                //use context api here
            })
            .catch(err => console.log(err));
        } else {
            alert("Passwords don't match")
        }
    }

    return (
        <section className='auth'>
            <h3>Register</h3>
            <form>
                <label>Username</label>
                <input value={username} onChange={e => setUsername(e.target.value)}/>
                <br />
                <label>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <br />
                <label>Password</label>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <br />
                <label>Verify Password</label>
                <input type='password' value={verPassword} onChange={e => setVerPassword(e.target.value)}/>
                <br />
                <button onClick={e => register(e)}>Register</button>
            </form>
            <p>Have an account? <Link to='/login'>Sign in here</Link></p>
        </section>
    )
}