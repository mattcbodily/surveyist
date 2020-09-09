import React from 'react';
import {Link} from 'react-router-dom';
import './Landing.scss';

export default () => (
    <section className='landing'>
        <h1>Welcome to Surveyist</h1>
        <h3>The simple platform to create and send surveys</h3>
        <Link to='/login'>
            <button>Get Started</button>
        </Link>
    </section>
)