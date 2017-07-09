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

import { log } from '../utils';

export const setActiveView = (value) => {
  log('actions', 'setActiveView', value);
  return {
    type: ACTIVE_VIEW_CHANGED,
    value,
  };
};

export const setQuestions = (questions) => {
  log('actions', 'setQuestions', questions);
  return {
    type: QUESTIONS_LOADED,
    questions,
  };
};

export const setCurrentDeckSlide = (value) => {
  log('actions', 'setCurrentDeckSlide', value);
  return {
    type: CURRENT_DECK_SLIDE_CHANGED,
    value,
  };
};

export const openSetPickerModal = () => {
  log('actions', 'openSetPickerModal');
  return {
    type: OPEN_SET_PICKER_MODAL,
  };
};

export const closeSetPickerModal = () => {
  log('actions', 'closeSetPickerModal');
  return {
    type: CLOSE_SET_PICKER_MODAL,
  };
};

export const openAttributionsModal = () => {
  log('actions', 'openAttributionsModal');
  return {
    type: OPEN_ATTRIBUTIONS_MODAL,
  };
};

export const closeAttributionsModal = () => {
  log('actions', 'closeAttributionsModal');
  return {
    type: CLOSE_ATTRIBUTIONS_MODAL,
  };
};

export const openStudyDetailModal = () => {
  log('actions', 'openStudyDetailModal');
  return {
    type: OPEN_STUDY_DETAIL_MODAL,
  };
};

export const closeStudyDetailModal = () => {
  log('actions', 'closeStudyDetailModal');
  return {
    type: CLOSE_STUDY_DETAIL_MODAL,
  };
};
