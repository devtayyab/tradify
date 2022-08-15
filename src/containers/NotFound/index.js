import React from 'react';

import { Container, Box, Typography } from '@material-ui/core';

import not_found_img from '../../assets/images/not_found/404.png';

import useStyles from './styles';
import SearchBar from './SearchBar';

const NotFound = (props) => {
  const classes = useStyles();
  return (
    <Container className="NotFound">
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box className={classes.imageContainer}>
          <img src={not_found_img} />
        </Box>
        <Box textAlign="center" paddingTop="3rem" className={classes.desc1}>
          <Typography variant="h4">The page you were looking</Typography>
          <Typography variant="h4">for doesn't exist.</Typography>
        </Box>
        <Box textAlign="center" paddingTop="2rem" className={classes.desc2}>
          <Typography>It's on us, we moved the content to a different page.</Typography>
          <Typography>The search below should help!</Typography>
        </Box>
        <Box paddingTop="3rem" width="100%" maxWidth="500px">
          <SearchBar />
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;
