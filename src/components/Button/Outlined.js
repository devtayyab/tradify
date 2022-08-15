import { Button, ThemeProvider, useTheme, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { radius } from '../../styles/theme/metrics';

import clsx from 'clsx';

const Outlined = ({
  children,
  className,
  secondary,
  rounded,
  miniRounded = true,
  white,
  small,
  medium,
  large,
  fullWidth,
  ...props
}) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div
      className={clsx(classes.rootBg, {
        [classes.miniRounded]: miniRounded && !rounded,
        [classes.rounded]: rounded,
        [classes.disabled]: !!props.disabled,
        [classes.secondary]: !!secondary,
        [classes.small]: small,
        [classes.medium]: medium,
        [classes.large]: large,
        [classes.fullWidth]: fullWidth,
      })}
    >
      <Button
        variant="contained"
        className={clsx(className, classes.root, {
          [classes.rounded]: rounded,
          [classes.white]: white,
          [classes.secondaryRoot]: secondary,
          [classes.smallRoot]: small,
          [classes.mediumRoot]: medium,
          [classes.largeRoot]: large,
        })}
        {...props}
      >
        {children}
      </Button>
    </div>
  );
};

export default Outlined;

const useStyles = makeStyles((theme) => ({
  rootBg: {
    display: 'inline-block',
    background: theme.palette.primary.mainGradient,
    padding: '2px',
    minWidth: '200px',
    margin: '0.5em',
  },
  root: {
    fontSize: theme.typography.caption.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    background: theme.palette.common.white,
    padding: '6px 20px',
    boxShadow: 'unset',
    minWidth: 'inherit',
    width: 'inherit',
    height: '36px',

    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },

    '& .MuiButton-label': {
      background: theme.palette.primary.mainGradient,
      fontWeight: 'bold',
      '-webkitBackgroundClip': 'text',
      '-webkitTextFillColor': 'transparent',
    },

    '&.Mui-disabled': {
      color: theme.palette.peter_river,
      background: theme.palette.common.white,
    },
  },
  white: {
    color: theme.text[3],
    background: theme.palette.common.white,
    backgroundColor: theme.palette.common.white,
  },
  small: {
    minWidth: 'unset',
  },
  smallRoot: {
    padding: '4px 30px',
    height: '100%',
  },
  medium: {
    minWidth: 'unset',
  },
  mediumRoot: {
    fontSize: theme.typography.body2.fontSize,
    padding: '10px 36px',
    minWidth: '246px',
    height: 'unset',
  },
  large: {
    minWidth: 'unset',
  },
  largeRoot: {
    fontSize: theme.typography.body1.fontSize,
    padding: '14px 62px',
    minWidth: '296px',
    height: 'unset',
  },
  secondary: {
    background: theme.palette.secondary.mainGradient,
    background: 'red',
  },
  secondaryRoot: {
    '& .MuiButton-label': {
      background: theme.palette.secondary.mainGradient,
      fontWeight: 'bold',
      '-webkitBackgroundClip': 'text',
      '-webkitTextFillColor': 'transparent',
    },
  },
  disabled: {
    opacity: 0.5,
  },
  rounded: {
    borderRadius: radius[5],
  },
  miniRounded: {
    borderRadius: radius[0],
  },
  fullWidth: {
    minWidth: '100%',
    width: '100%',
  },
}));
