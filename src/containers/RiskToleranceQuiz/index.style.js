import { makeStyles } from '@material-ui/core/styles';
import bg from '../../assets/images/portfolio_management/bg.png';
const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    margin: 0,
    width: '100%',
    maxWidth: '1200px',
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
    margin: '1em',
    textAlign: 'center',
  },
  searchBarWrapper: {
    padding: '5px 0',
  },
  rightContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-end',

    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
    },
  },
  content2: {
    padding: '25px 55px',
    backgroundColor: theme.palette.common.white,
    borderRadius: '18px 18px 6px 6px',
    boxShadow: '0px 20px 30px rgba(167, 209, 233, 0.45)',

    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },

  nextBtn: {
    marginTop: '2em',
  },

  backBtn: {
    background: theme.palette.gradients.blue_linear,
    fontWeight: 'bold',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',

    margin: '2em',
    cursor: 'pointer',
  },

  contentBlue: {
    background: theme.palette.gradients.blue_linear,
    fontWeight: 'bold',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
    margin: '1em 0',
  },

  imgIcon: {
    marginLeft: '1em',
  },

  imgBackIcon: {
    marginRight: '1em',
    pointer: 'cursor',
  },

  // Result CSS

  resultTitle: {
    background: theme.palette.gradients.blue_linear,
    fontWeight: 'bold',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
    margin: '1em 0',
  },

  resultItem: {
    color: '#383636',
    fontWeight: '600',
    textAlign: 'center',
  },

  chartContainer: {
    margin: '2em 0',
  },
}));

export default useStyles;
