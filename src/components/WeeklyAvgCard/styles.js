import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#3C3F69',
    minHeight: '200px',
    width: '100%',
    maxWidth: '350px',
    borderRadius: '16px',
    padding: '.875rem 1rem',
  },
  title: {
    color: '#FFF',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  value: {
    color: '#FFF',
    fontSize: '1.2rem',
    fontWeight: 'bold',

    '& span': {
      fontSize: '0.875rem',
      fontWeight: 'bold',
      opacity: 0.5,
    },
  },

  dayItem: {},
  bar: {
    height: '100px',
    width: '1rem',
    backgroundColor: 'rgba(138, 140, 178, 0.3)',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',

    '& > div': {
      transition: 'all ease 1s',
      display: 'flex',
    },

    '& > div:last-child': {
      width: 'inherit ',
      backgroundColor: '#2C81FF',
      borderRadius: '1rem',
    },
  },
}));

export default useStyles;
