import { push } from 'react-router-redux';
import { takeEvery, fork, put, call } from 'redux-saga/effects';
import { CLIENT_ID } from '../../config';
import training from '../../services/training';

import {
  FETCH_TRAINING_VIDEOS,
  SET_TRAINING_VIDEOS,
  SET_CURRENT_CATEGORY,
  FETCH_END,
  FETCH_ERROR,
} from '../constants/training.constant';

export function* fetchTrainingVideos(action) {
  try {
    const xhr = yield call(training.fetchTrainingVideos, action.name);
    const GET_TYPE = action.name ? SET_CURRENT_CATEGORY : SET_TRAINING_VIDEOS;
    if (xhr.status >= 400) {
      throw xhr;
    }

    console.log('TRAINING DATA', xhr);

    yield put({ type: GET_TYPE, ...xhr.data });
  } catch (e) {
    console.log('error : ', e);
    yield put({ type: FETCH_ERROR, ...e });
  } finally {
    yield put({ type: FETCH_END });
  }
}

export function* fetchVideos() {
  yield takeEvery(FETCH_TRAINING_VIDEOS, fetchTrainingVideos);
}

const login_sagas = [fork(fetchVideos)];
export default login_sagas;
