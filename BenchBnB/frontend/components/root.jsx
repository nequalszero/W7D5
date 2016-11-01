import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';

const Root = ({ store }) => {
  console.log("Rendering root");
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  );
};

export default Root;
