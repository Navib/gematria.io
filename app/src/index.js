import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { store, history } from './store';
import { ConnectedRouter } from 'react-router-redux';
import muiTheme from './theme/index';

import './styles/main.scss';

import App from './components/App';

const Home = () => {
  return <div>Home</div>;
};

const Calculator = () => {
  return <div>Calculator</div>;
};

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <App>
            <Route exact path="/" component={Home} />
            <Route exact path="/calculator" component={Calculator} />
          </App>
        </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
