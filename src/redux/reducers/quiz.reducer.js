import { fromJS } from 'immutable';

import {
  APPEND_ANSWER,
  SET_QUESTION_INDEX,
  SET_QUESTION,
  TOGGLE_MODAL,
  SET_QUESTION_LIST,
  FETCH_QUIZ,
  FETCH_END,
  TOGGLE_UNFINISHED_MODAL,
  FETCH_USER,
  SET_USER_DETAIL,
  SAVE_ANSWER,
  FINISH_QUIZ,
  TOGGLE_CONTINUE_MODAL,
  FETCH_ERROR,
} from '../constants/quiz.constant';

import { QUIZ_ENTRY_MODAL } from '../../constants/modal';
import { getItem } from '../../helpers/utils';

const initial_state = fromJS({
  userQuizDetails: {},
  quizName: '',
  quizDescription: '',
  questionList: [],
  currentQuestion: {},
  questionNumber: 0,
  answerList: [],
  quizLength: 0,
  showModal: false,
  showUnfinishedModal: false,
  showFinishedModal: false,
  isLoading: false,
  isError: false,
  error: {},
});

const quizReducer = (state = initial_state, action) => {
  switch (action.type) {
    case APPEND_ANSWER:
      return state.set('answerList', action.params);

    case SET_QUESTION_INDEX:
      return state
        .set('questionNumber', action.index)
        .set('currentQuestion', state.get('questionList')[action.index]);

    case SET_QUESTION:
      return state.set('currentQuestion', action.currentQuestion);

    case TOGGLE_MODAL:
      return state.set('showModal', getItem(QUIZ_ENTRY_MODAL) ? action.value : true);

    case TOGGLE_UNFINISHED_MODAL:
      return state.set('showUnfinishedModal', action.value);

    case TOGGLE_CONTINUE_MODAL:
      return state.set('showFinishedModal', action.value);

    case FETCH_QUIZ:
      return state.set('isLoading', true);

    case FETCH_USER:
      return state.set('isLoading', true);

    case SAVE_ANSWER:
      return state.set('isLoading', true);

    case FINISH_QUIZ:
      return state.set('isLoading', true);

    case SET_QUESTION_LIST:
      return state
        .set(
          'questionList',
          action?.question_set.sort((a, b) => {
            return a.order - b.order;
          }) || []
        )
        .set('quizName', action.name)
        .set('quizDescription', action.description)
        .set('quizLength', action?.question_set.length)
        .set('currentQuestion', action?.question_set[0] || {});

    case SET_USER_DETAIL:
      const getAnswerList = action.userQuiz.usersanswer_set
        .filter((question) => question.answer)
        .map((question) => {
          return action.questionSet
            .find((item) => {
              return question.question === item.id;
            })
            ?.answer_set.find((choices) => choices.id === question.answer);
        })
        .filter((answer) => answer);

      console.log('USER DETAIL', action.userQuiz);
      return state
        .set('userQuizDetails', action.userQuiz)
        .set('answerList', getAnswerList)
        .set('showUnfinishedModal', !action.userQuiz.completed)
        .set('showFinishedModal', action.userQuiz.completed);

    case FETCH_ERROR:
      return state.set('isError', true).set('error', action);

    case FETCH_END:
      return state.set('isLoading', false);

    default:
      return state;
  }
};

export default quizReducer;
