import React from 'react';

import { Container, Box, Typography } from '@material-ui/core';

import useStyles from './styles';
import RoundLogo from '../../components/RoundLogo';
import maintenance_img from '../../assets/images/maintenance/maintenance_img.png';
import fb_icon from '../../assets/images/maintenance/fb_icon.png';
import { Outlined as OutlinedButton } from '../../components/Button';

const Maintenance = (props) => {
  const classes = useStyles();
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flex="1"
      width="100%"
      paddingTop="100px"
    >
      <RoundLogo />
      <Box textAlign="center" paddingTop="5rem" className={classes.desc1}>
        <Typography variant="h4">The site is currently down for maintenance</Typography>
      </Box>
      <Box textAlign="center" paddingTop="2rem" className={classes.desc2}>
        <Typography>We apologize for any inconveniences caused </Typography>
        <Typography>We’re almost done!</Typography>
      </Box>
      <Box paddingTop="3rem" width="100%" maxWidth="400px">
        <img src={maintenance_img} width="100%" />
      </Box>
      <Box display="flex" flex="1" />
      <Box className={classes.footer}>
        <Box className={classes.telephone}>
          <Typography variant="span">
            <Typography variant="span">Phone: </Typography>+ 00 4 0777 555 444
          </Typography>
        </Box>
        <Box>
          <OutlinedButton>
            <img src={fb_icon} width="24px" height="24px" />
            <Typography className={classes.visitFb} variant="body1" component="span">
              Visit our Facebook Page
            </Typography>
          </OutlinedButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Maintenance;
