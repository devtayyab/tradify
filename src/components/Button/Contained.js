import { Button, makeStyles, useTheme } from '@material-ui/core';
import clsx from 'clsx';

import { radius } from '../../styles/theme/metrics';

const Contained = ({
  children,
  className,
  secondary,
  sharp,
  rounded,
  miniRounded,
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
    <Button
      variant="contained"
      className={clsx(classes.root, className, {
        [classes.rounded]: rounded,
        [classes.sharp]: sharp,
        [classes.miniRounded]: miniRounded,
        [classes.white]: white,
        [classes.secondary]: secondary,
        [classes.small]: small,
        [classes.medium]: medium,
        [classes.large]: large,
        [classes.fullWidth]: fullWidth,
      })}
      {...props}
    >
      {children}
    </Button>
  );
};

export default Contained;

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: theme.typography.caption.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white,
    background: theme.palette.primary.mainGradient,
    padding: '10px 40px',
    boxShadow: 'unset',
    minWidth: '204px',
    height: '40px',
    margin: '0.5em',

    '&:disabled': {
      opacity: 0.5,
      color: theme.palette.common.white,
    },
  },
  small: {
    padding: '8px 32px',
    minWidth: 'unset',
    height: '32px',
  },
  medium: {
    fontSize: theme.typography.body2.fontSize,
    padding: '12px 40px',
    minWidth: '250px',
    height: 'unset',
  },
  large: {
    fontSize: theme.typography.body1.fontSize,
    padding: '16px 64px',
    minWidth: '300px',
    height: 'unset',
  },
  secondary: {
    background: theme.palette.secondary.mainGradient,
  },
  sharp: {
    borderRadius: 'unset',
  },
  rounded: {
    borderRadius: radius[5],
  },
  miniRounded: {
    borderRadius: radius[0],
  },
  white: {
    color: theme.text[3],
    background: theme.palette.common.white,
    backgroundColor: theme.palette.common.white,
  },
  fullWidth: {
    minWidth: '100%',
    width: '100%',
  },
}));
