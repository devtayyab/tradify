import API from './API';

const text_sentiment = {
  stocks: (params) => {
    return new API().get('/text_sentiment/source/', params);
  },
};

export default text_sentiment;
