import { Box, makeStyles, Typography } from '@material-ui/core';

const LocationStats = ({ data, ...props }) => {
  const classes = useStyles();

  if (!data) return '';

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography>{data.name}</Typography>
        <Typography color="secondary">{`+${data.value.toFixed(2)}%`}</Typography>
      </Box>
      <Box className={classes.bar}>
        <Box display="flex" flex={data.rating} />
        <Box display="flex" flex={100 - data.rating} />
      </Box>
    </Box>
  );
};

export default LocationStats;

const useStyles = makeStyles((theme) => ({
  bar: {
    display: 'flex',
    width: '150px',
    height: '6px',
    borderRadius: '5px',
    backgroundColor: '#F5F5F5',

    '& > div': {
      transition: 'all ease 1s',
    },

    '& > div:first-child': {
      background: theme.palette.gradients.blue_linear,
      borderRadius: '5px',
    },
  },
}));
