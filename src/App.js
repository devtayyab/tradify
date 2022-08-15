import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider } from '@material-ui/core';

import MainRouter from './routes';

import { history } from './redux/store';
import { dark, light } from './styles/theme';
import SplashScreen from './components/SplashScreen';
import Snackbar from './components/SnackBar';

import { closeSnackbarAction } from './redux/actions/app.action';
import { THEME_LIGHT_MODE } from './constants';

const App = (props) => {
  const app = useSelector((store) => store.app.toJS());
  const theme = app.theme;
  const themePreference = theme === THEME_LIGHT_MODE ? light : dark;
  const { message, open, notify } = app.snackbar;
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(closeSnackbarAction());
  };

  return (
    <ThemeProvider theme={themePreference}>
      <Snackbar message={message} severity={notify} open={open} onClose={handleClose} />
      <SplashScreen />
      <MainRouter history={history} {...props} />
    </ThemeProvider>
  );
};

export default App;
