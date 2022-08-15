import { push } from 'react-router-redux';
import { takeEvery, fork, put, call } from 'redux-saga/effects';
import { CLIENT_ID } from '../../config';
import auth from '../../services/auth';
import { fetchUserDetails } from '../actions/quiz.action';

import { LOGIN_ACTION, LOGIN_OK, LOGIN_ERROR, LOGIN_END } from '../constants/login.constant';

export function* login(action) {
  try {
    const params = {
      ...action.params,
      grant_type: 'password',
      client_id: CLIENT_ID,
    };

    const xhr = yield call(auth.login, params);

    if (xhr.status >= 400) {
      throw xhr;
    }

    yield put({ type: LOGIN_OK, ...xhr.data });

    if (xhr.data) {
      yield put(fetchUserDetails());
    }
  } catch (e) {
    console.log('error : ', e);
    const { data } = e;
    const errors = data.errors[0] || data.errors;
    let general_error = false;
    let unverified_email = false;
    if (errors.code == 'unverified_email') {
      unverified_email = true;
    } else {
      general_error = true;
    }

    yield put({ type: LOGIN_ERROR, general_error, unverified_email, ...errors });
  } finally {
    yield put({ type: LOGIN_END });
  }
}

export function* loginSaga() {
  yield takeEvery(LOGIN_ACTION, login);
}

const login_sagas = [fork(loginSaga)];
export default login_sagas;
