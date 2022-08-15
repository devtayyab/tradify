import { Switch as BaseSwitch, withStyles } from '@material-ui/core';

const Switch = withStyles((theme) => ({
  root: {
    width: 40,
    height: 20,
    padding: 0,
    margin: theme.spacing(1),
    overflow: 'inherit',
  },
  switchBase: {
    padding: 1,
    border: 'none',

    '&$checked': {
      transform: 'translate(20px, 0px)',
      color: theme.palette.common.white,
      '& + $track': {
        background: theme.palette.primary.mainGradient,
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: theme.palette.primary.mainGradient,
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 18,
    height: 18,
    boxShadow: 'unset',
  },
  track: {
    borderRadius: 20,
    backgroundColor: theme.palette.primary.disabled,
    opacity: 1,
    transition: theme.transitions.create(['background-color']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <BaseSwitch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default Switch;
