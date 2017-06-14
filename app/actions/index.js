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

export const setActiveView = value => ({
  type: ACTIVE_VIEW_CHANGED,
  value,
});

export const setQuestions = questions => ({
  type: QUESTIONS_LOADED,
  questions,
});

export const setCurrentDeckSlide = value => ({
  type: CURRENT_DECK_SLIDE_CHANGED,
  value,
});

export const openSetPickerModal = () => ({
  type: OPEN_SET_PICKER_MODAL,
});

export const closeSetPickerModal = () => ({
  type: CLOSE_SET_PICKER_MODAL,
});

export const openAttributionsModal = () => ({
  type: OPEN_ATTRIBUTIONS_MODAL,
});

export const closeAttributionsModal = () => ({
  type: CLOSE_ATTRIBUTIONS_MODAL,
});

export const openStudyDetailModal = () => ({
  type: OPEN_STUDY_DETAIL_MODAL,
});

export const closeStudyDetailModal = () => ({
  type: CLOSE_STUDY_DETAIL_MODAL,
});
