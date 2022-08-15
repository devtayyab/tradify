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
    width: '450px',
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
  registerWith: {
    '& h4': {
      color: theme.text[0],
      fontWeight: 'bold',
    },
  },
  register: {
    '& h4': {
      background: theme.palette.gradients.blue_linear,
      fontWeight: 'bold',
      '-webkitBackgroundClip': 'text',
      '-webkitTextFillColor': 'transparent',
    },
  },
  registerOptions: {
    paddingTop: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  or: {
    color: theme.palette.gray1,
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
  terms: {
    paddingTop: '1rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: '-12px',

    '& span': {
      color: theme.text[3],
    },

    '& a': {
      textDecoration: 'none',
      fontWeight: 'bold',
      color: theme.text[3],
    },
  },
  account: {
    color: theme.text[2],
    display: 'flex',
    justifyContent: 'center',

    '& a': {
      marginLeft: '5px',
      color: theme.text[3],
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  },
}));

export default useStyles;
