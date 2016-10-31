import { LOGIN, LOGOUT, SIGNUP, receiveCurrentUser, receiveErrors }
    from '../actions/session_actions';
import { signup, login, logout } from '../util/session_api_util';

export default ({ getState, dispatch} ) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = error => {
    debugger
    return dispatch(receiveErrors(error.responseJSON));
  };

  debugger

  switch(action.type) {
    case LOGIN:
      login(successCallback, errorCallback, action.user);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
