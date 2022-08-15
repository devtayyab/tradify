import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import {
  Box,
  Grid,
  Button,
  FormControlLabel,
  Typography,
  Hidden,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { ERROR } from '../../constants';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Switch from '../../components/Switch';
import TextInput from '../../components/TextInput';
import { Contained } from '../../components/Button';
import VerifyEmailModal from './VerifyEmail';

import login_bg from '../../assets/images/signin/login_bg_1.png';

const Desktop = ({
  dispatch,
  history,
  classes,

  form,
  errors,
  general_error,
  unverified_email_modal,

  showPassword,
  setShowPassword,

  remember_me,
  setRememberMe,

  handleLoginClick,
  handleTogglePasswordVisibility,
  handleOnChange,
  handleSubmit,
  validateAll,
  handleValidate,

  ...props
}) => {
  return (
    <Hidden smDown>
      <Box className="Login" className={classes.container}>
        <Header />
        <VerifyEmailModal open={unverified_email_modal} />
        <Box className={classes.content} paddingTop="150px">
          <Hidden smDown>
            <Box className={classes.bgContainer}>
              <Grid container spacing={0}>
                <Grid xl={6} lg={6} md={6} sm={0} />
                <Grid xl={6} lg={6} md={6} sm={0}>
                  <Box className={classes.imgBg}>
                    <img src={login_bg} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Hidden>
          <Grid className={classes.gridContainer} container spacing={0}>
            <Grid xl={6} lg={6} md={8} sm={12} xs={12}>
              <Box height="100%" alignItems="center" display="flex" flexDirection="column">
                <Box>
                  <Box className={classes.signIn}>
                    <Typography variant="h4">Sign In</Typography>
                  </Box>
                  <Box paddingTop="16px" className={classes.signInDesc}>
                    <Typography variant="h6">Enter your email and password to sign in</Typography>
                  </Box>
                  <Box paddingTop="60px" zIndex="100" maxWidth="400px">
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                      <Box>
                        <TextInput
                          id="username"
                          placeholder="Email"
                          label="Email"
                          inputMode="email"
                          value={form.username}
                          onChange={handleOnChange}
                          conditions={errors.username}
                          inputState={errors?.username?.length && ERROR}
                        />
                      </Box>
                      <Box paddingTop="25px">
                        <TextInput
                          id="password"
                          placeholder="Password"
                          label="Password"
                          value={form.password}
                          onChange={handleOnChange}
                          type={showPassword[0] ? 'text' : 'password'}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment
                                className={classes.inputAdornment}
                                position="end"
                                tabIndex={-1}
                              >
                                <IconButton
                                  tabIndex={-1}
                                  aria-label="toggle password visibility"
                                  onClick={() => handleTogglePasswordVisibility(0)}
                                >
                                  {showPassword[0] ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          conditions={errors.password}
                          inputState={errors?.password?.length && ERROR}
                        />
                      </Box>
                      <Box paddingTop="25px">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={remember_me}
                              onChange={(e) => setRememberMe(e.target.checked)}
                              name="checkedB"
                            />
                          }
                          label="Remember me"
                        />
                      </Box>
                      <Box paddingTop="30px">
                        <Contained onClick={handleSubmit} fullWidth miniRounded type="submit">
                          Sign In
                        </Contained>
                      </Box>
                      <Box paddingTop="20px" className={classes.noAccount}>
                        <span>Don’t have an account?</span>
                        <Button component={Link} disableRipple to="/sign-up">
                          Sign Up
                        </Button>
                      </Box>
                      {general_error && (
                        <Box className={classes.generalError}>
                          <Typography variant="body2">
                            Sorry, your email or password is incorrect.
                          </Typography>
                          <Typography variant="body2">
                            Please check your details and try again.
                          </Typography>
                        </Box>
                      )}
                    </form>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Box>
    </Hidden>
  );
};

export default Desktop;
