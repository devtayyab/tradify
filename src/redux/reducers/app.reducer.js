import { fromJS } from 'immutable';
import { THEME_DARK_MODE, THEME_LIGHT_MODE } from '../../constants';
import {
  SET_DRAWER_STATE,
  SET_SPLASH_SCREEN_STATE,
  OPEN_SNACKBAR_ACTION,
  CLOSE_SNACKBAR_ACTION,
  TOGGLE_THEME_ACTION,
} from '../constants/app.constant';

const initial_state = fromJS({
  theme: THEME_LIGHT_MODE,
  open: true,
  showSplashScreen: false,
  snackbar: {
    open: false,
    notify: '',
    message: '',
  },
});

const appStore = (state = initial_state, action) => {
  switch (action.type) {
    case SET_DRAWER_STATE:
      return state.set('open', action.open);

    case TOGGLE_THEME_ACTION:
      const theme = state.get('theme');
      return state.set('theme', theme === THEME_LIGHT_MODE ? THEME_DARK_MODE : THEME_LIGHT_MODE);

    case SET_SPLASH_SCREEN_STATE:
      return state.set('showSplashScreen', action.show);

    case OPEN_SNACKBAR_ACTION:
      return state
        .setIn(['snackbar', 'open'], true)
        .setIn(['snackbar', 'message'], action.message)
        .setIn(['snackbar', 'notify'], action.notify);

    case CLOSE_SNACKBAR_ACTION:
      return state
        .setIn(['snackbar', 'open'], false)
        .setIn(['snackbar', 'message'], '')
        .setIn(['snackbar', 'notify'], '');

    default:
      return state;
  }
};

export default appStore;
