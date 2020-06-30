import React from 'react';
import { render } from 'react-dom';

import store from './store';
import Root from './components/Root';

import './index.css';

render(<Root store={store} />, document.getElementById('root'));
