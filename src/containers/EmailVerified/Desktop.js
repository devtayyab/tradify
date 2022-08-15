import React, { useEffect } from 'react';

import { useLocation } from 'react-router';

import { Box, Typography, Hidden, Card, CardContent } from '@material-ui/core';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Contained as ContainedButton } from '../../components/Button';

import { Link } from 'react-router-dom';

import email_check from '../../assets/images/signup/email_check.png';
import signup_bg from '../../assets/images/signup/bg.png';
import { TYPE_2 } from '../../components/Header/constants';

import { HEADER_HEIGHT } from '../../constants/reponsive';
import useStyles from './index.style';
import qs from 'qs';
import { useDispatch } from 'react-redux';
import { verifyEmailAction } from '../../redux/actions/signup.action';

const Desktop = (props) => {
  const dispatch = useDispatch();
  const classes = props.classes;
  const { search } = useLocation();
  const params = qs.parse(search.substr(1)); // remove ? at the beginning

  useEffect(() => {
    dispatch(verifyEmailAction({ code: params.code }));
  }, []);

  return (
    <Hidden smDown>
      <Box className="SignUp" className={classes.container}>
        <Header type={TYPE_2} />
        <Box className={classes.content} paddingTop={HEADER_HEIGHT}>
          <Box className={classes.bgContainer}>
            <img src={signup_bg} />
          </Box>
          <Box color="white" paddingTop="50px" fontWeight="bold" zIndex={1}>
            <Typography variant="h3">Traidify</Typography>
          </Box>
          <Box
            color="white"
            display="flex"
            flexDirection="column"
            alignItems="center"
            paddingTop="1rem"
            paddingBottom="100px"
            zIndex={1}
          >
            <Typography variant="body">Use these awesome forms to login or create new</Typography>
            <Typography variant="body">account in your project for free.</Typography>
          </Box>
          <Card className={classes.card}>
            <CardContent>
              <Box alignItems="center" display="flex" flex="1" flexDirection="column" width="100%">
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
                  <Box display="flex" justifyContent="center" paddingTop="1.5rem">
                    <ContainedButton rounded component={Link} to="/login">
                      Proceed to login
                    </ContainedButton>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Footer />
      </Box>
    </Hidden>
  );
};

export default Desktop;
