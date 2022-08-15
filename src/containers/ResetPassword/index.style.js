import { makeStyles } from '@material-ui/core/styles';

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
  content: {
    position: 'relative',
    flex: 1,
  },
  mainContent: {
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 150px',

    [theme.breakpoints.only('xs')]: {
      padding: '0 50px',
    },
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
  desc1: {
    paddingTop: '40px',

    '& h4': {
      background: theme.palette.gradients.blue_linear,
      fontWeight: 'bold',
      '-webkitBackgroundClip': 'text',
      '-webkitTextFillColor': 'transparent',
    },
  },
  goBackButton: {
    paddingLeft: 0,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',

    '&:hover': {
      backgroundColor: 'inherit',
    },
  },
  goBack: {
    paddingLeft: '8px',
    color: theme.palette.peter_river,
  },
  desc2: {
    color: theme.text[2],

    '& h6': {
      fontWeight: '400',
    },
  },
  textInput: {
    width: '100%',
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
  inputAdornment: {
    height: '2.5rem',
    width: '2.5rem',
    marginRight: '-8px',

    '& button': {
      height: 'inherit',
      width: 'inherit',
    },
  },
}));

export default useStyles;
