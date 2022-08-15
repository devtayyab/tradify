import { makeStyles } from '@material-ui/core/styles';

import { HEADER_HEIGHT } from '../../constants/reponsive';

const useStyles = (theme) => ({
  appBar: {
    height: HEADER_HEIGHT,
    backgroundColor: 'transparent',
    zIndex: theme.zIndex.drawer + 1,
    borderBottomWidth: 2,
    borderColor: theme.palette.common.white,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: 'unset',
    borderWidth: '1px',
    justifyContent: 'center',
  },
  toolbar: {
    flex: 1,
    alignItems: 'center',
    borderRadius: '40px',
    marginLeft: '150px',
    marginRight: '150px',
    paddingLeft: '20px',
    paddingRight: '20px',
    maxHeight: '60px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(30px)',
    boxShadow: '0px 20px 27px rgb(0 0 0 / 5%)',

    [theme.breakpoints.down('md')]: {
      marginLeft: '50px',
      marginRight: '50px',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
  },
  whiteToolbar: {
    backgroundColor: 'transparent',
    backdropFilter: 'none',
    boxShadow: 'none',
  },
  logoContainer: {
    display: 'flex',
  },
  navContainer: {
    paddingLeft: '100px',

    [theme.breakpoints.down('md')]: {
      paddingLeft: '0px',
    },
  },
  linkItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  linkItem: {
    width: '110px',
    alignItems: 'center',
    justifyContent: 'center',

    '& > div': {
      minWidth: 'unset',
      color: theme.palette.dark1,
      alignItems: 'center',
      justifyContent: 'center',

      '&:first-child': {
        paddingRight: '6px',
      },
    },
  },
  whiteLinkItem: {
    '& > div': {
      color: theme.palette.common.white,
    },
  },
});

export default useStyles;
