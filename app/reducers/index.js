import { combineReducers } from 'redux';

import {
  ACTIVE_VIEW_CHANGED,
  QUESTIONS_LOADED,
} from '../constants/actionTypes';
import { WELCOME } from '../constants/viewNames';

const activeView = (state = WELCOME, action) => (
  action.type === ACTIVE_VIEW_CHANGED ? action.value : state
);

const questions = (state = [], action) => (
  action.type === QUESTIONS_LOADED ? action.questions : state
);

/**
 * Combined Reducers
 * =================
 *
 * Using combineReducers creates a single reducer function that comprises all of the other reducers.
 * Each key passed becomes a separate slice of the state, so each subreducers effectively has no
 * access to the top-level state or sibling slices of the state, for that matter.
 */

export default combineReducers({
  activeView,
  questions,
});
