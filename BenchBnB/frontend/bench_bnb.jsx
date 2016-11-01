import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './actions/session_actions';

window.login = login;
window.logout = logout;
window.signup = signup;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;       // for testing only
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
