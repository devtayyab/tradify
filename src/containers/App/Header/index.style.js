import { makeStyles } from '@material-ui/core/styles';

import { HEADER_HEIGHT } from '../../../constants/reponsive';

const useStyles = makeStyles((theme) => ({
  appBar: {
    height: HEADER_HEIGHT,
    background: theme.palette.header.bg,
    zIndex: theme.zIndex.drawer + 1,
    borderBottomWidth: 2,
    borderColor: theme.palette.common.white,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  bottomAppBar: {
    height: HEADER_HEIGHT,
    background: theme.palette.header.bg,
    zIndex: theme.zIndex.drawer + 1,
    borderTopWidth: 2,
    borderColor: theme.palette.common.white,
    top: 'auto',
    bottom: 0,

    '& > div': {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  toolbar: {
    flex: 1,
    alignItems: 'center',
    height: HEADER_HEIGHT,
    paddingLeft: '16px',
    paddingRight: '16px',

    [theme.breakpoints.up('lg')]: {
      paddingLeft: '55px',
      paddingRight: '50px',
    },
  },
  logoContainer: {
    display: 'flex',
  },
  searchBarWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingLeft: '40px',
    paddingRight: '40px',

    [theme.breakpoints.down('md')]: {
      paddingLeft: '0px',
      paddingRight: '24px',
    },
  },
  linkItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  linkItem: {
    height: HEADER_HEIGHT,
    width: '44px',
    paddingLeft: '44px',
    paddingRight: '44px',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.down('md')]: {
      paddingLeft: '32px',
      paddingRight: '32px',
    },
  },
  bottomLinkItem: {
    flex: 1,
  },
  profileContainer: {
    padding: 8,
    justifyContent: 'flex-end',

    '& > div': {
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      height: '40px',
      width: '40px',
      borderRadius: '18px',
      overflow: 'hidden',

      '& img': {
        objectFit: 'contain',
        height: '100%',
        width: '100%',
      },
    },

    '& p': {
      paddingLeft: '6px',
    },
    '& button': {
      padding: '6px',
    },
  },
}));

export default useStyles;
