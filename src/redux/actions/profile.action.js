import { APPEND_ANSWER, SET_QUESTION_INDEX, SET_QUESTION } from '../constants/profile.constant';

export const appendAnswerAction = (params) => ({ type: APPEND_ANSWER, params });
export const setIndexAction = (index) => ({ type: SET_QUESTION_INDEX, index });
export const setQuestionAction = (currentQuestion) => ({ type: SET_QUESTION, currentQuestion });
