import {
  FETCH_TRAINING_VIDEOS,
  TOGGLE_MODAL,
  SET_CURRENT_VIDEO,
  TOGGLE_PROGRESS_MODAL,
} from '../constants/training.constant';

export const fetchTrainingVideos = (name) => ({ type: FETCH_TRAINING_VIDEOS, name });
export const modalToggle = (value) => ({ type: TOGGLE_MODAL, value });
export const toggleProgressModal = (value) => ({ type: TOGGLE_PROGRESS_MODAL, value });
export const setCurrentVideo = (video) => ({ type: SET_CURRENT_VIDEO, video });
