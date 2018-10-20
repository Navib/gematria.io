import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise';
import { store, history } from './store';

import './styles/main.scss';

import App from './components/App';
import Home from './components/Pages/Home/index';

const Calculator = () => {
  return <div>Calculator</div>;
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <App>
          <Route exact path="/" component={Home} />
          <Route exact path="/calculator" component={Calculator} />
        </App>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
);
