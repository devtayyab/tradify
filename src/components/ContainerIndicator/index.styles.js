import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: '400px',

    '& img': {
      width: '100%',
    },
  },
  desc1: {
    '& h4': {
      fontWeight: 'bold',
      fontSize: '3rem',
      color: theme.text[6],
      maxWidth: '600px',
    },
  },
  desc2: {
    textAlign: 'center',
    maxWidth: '500px',
    fontWeight: 700,
    '& p': {
      color: theme.text[2],
      fontSize: '1.5rem',
    },
  },
}));

export default useStyles;
