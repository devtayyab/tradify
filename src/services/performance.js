import API from './API';
import { TOKEN_KEY } from '../constants/auth';
import { getItem } from '../helpers/utils';

const Performnance = {
  getPerformance: (path, params) => {
    const item = getItem(TOKEN_KEY);
    console.log(item);
    return new API().get(`${path}${params}`, {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${item}`,
    });
  },
  getPerformanceDetails: (params) => {
    return new API().get('/stocks/holding/comparative-performance/', params);
  },
};

export default Performnance;
