import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import SurveyDash from './Components/SurveyDash/SurveyDash';
import SurveyBuilder from './Components/SurveyBuilder/SurveyBuilder';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/survey-dash' component={SurveyDash}/>
        <Route path='/survey-builder' component={SurveyBuilder}/>
    </Switch>
)