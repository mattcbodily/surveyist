import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import addIcon from '../../assets/plus.svg';
import menuIcon from '../../assets/more-vertical.svg';
import './Header.scss';

const Header = props => (
    <div className='main-header'>
        <h3>Surveyist</h3>
        {props.location.pathname === '/survey-dash' 
        ? (
            <nav>
                <Link to='/survey-builder'>
                    <img src={addIcon} alt='Add Survey'/>
                </Link>
                <img src={menuIcon} alt='Main Menu'/>
            </nav>
        ) 
        : null}
    </div>
)

export default withRouter(Header);