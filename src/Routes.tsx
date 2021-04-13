import React from 'react';
import { Switch, Route } from 'react-router';

import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

/**
 *
 */
const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/login" component={LoginPage} />
    {/* <Route path="/intro" component={Intro} />
    <Route path="/auth" component={Auth} />
    <Route path="/help" component={Help} />
    <Route path="/error" component={BotError} />
    <Route path="/logout" component={Logout} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/sites" component={Site} />
    <Route path="/addsite" component={AddSite} />
    <Route path="/profile" component={Profile} />
    <Route path="/plans" component={Plans} /> */}
  </Switch>
);

export default Routes;
