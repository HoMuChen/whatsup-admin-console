import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

import './main.css';

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)
