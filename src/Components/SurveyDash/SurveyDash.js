import React, {useContext} from 'react';
import {UserContext} from '../../App';
import './SurveyDash.scss';

export default props => {
    const {user} = useContext(UserContext);

    return (
        <section className='survey-dash'>
            <h3>Your Surveys</h3>
        </section>
    )
}