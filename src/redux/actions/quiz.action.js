import {
  APPEND_ANSWER,
  SET_QUESTION_INDEX,
  TOGGLE_MODAL,
  FETCH_QUIZ,
  TOGGLE_UNFINISHED_MODAL,
  TOGGLE_CONTINUE_MODAL,
  FETCH_USER,
  SAVE_ANSWER,
  FINISH_QUIZ,
} from '../constants/quiz.constant';

export const fetchQuizData = (params) => ({ type: FETCH_QUIZ, params });
export const appendAnswerAction = (params) => ({ type: APPEND_ANSWER, params });
export const setIndexAction = (index) => ({ type: SET_QUESTION_INDEX, index });
export const modalToggle = (value) => ({ type: TOGGLE_MODAL, value });
export const toggleUnfinishedModal = (value) => ({ type: TOGGLE_UNFINISHED_MODAL, value });
export const toggleContinueModal = (value) => ({ type: TOGGLE_CONTINUE_MODAL, value });
export const fetchUserDetails = (value) => ({ type: FETCH_USER, value });
export const saveUserAnswer = (data) => ({ type: SAVE_ANSWER, data });
export const uploadQuizData = (data) => ({ type: FINISH_QUIZ, data });
