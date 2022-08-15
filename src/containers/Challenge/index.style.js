import { makeStyles } from '@material-ui/core/styles';
import bg from '../../assets/images/portfolio_management/bg.png';
const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    margin: 0,
    width: '100%',
    maxWidth: '100%',
    position: 'relative',
  },

  content: {
    background: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    paddingTop: '50px',
    marginTop: '3rem',
    borderRadius: '6px',
  },

  card: {
    padding: '2em 0 4em 0',
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    color: theme.text[4],
    fontWeight: 'bold',
    textAlign: 'center',
    background: theme.palette.gradients.blue_linear,
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
  },
}));

export default useStyles;
