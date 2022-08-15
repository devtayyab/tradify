import { push } from 'react-router-redux';
import { takeEvery, fork, put, call } from 'redux-saga/effects';
import { CLIENT_ID } from '../../config';
import auth from '../../services/auth';

import {
  SET_QUESTION_LIST,
  SET_USER_DETAIL,
  FETCH_QUIZ,
  FETCH_USER,
  FETCH_END,
  SAVE_ANSWER,
  FINISH_QUIZ,
  FETCH_ERROR,
} from '../constants/quiz.constant';

export function* fetchQuiz(action) {
  try {
    const xhr = yield call(auth.fetchQuiz);

    if (xhr.status >= 400) {
      throw xhr;
    }

    yield put({ type: SET_QUESTION_LIST, ...xhr.data.data[0].attributes });
  } catch (e) {
    console.log('error : ', e);
    const { data } = e;
    yield put({ type: FETCH_ERROR, ...data });
  } finally {
    yield put({ type: FETCH_END });
  }
}

export function* quizSaga() {
  yield takeEvery(FETCH_QUIZ, fetchQuiz);
}

export function* fetchUserQuizDetail(action) {
  try {
    const xhr = yield call(auth.getUserDetails, 'investment-risk-tolerance-quiz');

    if (xhr.status >= 400) {
      throw xhr;
    }

    const result = xhr.data.data;

    const getData = {
      lastQuestion: result.last_question_id,
      userQuiz: result.quiz.quiztakers_set,
      questionSet: result.quiz.question_set,
    };

    if (
      !result.last_question_id &&
      result.quiz.quiztakers_set.useranswer_set.every((question) => question.anwer === null)
    ) {
      yield put(push('/app/risk-tolerance-quiz/'));
    }

    yield put({ type: SET_USER_DETAIL, ...getData });
  } catch (e) {
    console.log('error : ', e);
    const { data } = e;
  } finally {
    yield put({ type: FETCH_END });
  }
}

export function* fetchUserDetail() {
  yield takeEvery(FETCH_USER, fetchUserQuizDetail);
}

export function* saveUserAnswer(action) {
  try {
    console.log('START Saving answer');

    console.log(action);

    const xhr = yield call(auth.submitAnswer, action.data);

    if (xhr.status >= 400) {
      throw xhr;
    }

    console.log('ANSWER IS SAVED', xhr.data);

    // yield put({ type: SET_USER_DETAIL, ...xhr.data.data[0].attributes });
  } catch (e) {
    console.log('error : ', e);
    const { data } = e;
  } finally {
    yield put({ type: FETCH_END });
  }
}

export function* saveAnswer() {
  yield takeEvery(SAVE_ANSWER, saveUserAnswer);
}

export function* submitQuiz(action) {
  try {
    console.log('START Saving answer');

    console.log(action);

    const xhr = yield call(auth.submitQuiz, action.data);

    if (xhr.status >= 400) {
      throw xhr;
    }

    console.log('ANSWER IS SAVED', xhr.data);

    // yield put({ type: SET_USER_DETAIL, ...xhr.data.data[0].attributes });
  } catch (e) {
    console.log('error : ', e);
    const { data } = e;
  } finally {
    yield put({ type: FETCH_END });
  }
}

export function* saveQuiz() {
  yield takeEvery(FINISH_QUIZ, submitQuiz);
}

const quiz_sagas = [fork(quizSaga), fork(fetchUserDetail), fork(saveAnswer), fork(saveQuiz)];
export default quiz_sagas;
