import { push } from 'react-router-redux';
import { takeEvery, fork, put, call } from 'redux-saga/effects';
import { CLIENT_ID } from '../../config';
import auth from '../../services/auth';
import text_sentiment from '../../services/text_sentiment';

import {
  RETRIEVE_STOCKS_ACTION,
  RETRIEVE_STOCKS_OK,
  RETRIEVE_STOCKS_ERROR,
  RETRIEVE_STOCKS_END,
} from '../constants/text_sentiment.constant';

export function* retrieveStocks(action) {
  try {
    const xhr = yield call(text_sentiment.stocks, action.params);

    if (xhr.status >= 400) {
      throw xhr;
    }

    const data = xhr.data.data.map((item) => {
      const item_key = Object.keys(item)[0];
      return {
        ...item[item_key],
        title: item_key,
      };
    });

    yield put({ type: RETRIEVE_STOCKS_OK, data });
  } catch (e) {
    console.log('error : ', e);
    const { data } = e;

    yield put({ type: RETRIEVE_STOCKS_ERROR, ...e });
  } finally {
    yield put({ type: RETRIEVE_STOCKS_END });
  }
}

export function* retrieveStocksSaga() {
  yield takeEvery(RETRIEVE_STOCKS_ACTION, retrieveStocks);
}

const text_sentiment_sagas = [fork(retrieveStocksSaga)];
export default text_sentiment_sagas;
