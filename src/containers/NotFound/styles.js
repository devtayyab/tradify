import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: '50%',

    '& img': {
      width: '100%',
    },
  },
  desc1: {
    '& h4': {
      fontWeight: 'bold',
      fontSize: '3rem',
      color: theme.text[6],
    },
  },
  desc2: {
    '& p': {
      color: theme.text[2],
      fontSize: '1.5rem',
    },
  },
}));

export default useStyles;
