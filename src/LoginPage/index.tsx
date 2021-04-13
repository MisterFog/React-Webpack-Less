import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error from './Error';
import Login from './Login';

const LoginPage = () => {

    return(
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/login/error" component={Error} />
      </Switch>
    )
}

export default LoginPage; 
