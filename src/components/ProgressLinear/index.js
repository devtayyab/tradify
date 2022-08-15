import { LinearProgress, makeStyles } from '@material-ui/core';

const ProgressLinear = ({ color, height, ...props }) => {
  const classes = useStyles({ color, height });
  return (
    <LinearProgress
      variant="determinate"
      classes={{
        root: classes.root,
        colorPrimary: classes.colorPrimary,
        bar: classes.bar,
      }}
      {...props}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  root: ({ height }) => ({
    height: `${height}px` || 6,
    borderRadius: 4,
    margin: '1em 0',
  }),
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: ({ color }) => ({
    borderRadius: 5,
    background: color || theme.palette.gradients.blue_linear,
  }),
}));

export default ProgressLinear;
