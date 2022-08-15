import { Box, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import Switch from '../../components/Switch';
import { THEME_DARK_MODE, THEME_LIGHT_MODE } from '../../constants';
import { HEADER_HEIGHT } from '../../constants/reponsive';
import { toggleThemeAction } from '../../redux/actions/app.action';

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.app.toJS().theme);
  const classes = useStyles();

  const toggleTheme = () => {
    dispatch(toggleThemeAction());
  };

  return (
    <Box padding="20px" marginBottom={HEADER_HEIGHT} display="flex" alignItems="center">
      <Typography
        className={clsx(classes.label, { [classes.lightActive]: theme === THEME_LIGHT_MODE })}
      >
        Light
      </Typography>
      <Switch checked={theme === THEME_DARK_MODE} onChange={toggleTheme} name="theme-switch" />
      <Typography
        className={clsx(classes.label, { [classes.darkActive]: theme === THEME_DARK_MODE })}
      >
        Dark
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  label: {
    color: 'transparent',
  },
  lightActive: {
    color: theme.palette.common.white,
  },
  darkActive: {
    background: theme.palette.gradients.blue_linear,
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
  },
}));
