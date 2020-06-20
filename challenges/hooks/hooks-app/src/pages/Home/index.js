import React, { useEffect, createContext, useState } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import { getData } from './fake-api';

import Details from './Details';

export const HomeContext = createContext();

const Home = () => {
  let routeMatch = useRouteMatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((value) => {
      console.log(value);
      setData(value);
    });
  }, []);

  return (
    <>
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
      <HomeContext.Provider value={data}>
        <Switch>
          <Route path={`${routeMatch.path}/:id`}>
            <Details />
          </Route>
        </Switch>
      </HomeContext.Provider>
    </>
  );
};

export default Home;
