import { makeStyles } from '@material-ui/core/styles';

import { DRAWER_WIDTH, HEADER_HEIGHT, MINI_DRAWER_WIDTH } from '../../constants/reponsive';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 0,
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    overflowX: 'hidden',
    paddingLeft: MINI_DRAWER_WIDTH,
    paddingRight: '50px',
    backgroundColor: theme.palette.base,

    [theme.breakpoints.down('sm')]: {
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingBottom: HEADER_HEIGHT,
    },
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    paddingLeft: `calc(${DRAWER_WIDTH} + 50px)`,

    [theme.breakpoints.down('sm')]: {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
  breadcrumb: {
    '& a, & p': {
      fontWeight: 700,
      textDecoration: 'none',
      color: '#ababab',
      fontSize: theme.typography.body1,
    },
    '& p': {
      color: '#858585',
    },
  },
}));

export default useStyles;
