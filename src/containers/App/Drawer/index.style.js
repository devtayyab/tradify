import { makeStyles } from '@material-ui/core/styles';

import { DRAWER_WIDTH, MINI_DRAWER_WIDTH, HEADER_HEIGHT } from '../../../constants/reponsive';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: MINI_DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: theme.palette.drawer.bg,
    top: HEADER_HEIGHT,
    borderTop: 'solid white 2px',
    borderRight: 'solid white 2px',
  },
  drawerContent: {
    flex: 1,
  },
  drawerMobile: {
    backgroundColor: theme.palette.drawer.bg,
    whiteSpace: 'nowrap',
    width: '100%',
  },
  drawerOpen: {
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: MINI_DRAWER_WIDTH,
    [theme.breakpoints.up('sm')]: {
      MINI_DRAWER_WIDTH,
    },
  },
  drawerItem: {
    paddingLeft: '56px',
    paddingRight: '38px',

    '& > div:first-child': {
      minWidth: 'auto',
    },
    '& span': {
      color: theme.palette.drawer.text,
      paddingLeft: '20px',
      fontSize: theme.typography.fontSize,
    },
  },
  itemName: {
    color: theme.palette.drawer.text,
  },

  activeDrawerItem: {
    background: theme.palette.gradients.main_linear_2,
    width: '90%',
    borderTopRightRadius: '100px',
    borderBottomRightRadius: '100px',
    transition: `width 500ms ${theme.transitions.easing.easeInOut}`,
  },

  miniDrawerItem: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '25px',
    paddingBottom: '25px',
  },

  mobileDrawerItem: {
    paddingLeft: '16px',
    paddingRight: '38px',
  },
}));

export default useStyles;
