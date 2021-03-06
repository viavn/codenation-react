import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FeedRoute from './FeedRoute';
import UsersRoute from './UsersRoute';
import ProfileRoute from './ProfileRoute';
import NewUserRoute from './NewUserRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/" children={<FeedRoute />} />

    <Route exact path="/users" children={<UsersRoute />} />

    <Route path="/users/:username" children={<ProfileRoute />} />

    <Route path="/newuser" children={<NewUserRoute />} />
  </Switch>
);

export default Routes;
