import { takeEvery, fork, put, call } from 'redux-saga/effects';
import { USER_TYPES } from '../../constants/auth';
import auth from '../../services/auth';

import {
  SIGN_UP_ACTION,
  SIGN_UP_OK,
  SIGN_UP_ERROR,
  SIGN_UP_END,
  VERIFY_EMAIL_ACTION,
  VERIFY_EMAIL_OK,
  VERIFY_EMAIL_ERROR,
  VERIFY_EMAIL_END,
} from '../constants/signup.constant';

export function* signUp(action) {
  try {
    const params = {
      ...action.params,
      user_type: USER_TYPES.RETAIL_CLIENT,
    };
    const xhr = yield call(auth.register, params);

    if (xhr.status >= 400) {
      throw xhr;
    }

    yield put({ type: SIGN_UP_OK, ...xhr });
  } catch (e) {
    console.log('error ', e);
    yield put({ type: SIGN_UP_ERROR, ...e });
  } finally {
    yield put({ type: SIGN_UP_END });
  }
}

export function* VerifyEmail(action) {
  try {
    const xhr = yield call(auth.verifyEmail, action.params);

    if (xhr.status >= 400) {
      throw xhr;
    }

    yield put({ type: VERIFY_EMAIL_OK, ...xhr });
  } catch (e) {
    console.log('error ', e);
    yield put({ type: VERIFY_EMAIL_ERROR, ...e });
  } finally {
    yield put({ type: VERIFY_EMAIL_END });
  }
}

export function* signUpSaga() {
  yield takeEvery(SIGN_UP_ACTION, signUp);
}

export function* VerifyEmailSaga() {
  yield takeEvery(VERIFY_EMAIL_ACTION, VerifyEmail);
}

const sign_up_sagas = [fork(signUpSaga), fork(VerifyEmailSaga)];

export default sign_up_sagas;
