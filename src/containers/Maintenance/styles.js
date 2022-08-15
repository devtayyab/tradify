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
    '& p:first-child': {
      color: theme.text[2],
      fontSize: '1.5rem',
    },

    '& p:last-child': {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
  },
  telephone: {
    '& > span > span': {
      opacity: 0.5,
    },
  },
  visitFb: {
    paddingLeft: '7px',
    background: theme.palette.gradients.blue_linear,
    textTransform: 'none',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
  },
  footer: {
    display: 'flex',
    flex: '1',
    flexWrap: 'wrap',
    textAlign: 'center',
    justifyContent: 'space-between',
    width: '70%',
    borderTop: `solid ${theme.palette.border} 1px`,
    padding: '20px 0px 50px 0px',

    [theme.breakpoints.down('sm')]: {
      width: '98%',
    },
    [theme.breakpoints.only('xs')]: {
      justifyContent: 'center',

      '& > div:first-child': {
        width: '100%',
      },

      '& > div:last-child': {
        paddingTop: '5px',
      },
    },
  },
}));

export default useStyles;
