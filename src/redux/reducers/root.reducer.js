import { routerReducer } from 'react-router-redux';

import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import appReducer from './app.reducer';
import signUpReducer from './signup.reducer';
import loginReducer from './login.reducer';
import quizReducer from './quiz.reducer';
import profileReducer from './profile.reducer';
import trainingReducer from './training.reducer';
import textSentimentReducer from './text_sentiment.reducer';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  signUp: signUpReducer,
  login: loginReducer,
  quiz: quizReducer,
  profile: profileReducer,
  text_sentiment: textSentimentReducer,
  routing: routerReducer,
  training: trainingReducer,
});

export default rootReducer;
