import { makeStyles, alpha } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    border: `solid ${theme.palette.border} 1px`,
    padding: '10px 5px',

    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
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
    flex: 1,
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
