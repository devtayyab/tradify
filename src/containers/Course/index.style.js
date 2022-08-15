import { makeStyles } from '@material-ui/core/styles';
import bg from '../../assets/images/portfolio_management/bg.png';
const useStyles = makeStyles((theme) => ({
  container: {
    padding: '1em',
    margin: 0,
    width: '100%',
    maxWidth: '100%',
    position: 'relative',
  },

  videoDetails: {
    padding: '1em 0.5em',
    width: '95%',
    background: theme.palette.gradients.blue_linear,
    transform: 'translateY(-10px)',
    color: theme.palette.common.white,
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

  paragraph: {
    marginTop: '1em',
  },
}));

export default useStyles;
