import { Button, ThemeProvider, useTheme, withStyles } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './button1.style';

const Button1 = ({ children, className, rounded, miniRounded, outlined, white, ...props }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      className={clsx(className, classes.root, {
        [classes.rounded]: rounded,
        [classes.miniRounded]: miniRounded,
        [classes.outlined]: outlined,
        [classes.white]: white,
      })}
      {...props}
    >
      {children}
    </Button>
  );
};

export default Button1;
