import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    background: theme.palette.gradients.blue_linear,
    fontWeight: 'bold',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
  },
  listContainer: {
    [theme.breakpoints.up('sm')]: {
      padding: '30px 15px',

      '& > div': {
        margin: '15px',
      },
    },
  },
}));

export default useStyles;
