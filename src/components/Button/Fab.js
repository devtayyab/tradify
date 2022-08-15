import { Fab as MuiFab, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const Fab = ({ children, IconButton, className, primary, secondary, white, ...props }) => {
  const classes = useStyles();
  return (
    <MuiFab
      className={clsx(classes.root, classes.className, {
        [classes.primary]: primary,
        [classes.secondary]: secondary,
      })}
      {...props}
    >
      {children || <IconButton />}
    </MuiFab>
  );
};

export default Fab;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.brand.primary,

    '&.Mui-disabled': {
      opacity: 0.5,
      color: theme.palette.brand.primary,
    },
    '&:hover': {
      filter: 'brightness(50%)',
      transition: 'all .2s ease',
    },
  },
  primary: {
    background: theme.palette.primary.mainGradient,
    color: theme.palette.common.white,

    '&.Mui-disabled': {
      opacity: 0.5,
      color: theme.palette.common.white,
    },
  },
  secondary: {
    background: theme.palette.secondary.mainGradient,
    color: theme.palette.common.white,

    '&.Mui-disabled': {
      opacity: 0.5,
      color: theme.palette.common.white,
    },
  },
}));
