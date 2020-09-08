import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
    <div>
        <h1>Welcome to Surveyist</h1>
        <h3>The simple platform to create and send surveys</h3>
        <Link to='/login'>
            <button>Get Started</button>
        </Link>
    </div>
)