import {
  EDIT_FORM_ACTION,
  SET_ERROR_ACTION,
  LOGIN_ACTION,
  MODAL_CLOSE_ACTION,
  RESET_ACTION,
} from '../constants/login.constant';

export const loginAction = (params) => ({ type: LOGIN_ACTION, params });
export const editFormAction = (key, value) => ({ type: EDIT_FORM_ACTION, key, value });
export const setErrorAction = (key, errors = []) => ({ type: SET_ERROR_ACTION, key, errors });
export const modalCloseAction = () => ({ type: MODAL_CLOSE_ACTION });
export const resetAction = () => ({ type: RESET_ACTION });
