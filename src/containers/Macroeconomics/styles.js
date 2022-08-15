import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: '100%',
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  title: {
    flex: 1,
    background: theme.palette.gradients.blue_linear,
    fontWeight: 'bold',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
  },
}));

export default useStyles;
