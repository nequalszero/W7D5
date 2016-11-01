import { LOGIN, LOGOUT, SIGNUP, receiveCurrentUser, receiveErrors }
    from '../actions/session_actions';
import { signup, login, logout } from '../util/session_api_util';

export default ({ getState, dispatch} ) => next => action => {
  const successCallback = user => {
    debugger
    return dispatch(receiveCurrentUser(user));
  };
  const errorCallback = error => {
    return dispatch(receiveErrors(error.responseJSON));
  };


  switch(action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
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
