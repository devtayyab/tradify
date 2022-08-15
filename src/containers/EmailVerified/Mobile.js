import React from 'react';

import { Box, Typography, Hidden } from '@material-ui/core';

import email_check from '../../assets/images/signup/email_check.png';
import { Link } from 'react-router-dom';
import { Contained } from '../../components/Button';

const Mobile = ({ classes }) => {
  return (
    <Hidden mdUp>
      <Box className="SignUp" className={classes.container}>
        <Box className={classes.mobileMisc}>
          <Typography variant="h4">Traidify</Typography>
          <Box
            height="5px"
            width="50px"
            backgroundColor="white"
            borderRadius="2.5px"
            position="absolute"
            bottom="15px"
          />
        </Box>
        <Box className={classes.content} padding="30px">
          <Box display="flex" flex="1" flexDirection="column" width="100%">
            <Box paddingTop="1rem" width="100%">
              <Box className={classes.container1}>
                <Box display="flex" justifyContent="center">
                  <img src={email_check} />
                </Box>
                <Box display="flex" justifyContent="center" paddingTop="1.5rem">
                  <Typography variant="h5" className={classes.checkEmail}>
                    Congratulations! Your email is now verified.
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="center" paddingTop=".5rem" textAlign="center">
                  <Typography variant="subtitle1">Start earning with Traidify now.</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flex={1} />
        <Contained fullWidth sharp component={Link} to="/login">
          Proceed to login
        </Contained>
      </Box>
    </Hidden>
  );
};

export default Mobile;
