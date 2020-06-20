import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../../routes';
import Topbar from '../../components/Topbar';

import './App.scss';

const App = () => (
  <BrowserRouter data-testid="app">
    <Topbar />
    <Routes />
  </BrowserRouter>
);

export default App;
