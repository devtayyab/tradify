import API from './API';
import { TOKEN_KEY } from '../constants/auth';
import { getItem } from '../helpers/utils';

const auth = {
  register: (params) => {
    return new API().post('/user/registration/', params);
  },

  login: (credentials) => {
    return new API().post('/user/oauth/token/', credentials, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },

  fetchQuiz: (params) => {
    return new API().get('/quiz/list/', params);
  },

  submitAnswer: (data) => {
    const item = getItem(TOKEN_KEY);

    console.log('revceived data', data);

    return new API().patch('/quiz/save-answer/', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${item}`,
      },
    });
  },
  submitQuiz: (data) => {
    const item = getItem(TOKEN_KEY);

    return new API().post('/quiz/submit/investment-risk-tolerance-quiz/', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${item}`,
      },
    });
  },

  getUserQuiz: (params) => {
    return new API().post('/quiz/registration/', params);
  },

  getUserDetails: (type) => {
    const item = getItem(TOKEN_KEY);

    return new API().get(`/quiz/detail/${type}/`, {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${item}`,
    });
  },

  verifyEmail: (params) => {
    return new API().get(`/user/email-verification/`, params);
  },
};

export default auth;
