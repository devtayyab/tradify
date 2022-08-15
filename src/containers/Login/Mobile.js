import React, { useState } from 'react';

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
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { ERROR } from '../../constants';

import Switch from '../../components/Switch';
import { Contained } from '../../components/Button';
import TextInput from '../../components/TextInput';
import VerifyEmailModal from './VerifyEmail';

const Mobile = ({
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
    <Hidden mdUp>
      <Box className="Login" className={classes.container}>
        <VerifyEmailModal open={unverified_email_modal} />
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
        <Box className={classes.content} paddingTop="40px">
          <Grid className={classes.gridContainer} container spacing={0}>
            <Grid xl={6} lg={6} md={8} sm={12} xs={12}>
              <Box
                height="100%"
                alignItems="center"
                display="flex"
                flexDirection="column"
                paddingX="30px"
              >
                <Box>
                  <Box className={classes.signIn}>
                    <Typography variant="h4">Sign In</Typography>
                  </Box>
                  <Box paddingTop="6px" className={classes.signInDesc}>
                    <Typography variant="subtitle1">
                      Enter your email and password to sign in
                    </Typography>
                  </Box>
                  <Box paddingTop="2.5rem" zIndex="100" maxWidth="400px">
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
                      <Box paddingTop=".5rem">
                        <TextInput
                          id="password"
                          placeholder="Password"
                          label="Password"
                          value={form.password}
                          onChange={handleOnChange}
                          type={showPassword[0] ? 'text' : 'password'}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment className={classes.inputAdornment} position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => handleTogglePasswordVisibility(0)}
                                  tabIndex={-1}
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
                      <Box paddingTop="5px" className={classes.forgotPassword} color="primary">
                        <Button component={Link} disableRipple to="/reset-password">
                          Forgot Password?
                        </Button>
                      </Box>
                      <Box paddingTop="1rem">
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
                      <Box paddingTop="1rem" className={classes.noAccount}>
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
          <Box display="flex" flex={1} />
          <Box paddingTop="30px">
            <Contained onClick={handleSubmit} fullWidth sharp type="submit">
              Sign In
            </Contained>
          </Box>
        </Box>
      </Box>
    </Hidden>
  );
};

export default Mobile;
