import { makeStyles } from '@material-ui/core';
import { radius } from '../../styles/theme/metrics';

const useStyle = makeStyles((theme) => ({
  root: {
    fontSize: theme.typography.caption.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white,
    background: theme.palette.primary.mainGradient,
    padding: '10px 40px',
    // boxShadow: 'inset 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 1px 1px 1px 1px rgb(0 0 0 / 12%)',
    boxShadow: 'unset',

    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },
  rounded: {
    borderRadius: radius[4],
  },
  miniRounded: {
    borderRadius: radius[0],
  },
  outlined: {},
  white: {
    color: theme.text[3],
    background: theme.palette.common.white,
    backgroundColor: theme.palette.common.white,
  },
}));

export default useStyle;
