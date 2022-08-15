import { Box, makeStyles } from '@material-ui/core';
import Dots from './Dots';
import TimeItem from './TimeItem';

const TimeCountdown = ({ data, ...props }) => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="row" alignItems="flexStart" justifyContent="center">
      <TimeItem value={data.days} label="Days" />
      <Dots />
      <TimeItem value={data.hours} label="Hours" />
      <Dots />
      <TimeItem value={data.minutes} label="Minutes" />
      <Dots />
      <TimeItem value={data.seconds} label="Seconds" />
    </Box>
  );
};

export default TimeCountdown;

const useStyles = makeStyles((theme) => ({}));
