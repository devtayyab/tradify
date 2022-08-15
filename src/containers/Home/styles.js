import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    '& div::-webkit-scrollbar': {
      display: 'none',
    },
  },
  learn: {
    fontSize: '1.5rem',
    fontWeight: 300,
  },
  title: {
    fontWeight: 'bold',
    background: theme.palette.gradients.blue_linear,
    fontWeight: 'bold',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
  },
  cardItem: {
    margin: '10px !important',
    minWidth: '320px',
    maxWidth: '450px',
  },
  cardLink: {
    fontSize: '.875rem',
    minWidth: '120px',
    color: '#9D9D9D',
    padding: '0 20px',
  },
  activeCardLink: {
    color: theme.palette.peter_river,
    lineHeight: 'normal',
  },
}));

export default useStyles;
