import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store';

window.signup = signup;
window.login = login;
window.logout = logout;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;       // for testing only
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnb</h1>, root);
});
