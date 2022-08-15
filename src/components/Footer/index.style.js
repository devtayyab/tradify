import { makeStyles } from '@material-ui/core/styles';

import { HEADER_HEIGHT } from '../../constants/reponsive';

const useStyles = makeStyles((theme) => ({
  footer: {
    height: HEADER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '65px',
    backgroundColor: theme.palette.base,
    marginTop: '100px',
  },
  navLinks: {
    '& > div': {
      padding: '0 25px',
    },
  },
  link: {
    textDecoration: 'none',
    color: theme.text[2],
  },
  social: {
    paddingTop: '2rem',
    display: 'flex',
    flexDirection: 'row',

    '& li > div': {
      minWidth: 'unset',
    },
  },
  copyright: {
    paddingTop: '2rem',
    color: theme.text[2],
  },
}));

export default useStyles;
