import {
  CLOSE_SNACKBAR_ACTION,
  OPEN_SNACKBAR_ACTION,
  SET_DRAWER_STATE,
  SET_SPLASH_SCREEN_STATE,
  TOGGLE_THEME_ACTION,
} from '../constants/app.constant';

export const setDrawerState = (open) => ({ type: SET_DRAWER_STATE, open });
export const setSplashScreenState = (show) => ({ type: SET_SPLASH_SCREEN_STATE, show });
export const toggleThemeAction = () => ({ type: TOGGLE_THEME_ACTION });

export const openSnackbarAction = (notify, message) => ({
  type: OPEN_SNACKBAR_ACTION,
  notify,
  message,
});
export const closeSnackbarAction = (show) => ({ type: CLOSE_SNACKBAR_ACTION });
