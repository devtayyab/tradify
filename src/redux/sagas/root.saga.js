import { all } from 'redux-saga/effects';
import login_sagas from './login.saga';
import sign_up_sagas from './signup.saga';
import quiz_sagas from './quiz.saga';
import training_sagas from './training.saga';
import text_sentiment_sagas from './text_sentiment.saga';

export default function* rootSaga() {
  yield all([
    ...sign_up_sagas,
    ...login_sagas,
    ...quiz_sagas,
    ...training_sagas,
    ...text_sentiment_sagas,
  ]);
}
