import { fromJS } from 'immutable';
import {
  RETRIEVE_STOCKS_ACTION,
  RETRIEVE_STOCKS_OK,
  RETRIEVE_STOCKS_ERROR,
  RETRIEVE_STOCKS_END,
} from '../constants/text_sentiment.constant';

const initial_state = fromJS({
  data: [],
  loading: false,
});

const textSentimentReducer = (state = initial_state, action) => {
  switch (action.type) {
    case RETRIEVE_STOCKS_ACTION:
      return state.set('loading', true);

    case RETRIEVE_STOCKS_OK:
      return state.set('data', action.data);

    case RETRIEVE_STOCKS_ERROR:
      return state;

    case RETRIEVE_STOCKS_END:
      return state.set('loading', false);

    default:
      return state;
  }
};

export default textSentimentReducer;
