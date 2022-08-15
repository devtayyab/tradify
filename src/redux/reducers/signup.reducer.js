import { fromJS } from 'immutable';
import { ERROR, SUCCESS } from '../../constants';
import {
  EDIT_FORM_ACTION,
  SET_ERROR_ACTION,
  SIGN_UP_ACTION,
  SIGN_UP_OK,
  SIGN_UP_ERROR,
  SIGN_UP_END,
  MODAL_CLOSE_ACTION,
  RESET_ACTION,
} from '../constants/signup.constant';

const initial_state = fromJS({
  form: {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  },
  errors: {
    first_name: [],
    last_name: [],
    email: [],
    password: [],
  },
  loading: false,
  notify: '',
  message: '',
  successModal: false,
});

const signUpReducer = (state = initial_state, action) => {
  let levels = undefined;
  switch (action.type) {
    case EDIT_FORM_ACTION:
      levels = action.key.split('.');
      return state.setIn(['form', ...levels], action.value).setIn(['errors', ...levels], []);

    case SET_ERROR_ACTION:
      levels = action.key.split('.');
      return state.setIn(['errors', ...levels], action.errors);

    case MODAL_CLOSE_ACTION:
      return state.set('successModal', false);

    // sign up start
    case SIGN_UP_ACTION:
      return state.set('loading', true);
    case SIGN_UP_OK:
      return state.set('notify', SUCCESS).set('successModal', true);
    case SIGN_UP_ERROR:
      return state.set('errors', action.data).set('notify', ERROR);
    case SIGN_UP_END:
      return state.set('notify', '').set('loading', false);
    // sign up end

    case RESET_ACTION:
      return initial_state;
    // sign up end

    default:
      return state;
  }
};

export default signUpReducer;
