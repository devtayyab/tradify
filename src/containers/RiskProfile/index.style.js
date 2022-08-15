import { makeStyles } from '@material-ui/core/styles';
import bg from '../../assets/images/portfolio_management/bg.png';
const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: 'fit-content',
    color: theme.palette.common.white,
    background: 'linear-gradient(138.19deg, #41E7B0 2.08%, #2297F3 50.52%, #8358FC 94.79%)',
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
    fontWeight: 'bold',
    margin: '0.5em',
    textAlign: 'center',
  },
  question: {
    fontWeight: 'bold',
    margin: '1em',
    textAlign: 'center',
  },
  titleThin: {
    fontWeight: '400',
  },

  optionContainer: {
    margin: '2em auto',
  },

  nextBtn: {
    marginTop: '2em',
    minWidth: '60%',
  },

  backBtn: {
    margin: '2em',
    background: 'transparent',
    color: theme.palette.common.white,
    boxShadow: 'none',
  },

  contentBlue: {
    background: theme.palette.gradients.blue_linear,
    fontWeight: 'bold',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
    margin: '2em 0',
  },

  imgIcon: {
    marginLeft: '1em',
  },

  imgBackIcon: {
    marginRight: '1em',
  },
}));

export default useStyles;
