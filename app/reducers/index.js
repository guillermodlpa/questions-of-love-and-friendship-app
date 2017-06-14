import { combineReducers } from 'redux';

import {
  ACTIVE_VIEW_CHANGED,
  QUESTIONS_LOADED,
  CURRENT_DECK_SLIDE_CHANGED,
  OPEN_SET_PICKER_MODAL,
  CLOSE_SET_PICKER_MODAL,
  OPEN_ATTRIBUTIONS_MODAL,
  CLOSE_ATTRIBUTIONS_MODAL,
  OPEN_STUDY_DETAIL_MODAL,
  CLOSE_STUDY_DETAIL_MODAL,
} from '../constants/actionTypes';
import { WELCOME } from '../constants/viewNames';

const activeView = (state = WELCOME, action) => (
  action.type === ACTIVE_VIEW_CHANGED ? action.value : state
);

const questions = (state = [], action) => (
  action.type === QUESTIONS_LOADED ? action.questions : state
);

const currentDeckSlide = (state = 0, action) => (
  action.type === CURRENT_DECK_SLIDE_CHANGED ? action.value : state
);

const setPickerModalOpen = (state = false, action) => {
  switch (action.type) {
    case OPEN_SET_PICKER_MODAL:
      return true;
    case CLOSE_SET_PICKER_MODAL:
      return false;
    default:
      return state;
  }
};

const attributionsModalOpen = (state = false, action) => {
  switch (action.type) {
    case OPEN_ATTRIBUTIONS_MODAL:
      return true;
    case CLOSE_ATTRIBUTIONS_MODAL:
      return false;
    default:
      return state;
  }
};

const studyDetailsModalOpen = (state = false, action) => {
  switch (action.type) {
    case OPEN_STUDY_DETAIL_MODAL:
      return true;
    case CLOSE_STUDY_DETAIL_MODAL:
      return false;
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
  activeView,
  questions,
  currentDeckSlide,
  setPickerModalOpen,
  attributionsModalOpen,
  studyDetailsModalOpen,
});
