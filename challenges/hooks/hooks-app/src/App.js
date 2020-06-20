import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import HomeWithRedux from './pages/HomeWithRedux';
import Counter from './pages/Counter';
import CustomHook from './pages/CustomHook';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/home-with-redux">Home with Redux</Link>
            </li>
            <li>
              <Link to="/custom-hook">Custom Hook</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/home-with-redux">
            <HomeWithRedux />
          </Route>

          <Route path="/custom-hook">
            <CustomHook />
          </Route>

          <Route path="/counter">
            <Counter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
