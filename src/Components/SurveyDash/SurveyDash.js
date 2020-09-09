import React, {useContext} from 'react';
import {UserContext} from '../../App';

export default props => {
    const {user} = useContext(UserContext);

    console.log(user)

    return (
        <section>
            Survey Dash
        </section>
    )
}