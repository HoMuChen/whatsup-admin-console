import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import Content from './components/Content';
import App from './modules/App/Container';
import Home from './modules/Home/Container';
import Applications from './modules/Applications/Container';
import Subscriptions from './modules/Subscriptions/Container';

const history = createHistory()

export default () => (
  <Router history={history}>
    <div>
      <Route path="/" component={App} />
        <Content>
          <Route exact path='/' component={Home} />
          <Route exact path='/applications' component={Applications} />
          <Route exact path='/subscriptions' component={Subscriptions} />
        </Content>
    </div>
  </Router>
)
