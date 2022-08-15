import { Box, makeStyles, Typography } from '@material-ui/core';

import ArrowDropDown from '@material-ui/icons/ArrowDropDownRounded';
import ArrowDropUp from '@material-ui/icons/ArrowDropUpRounded';
import clsx from 'clsx';

import chart_1 from '../../../assets/images/charts/chart_1/chart_1.png';
import chart_2 from '../../../assets/images/charts/chart_1/chart_2.png';

const Chart1 = ({ upTrend = false, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
        <Typography>{props.title}</Typography>
      </Box>
      <Box pl=".5rem">
        <img src={chart_1} />
      </Box>
      <Box>
        <img src={chart_2} />
      </Box>
      <Box className={clsx(classes.downTrend, { [classes.upTrend]: upTrend })}>
        <Typography>{!upTrend ? '-' : ''}22.8%</Typography>
        {upTrend ? <ArrowDropUp /> : <ArrowDropDown />}
      </Box>
    </Box>
  );
};

export default Chart1;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    height: '4rem',

    '& p': {
      fontWeight: 'bold',
    },
  },
  downTrend: {
    display: 'flex',
    color: theme.palette.red1,
  },
  upTrend: {
    color: theme.palette.green_1,
  },
}));
