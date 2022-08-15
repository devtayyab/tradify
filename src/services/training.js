import API from './API';
import { TOKEN_KEY } from '../constants/auth';
import { getItem } from '../helpers/utils';

const auth = {
  fetchTrainingVideos: (category) => {
    const params = category ? `?name=${category}` : '';
    return new API().get(`/video/categories/${params}`);
  },

  fetchTrainingCategories: () => {
    return new API().get('/video/list/');
  },

  fetchFindCategory: (category) => {
    return API().get(`/video/categories/?name${category}`);
  },
};

export default auth;
