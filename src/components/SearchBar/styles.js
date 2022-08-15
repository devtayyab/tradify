import { makeStyles, alpha } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    marginLeft: 0,
    borderRadius: '100px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',

    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    '&:before': {
      content: "''",
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      margin: -2,
      borderRadius: 'inherit',
      background: theme.palette.gradients.main_linear_1,
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
    backgroundColor: theme.palette.common.white,

    borderRadius: '100px',
    border: 'solid 2px transparent',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, // vertical padding + font size from searchIcon
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: theme.typography.caption.fontSize,
  },
}));

export default useStyles;
