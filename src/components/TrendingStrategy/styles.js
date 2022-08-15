import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 1rem',
  },
  cardContainer: {
    backgroundColor: '#FFF',
    width: '100%',
    maxWidth: '350px',
    borderRadius: '16px',
    boxShadow: '0px 20px 30px rgba(167, 209, 233, 0.45)',
    padding: '1.5rem 2rem',
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
  },
  cardTitle: {
    background: theme.palette.gradients.gradient_1,
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '.5rem 0',
  },
  name: {
    fontWeight: 'bold',
  },
  desc: {
    color: theme.palette.gray1,
  },
}));

export default useStyles;
