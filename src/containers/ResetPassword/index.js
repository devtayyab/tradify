import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import { Box, Grid, TextField, Button, Typography, Hidden } from '@material-ui/core';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import login_bg from '../../assets/images/signin/login_bg_1.png';
import left_arrow from '../../assets/images/icons/left_arrow_blue.svg';

import useStyle from './index.style';
import EmailVerify from './EmailVerify';
import CreateNewPassword from './CreateNewPassword';

const ResetPassword = (props) => {
  const history = useHistory();
  const pathname = props.location.pathname;
  const classes = useStyle();

  const handleVerifyEmailClick = () => {
    history.push('/reset-password/create-new');
  };

  return (
    <Box className={classes.container}>
      <Header />
      <Box className={classes.content} paddingTop="150px">
        <Hidden smDown>
          <Box className={classes.bgContainer} zIndex={1}>
            <Grid container spacing={0}>
              <Grid item xs={false} sm={false} md={6} lg={6} xl={6} />
              <Grid item xs={false} sm={false} md={6} lg={6} xl={6}>
                <Box className={classes.imgBg}>
                  <img src={login_bg} alt="background" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Hidden>
        <Grid className={classes.gridContainer} item container spacing={0}>
          <Grid item xs={12} sm={12} md={8} lg={6} xl={6}>
            <Box className={classes.mainContent}>
              <Box>
                <Box>
                  <Link className={classes.goBackButton} to="/login">
                    <Box marginTop="-2px" display="flex">
                      <img src={left_arrow} alt="back" />
                    </Box>
                    <Typography className={classes.goBack} component="span" variant="body2">
                      Go Back
                    </Typography>
                  </Link>
                </Box>
                {pathname === '/reset-password/create-new' ? (
                  <CreateNewPassword />
                ) : (
                  <EmailVerify handleClick={handleVerifyEmailClick} />
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default ResetPassword;
