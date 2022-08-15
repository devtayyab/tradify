import React from 'react';

import { Container, Box, Typography } from '@material-ui/core';

import not_found_img from '../../assets/images/not_found/404.png';
import ProgressCircular from '../../components/ProgressCircular';

import useStyles from './index.styles';

const ErrorIndicator = (props) => {
  const classes = useStyles();

  const tipsList = [
    'Buy Low, Hold on Average, Sell High.',
    'Review your Needs and Goals.',
    'Consider how long you want to Invest.',
    'Avoid High-Risk Investments if you dont Understand them!',
    "Review Periodically, but don't STOCK WATCH.",
    "Only Invest what you're willing to loss.",
  ];

  const getRandomTip = () => {
    const random = Math.floor(Math.random() * tipsList.length);

    return tipsList[random];
  };

  return (
    <Container className="NotFound">
      <Box
        height="85vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box className={classes.imageContainer}>
          <ProgressCircular loadingText={'Loading your Content, Please Wait...'} />

          <Typography variant="h5" marginTop="2rem" className={classes.desc2}>
            Tip: {getRandomTip()}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ErrorIndicator;
