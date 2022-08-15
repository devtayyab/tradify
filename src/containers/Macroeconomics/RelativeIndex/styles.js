import { makeStyles } from '@material-ui/core';
import { fontWeight } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  container: {
    '&:not(:first-child)': {
      marginTop: '3rem',
    },
  },
  title: {
    background: theme.palette.gradients.main_linear_2,
    padding: '.5rem',
    borderRadius: '50px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',

    '& p': {
      color: '#FFF',
      fontWeight: 'bold',
    },
  },
  th: {
    background: theme.palette.gradients.main_linear_2,
    padding: '.5rem 0',
    borderRadius: '50px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',

    '& div': {
      display: 'flex',
      justifyContent: 'center',
    },

    '& p': {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: '.875rem',
    },
  },
  tb: {
    minHeight: '32px',
    border: `solid ${theme.palette.divider} 1px`,
    marginTop: '5px',
    borderRadius: '50px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',

    '& div': {
      display: 'flex',
      justifyContent: 'center',
    },

    '& div:first-child': {
      justifyContent: 'flex-start',
      paddingLeft: '5px',
    },

    '& p': {
      fontSize: '.7rem',
      textAlign: 'center',
    },
  },

  cbRoot: {
    padding: 0,
    paddingRight: '3px',

    '& svg': {
      width: '.75rem',
      height: '.75rem',
    },
  },
  rating: {
    width: '100%',
  },
  arrowIcon: {
    position: 'relative',
    height: '18px',
    width: '22px',
    margin: '0 5px',

    '& img': {
      '&:first-child': {
        position: 'absolute',
        height: '18px',
        width: '22px',
        left: 0,
      },
      '&:last-child': {
        position: 'absolute',
        height: '18px',
        width: '22px',
        left: 0,
        transform: 'rotate(180deg)',
      },
    },
  },
}));

export default useStyles;
