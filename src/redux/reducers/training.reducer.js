import { fromJS } from 'immutable';
import {
  FETCH_TRAINING_VIDEOS,
  FETCH_END,
  SET_TRAINING_VIDEOS,
  SET_CURRENT_CATEGORY,
  SET_CURRENT_VIDEO,
  TOGGLE_MODAL,
  FETCH_ERROR,
  TOGGLE_PROGRESS_MODAL,
} from '../constants/training.constant';

import { TRAINING_MODAL } from '../../constants/modal';
import { getItem } from '../../helpers/utils';

const initial_state = fromJS({
  trainingVideos: [],
  currentCategory: {},
  currentVideo: {},
  loading: false,
  showModal: false,
  progressModal: true,
  error: {},
  isError: false,
});

const trainingReducer = (state = initial_state, action) => {
  switch (action.type) {
    case FETCH_TRAINING_VIDEOS:
      return state.set('loading', true);

    case SET_TRAINING_VIDEOS:
      return state.set('trainingVideos', action.data);

    case SET_CURRENT_CATEGORY:
      console.log('ACTION ARE', action.data);
      return state
        .set('currentCategory', action?.data[0])
        .set('currentVideo', action?.data[0]?.attributes.videos[0]);

    case SET_CURRENT_VIDEO:
      console.log('ACTION ARE', action.data);
      return state.set('currentVideo', action.data);

    case FETCH_END:
      return state.set('loading', false);

    case FETCH_ERROR:
      console.log('ENTER HERE', action);
      return state.set('isError', true).set('error', action.data.error);

    case TOGGLE_MODAL:
      return state.set('showModal', getItem(TRAINING_MODAL) ? action.value : true);

    case TOGGLE_PROGRESS_MODAL:
      return state.set('progressModal', action.value);
    default:
      return state;
  }
};

export default trainingReducer;
