import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContainer: {
    display: 'flex',
  },
  rightContainer: {
    background: theme.palette.gradients.main_linear_2,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '50%',

    '& img': {
      width: '100%',
    },
  },
  desc1: {
    paddingTop: '70px',

    '& h4': {
      fontWeight: 'bold',
      fontSize: '3rem',
      color: theme.text[6],
      textAlign: 'center',
    },
  },
  desc2: {
    paddingTop: '25px',

    '& p': {
      color: theme.text[2],
      fontSize: '1.5rem',
      textAlign: 'center',
    },
  },
  rightDesc1: {
    '& h3': {
      fontWeight: 'bold',
      color: theme.palette.common.white,
      textAlign: 'center',
    },
  },
  rightDesc2: {
    '& p': {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: '1.5rem',
      textAlign: 'center',
    },
  },
  refreshIcon: {
    width: '1rem',
    height: '1rem',
  },
  refreshText: {
    paddingLeft: '5px',
    textTransform: 'none',
    fontWeight: 'bold',
  },
}));

export default useStyles;
