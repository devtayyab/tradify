import { Box, makeStyles, Typography } from '@material-ui/core';

const TimeItem = ({ value, label, ...props }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.value}>
        <Typography variant="h1">{`${value < 10 ? '0' : ''}${value}`}</Typography>
      </Box>
      <Box>
        <Typography variant="h5" color="secondary">
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default TimeItem;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingX: '5px',
  },
  value: {
    '& h1': {
      fontWeight: 'bold',
    },
  },
}));
