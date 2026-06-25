import React from "react";
import { Switch, Router, Redirect } from "react-router";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

export default props => 
  <Switch>
    <Router exact path="/" component={Home} />
    <Router path="/users" component={UserCrud} />
    <Redirect from="*" to="/" />
  </Switch>

