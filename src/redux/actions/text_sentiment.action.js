import { RETRIEVE_STOCKS_ACTION } from '../constants/text_sentiment.constant';

export const retrieveStocksAction = (params) => ({
  type: RETRIEVE_STOCKS_ACTION,
  params,
});
