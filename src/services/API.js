import axios from 'axios';
import qs from 'qs';
import { API_BASE_URL } from '../config';
import { TOKEN_KEY } from '../constants/auth';
import { getItem } from '../helpers/utils';

class API {
  constructor() {
    this.baseUrl = API_BASE_URL;
    this.defaultConfig = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer CFziSGvM4EnHt8QcBXYqjYCzLTrTSg`,
      },
    };
  }

  handleFulfilled = (result) => {
    return {
      status: result.status || 200,
      data: result?.data,
    };
  };

  handleRejected = (result) => {
    const data = result?.response?.data;
    return {
      status: result.status || 400,
      data,
    };
  };
 
  async get(url, headers = {}) {
    const config = { baseURL: this.baseUrl, headers };
    const response = await axios.get(url, config).then(this.handleFulfilled, this.handleRejected);

    return response;
  }

  async post(url, data = {}, config = {}) {
    const allConfigs = {
      ...this.defaultConfig,
      headers: {
        ...this.defaultConfig.headers,
        ...config.headers,
      },
      method: 'post',
      url,
      data,
    };
  
    if (allConfigs.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      // if application/x-www-form-urlencoded is the content type, then we stingify the data
      allConfigs.data = qs.stringify(data);
    }

    const response = await axios(allConfigs).then(this.handleFulfilled, this.handleRejected);
    return response;
  }

  async put(url, data = {}, config = {}) {
    const allConfigs = {
      ...this.defaultConfig,
      headers: {
        ...this.defaultConfig.headers,
        ...config.headers,
      },
      method: 'put',
      url,
      data,
    };

    if (allConfigs.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      // if application/x-www-form-urlencoded is the content type, then we stingify the data
      allConfigs.data = qs.stringify(data);
    }

    const response = await axios.put(allConfigs).then(this.handleFulfilled, this.handleRejected);

    return response;
  }

  async patch(url, data = {}, config = {}) {
    const allConfigs = {
      ...this.defaultConfig,
      headers: {
        ...this.defaultConfig.headers,
        ...config.headers,
      },
      method: 'patch',
      url,
      data,
    };

    if (allConfigs.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      // if application/x-www-form-urlencoded is the content type, then we stingify the data
      allConfigs.data = qs.stringify(data);
    }

    const response = await axios(allConfigs).then(this.handleFulfilled, this.handleRejected);

    return response;
  }

  async delete(url, params) {
    const config = { params, baseURL: this.baseUrl };
    const response = await axios
      .delete(url, config)
      .then(this.handleFulfilled, this.handleRejected);

    return response;
  }

  _handle400StatusCode() {
    // TODO: Check if unauthorized then logout
  }
}

export default API;
