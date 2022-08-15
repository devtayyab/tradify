import {
  EDIT_FORM_ACTION,
  SET_ERROR_ACTION,
  SIGN_UP_ACTION,
  MODAL_CLOSE_ACTION,
  RESET_ACTION,
  VERIFY_EMAIL_ACTION,
} from '../constants/signup.constant';

export const signUpAction = (params) => ({ type: SIGN_UP_ACTION, params });
export const editFormAction = (key, value) => ({ type: EDIT_FORM_ACTION, key, value });
export const setErrorAction = (key, errors = []) => ({ type: SET_ERROR_ACTION, key, errors });
export const modalCloseAction = () => ({ type: MODAL_CLOSE_ACTION });
export const resetAction = () => ({ type: RESET_ACTION });
export const verifyEmailAction = (params) => ({ type: VERIFY_EMAIL_ACTION, params });
