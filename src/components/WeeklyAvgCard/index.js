import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';

const WeeklyAvgCard = ({ title, values, ...props }) => {
  const classes = useStyles();
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <Box className={classes.container}>
      <Box display="flex">
        <Box flex="1">
          <Typography className={classes.title} variant="h6">
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.value} variant="h6">
            90 <Typography component="span">Percent</Typography>
          </Typography>
        </Box>
      </Box>
      <Box display="flex" px="1rem" pt="1.5rem" justifyContent="space-between">
        {days.map((d, i) => (
          <DayItem
            key={`${d}_${i}`}
            classes={classes}
            day={d}
            data={{ rating: values[i].rating }}
          />
        ))}
        {/* <DayItem classes={classes} day="S" data={{ rating: 50 }} />
        <DayItem classes={classes} day="M" data={{ rating: 50 }} />
        <DayItem classes={classes} day="T" data={{ rating: 50 }} />
        <DayItem classes={classes} day="W" data={{ rating: 50 }} />
        <DayItem classes={classes} day="T" data={{ rating: 50 }} />
        <DayItem classes={classes} day="F" data={{ rating: 50 }} />
        <DayItem classes={classes} day="S" data={{ rating: 50 }} /> */}
      </Box>
    </Box>
  );
};

const DayItem = ({ classes, day, data, ...props }) => {
  return (
    <Box className={classes.dayItem}>
      <Box>
        <Box className={classes.bar}>
          <Box display="flex" flex={100 - data.rating} />
          <Box display="flex" flex={data.rating} />
        </Box>
      </Box>
      <Box pt="1rem">
        <Typography className={classes.title}>{day}</Typography>
      </Box>
    </Box>
  );
};

export default WeeklyAvgCard;
