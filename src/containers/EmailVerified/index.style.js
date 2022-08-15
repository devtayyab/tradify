import { makeStyles } from '@material-ui/core/styles';
import login_bg from '../../assets/images/signin/login_bg_2.svg';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.base,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  mobileMisc: {
    background: `url(${login_bg})`,
    overflow: 'hidden',
    position: 'relative',
    minHeight: '150px',
    display: ' flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    color: theme.palette.common.white,

    '& > div': {
      backgroundColor: theme.palette.common.white,
    },

    '& h4': {
      fontWeight: 'bold',
    },
  },
  bgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    height: '50%',
    '& img': {
      height: '100%',
      width: '100%',
    },
  },
  imgBg: {
    height: '100%',
    borderBottomLeftRadius: '40px',
    overflow: 'hidden',
    position: 'relative',

    '& img': {
      width: '100%',
      height: '100%',
    },

    '&:before': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '0px',
      borderTop: `solid ${theme.palette.base} 700px`,
      borderRight: 'solid transparent 200px',
    },
  },

  card: {
    width: '700px',
    maxWidth: '95%',
    zIndex: 1,

    '& > div > div > div': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    '& form': {
      width: 'inherit',
    },
  },

  container1: {
    padding: '2rem 5rem',

    [theme.breakpoints.down('sm')]: {
      padding: '2rem 2rem',
    },
  },
  checkEmail: {
    textAlign: 'center',
    background: theme.palette.gradients.blue_linear,
    fontWeight: 'bold',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
  },
  tryOtherEmailLink: {
    color: theme.palette.peter_river,
  },
}));

export default useStyles;
