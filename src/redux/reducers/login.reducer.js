import { fromJS } from 'immutable';
import { push } from 'react-router-redux';
import { ERROR, SUCCESS } from '../../constants';
import { TOKEN_KEY, REFRESH_KEY } from '../../constants/auth';
import {
  EDIT_FORM_ACTION,
  SET_ERROR_ACTION,
  LOGIN_ACTION,
  LOGIN_OK,
  LOGIN_ERROR,
  LOGIN_END,
  MODAL_CLOSE_ACTION,
  RESET_ACTION,
} from '../constants/login.constant';

const initial_state = fromJS({
  form: {
    username: '',
    password: '',
  },
  errors: {
    username: [],
    password: [],
  },
  general_error: false,
  loading: false,
  notify: '',
  message: '',
  unverified_email_modal: false,
});

const loginReducer = (state = initial_state, action) => {
  let levels = undefined;
  switch (action.type) {
    case EDIT_FORM_ACTION:
      levels = action.key.split('.');
      return state
        .set('general_error', false)
        .setIn(['form', ...levels], action.value)
        .setIn(['errors', ...levels], []);

    case SET_ERROR_ACTION:
      levels = action.key.split('.');
      return state.setIn(['errors', ...levels], action.errors);

    case MODAL_CLOSE_ACTION:
      return state.set('unverified_email_modal', false);

    case LOGIN_ACTION:
      return state.set('general_error', false).set('loading', true);

    case LOGIN_OK:
      console.log('LOGIN DETAILS ARE', action.data);
      localStorage.setItem(TOKEN_KEY, action.data.access_token);
      localStorage.setItem(REFRESH_KEY, action.data.refresh_token);

      return state.set('notify', SUCCESS);

    case LOGIN_ERROR:
      return state
        .setIn(['errors', 'username'], action?.username || [])
        .setIn(['errors', 'passwordd'], action?.password || [])
        .set('general_error', action.general_error)
        .set('unverified_email_modal', action.unverified_email)
        .set('notify', ERROR);

    case LOGIN_END:
      return state.set('notify', '').set('loading', false);

    case RESET_ACTION:
      return initial_state;

    default:
      return state;
  }
};

export default loginReducer;
