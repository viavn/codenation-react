import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import { Home, About, Users } from './components/Home';
import Topics from './components/Topics';
import ModalGalleryExample from './components/Galery';

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="App-link" exact>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" activeClassName="App-link">
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/users" activeClassName="App-link">
                Users
              </NavLink>
            </li>

            <li>
              <NavLink to="/gallery" activeClassName="App-link">
                Feature Images
              </NavLink>
            </li>

            <li>
              <NavLink to="/topics" activeClassName="App-link">
                Topics
              </NavLink>
            </li>
          </ul>
        </nav>

        <main>
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/users">
              <Users />
            </Route>

            <Route path="/gallery">
              <ModalGalleryExample />
            </Route>

            <Route path="/topics">
              <Topics />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
