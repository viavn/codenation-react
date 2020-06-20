import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../../routes';
import Topbar from '../../components/Topbar';

import './App.scss';

const App = () => (
  <BrowserRouter>
    <div data-testid="app">
      <Topbar />
      <Routes />
    </div>
  </BrowserRouter>
);

export default App;
