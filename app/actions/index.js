import {
  ACTIVE_VIEW_CHANGED,
  QUESTIONS_LOADED,
  CURRENT_DECK_SLIDE_CHANGED,
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
