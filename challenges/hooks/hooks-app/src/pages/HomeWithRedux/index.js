import React, { useEffect } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Details from './Details';
import { fetch } from './duck';

const HomeWithRedux = () => {
  let routeMatch = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch());
  }, []);

  return (
    <>
      <h1>
        This is <strong>Home with redux page</strong>
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
    </>
  );
};

export default HomeWithRedux;
