import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    maxWidth: '350px',
  },
  header: {
    background: theme.palette.gradients.gradient_1,
  },
  content: {},
  avatar: {
    '& > div': {
      backgroundColor: '#F5F5F5',
      width: '2rem',
      height: '2rem',

      '& img': {
        width: '1rem',
        height: '1rem',
      },
    },
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  subheader: {
    color: '#FFF',
  },
}));

export default useStyles;
