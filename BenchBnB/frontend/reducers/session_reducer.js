import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT }
  from '../actions/session_actions';

import { merge } from 'lodash';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case (RECEIVE_CURRENT_USER):
      let currentUser = { currentUser: action.currentUser };
      debugger
      return merge({}, state, currentUser);
    case (RECEIVE_ERRORS):
      let errors = action.errors;
      return merge({}, state, errors);
    case (LOGOUT):
      return _defaultState;
    default:
      return state;
  }
};

export default SessionReducer;
