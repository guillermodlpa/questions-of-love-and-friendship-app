import { combineReducers } from 'redux';

const count = (state = 0, action) => {
  console.log('count', state, action);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

/**
 * Combined Reducers
 * =================
 *
 * Using combineReducers creates a single reducer function that comprises all of the other reducers.
 * Each key passed becomes a separate slice of the state, so each subreducers effectively has no
 * access to the top-level state or sibling slices of the state, for that matter.
 */

export default combineReducers({
  count,
});
