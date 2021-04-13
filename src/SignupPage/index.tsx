import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './Signup';
import Error from './Error';

const SignupPage = () => {

    return(
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route path="/signup/error" component={Error} />
      </Switch>
    )
}

export default SignupPage; 
