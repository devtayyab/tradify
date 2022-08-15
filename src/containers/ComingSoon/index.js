import React, { useEffect, useState } from 'react';

import { Container, Box, Typography } from '@material-ui/core';

import moment from 'moment';

import under_construction_img from '../../assets/images/coming_soon/under_construction.png';

import useStyles from './styles';
import RoundLogo from '../../components/RoundLogo';

import EmailAddInput from './EmailAddInput';
import TimeCountdown from './TimeCountdown';

const ComingSoon = (props) => {
  const classes = useStyles();
  const countdownDate = moment(new Date(2021, 11, 25, true));
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    return setInterval(updateTimer, 1000);
  }, []);

  const updateTimer = () => {
    const currentDate = moment(Date.now());
    const diff = countdownDate.diff(currentDate, 'milliseconds');
    const days = Math.floor(moment.duration(diff).asDays());
    const hours = Math.floor(moment.duration(diff).hours());
    const minutes = Math.floor(moment.duration(diff).minutes());
    const seconds = Math.floor(moment.duration(diff).seconds());

    setTimer({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flex="1"
      width="100%"
    >
      <RoundLogo />
      <Box textAlign="center" paddingTop="1.5rem" className={classes.desc1}>
        <Typography variant="h4">Coming Soon</Typography>
      </Box>
      <Box textAlign="center" className={classes.desc2}>
        <Typography>We’re working on implementing the last features before our launch!</Typography>
      </Box>
      <Box paddingTop="5rem" width="100%" maxWidth="400px">
        <img src={under_construction_img} />
      </Box>
      <Box paddingTop="40px">
        <TimeCountdown data={timer} />
      </Box>
      <Box paddingTop="3rem" width="100%" maxWidth="500px">
        <EmailAddInput />
        <Box textAlign="left" paddingTop=".5rem">
          <Typography variant="body2">We’ll email you once our website is launched!</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ComingSoon;
