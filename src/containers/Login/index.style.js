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
  gridContainer: {
    zIndex: 2,

    '& > div': {
      zIndex: 'inherit',
    },
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
  content: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  bgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    height: '100%',
    '& div': {
      height: '100%',
    },
  },
  imgBg: {
    height: '100%',
    borderBottomLeftRadius: '35px',
    overflow: 'hidden',
    position: 'relative',

    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  signIn: {
    '& h4': {
      background: theme.palette.gradients.blue_linear,
      fontWeight: 'bold',
      '-webkitBackgroundClip': 'text',
      '-webkitTextFillColor': 'transparent',
    },
  },
  signInDesc: {
    color: theme.text[2],

    '& h6': {
      fontWeight: '400',
    },
  },
  generalError: {
    color: theme.palette.red1,
    padding: '10px 0',
  },
  textInput: {
    width: '100%',
  },
  inputAdornment: {
    height: '2.5rem',
    width: '2.5rem',
    marginRight: '-8px',

    '& button': {
      height: 'inherit',
      width: 'inherit',
    },
  },
  noAccount: {
    color: theme.text[2],

    '& a': {
      color: theme.text[3],
      textDecoration: 'none',
      fontWeight: 'bold',
      textTransform: 'unset',
      fontSize: '1rem',
      paddingTop: 0,
      paddingBottom: '2px',

      '&:hover': {
        backgroundColor: 'inherit',
      },
    },
  },
  forgotPassword: {
    color: theme.text[0],

    '& a': {
      color: theme.text[0],
      textDecoration: 'none',
      fontWeight: 'bold',
      textTransform: 'unset',
      fontSize: '1rem',
      padding: 0,

      '&:hover': {
        backgroundColor: 'inherit',
      },
    },
  },
}));

export default useStyles;
