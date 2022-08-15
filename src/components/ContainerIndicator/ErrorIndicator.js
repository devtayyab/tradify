import React from 'react';

import { Container, Box, Typography } from '@material-ui/core';

import caution_img from '../../assets/images/server_error/caution.svg';
import { Contained as ContainedButton, Outlined as OutlinedButton } from '../Button';

import useStyles from './index.styles';
// import SearchBar from './SearchBar';

const ErrorIndicator = ({ title, description, retryButton, ...props }) => {
  const classes = useStyles();
  const getTitle = title || 'AN ERROR OCCURED';
  return (
    <Container className="NotFound">
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box className={classes.imageContainer}>
          <img src={caution_img} />
        </Box>
        <Box textAlign="center" paddingTop="3rem" className={classes.desc1}>
          <Typography variant="h4">{getTitle}</Typography>
        </Box>
        <Box textAlign="center" paddingTop="1rem" paddingBottom="1rem" className={classes.desc2}>
          <Typography>{description}</Typography>
        </Box>
        {/* <Box paddingTop="3rem" width="100%" maxWidth="500px">
          <SearchBar />
        </Box> */}

        <ContainedButton onClick={retryButton} rounded>
          Retry
        </ContainedButton>
      </Box>
    </Container>
  );
};

export default ErrorIndicator;
