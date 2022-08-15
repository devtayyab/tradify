import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.gradients.main_linear_2,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: '100%',
    padding: '0 32px',
  },
}));

export default useStyles;
