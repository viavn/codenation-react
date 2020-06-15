import React from 'react';
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom';
import Topic from './Topic';

export default function Topics() {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>

        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>

        <Route path={`${path}`}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}
