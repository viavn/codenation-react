import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import Details from './Details';

const Home = () => {
  let routeMatch = useRouteMatch();

  return (
    <div>
      <h1>
        This is <strong>Home page</strong>
      </h1>

      <nav>
        <ul>
          <li>
            <Link to={`${routeMatch.url}/1`}>Item 1</Link>
          </li>
          <li>
            <Link to={`${routeMatch.url}/2`}>Item 2</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path={`${routeMatch.path}/:id`}>
          <Details />
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
