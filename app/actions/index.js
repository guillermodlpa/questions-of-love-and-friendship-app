import {
  ACTIVE_VIEW_CHANGED,
  QUESTIONS_LOADED,
} from '../constants/actionTypes';

export const setActiveView = value => ({
  type: ACTIVE_VIEW_CHANGED,
  value,
});

export const setQuestions = questions => ({
  type: QUESTIONS_LOADED,
  questions,
});
