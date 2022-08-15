import React from 'react';

import {
  Box,
  Typography,
  Hidden,
  Card,
  CardContent,
  Checkbox,
  InputAdornment,
  IconButton,
} from '@material-ui/core';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Link } from 'react-router-dom';
import { Contained } from '../../components/Button';
import RegisterButton from './RegisterButton';

import fb_icon from '../../assets/images/signup/fb_icon.png';
import apple_icon from '../../assets/images/signup/apple_icon.png';
import google_icon from '../../assets/images/signup/google_icon.png';
import signup_bg from '../../assets/images/signup/bg.png';
import { TYPE_2 } from '../../components/Header/constants';
import TextInput from '../../components/TextInput';
import SuccessModal from './SuccessModal';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { ERROR, INFO } from '../../constants';
import { HEADER_HEIGHT } from '../../constants/reponsive';

const Desktop = ({
  classes,
  validForm,

  termsAgree,
  setTermsAgree,
  showPassword,

  form,
  errors,
  loading,
  successModal,

  handleSubmit,
  handleOnChange,
  handleValidate,
  handleModalClose,
  handleTogglePasswordVisibility,
}) => {
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
                <Box>
                  <Box className={classes.registerWith}>
                    <Typography variant="h5">Register with</Typography>
                  </Box>
                  <Box className={classes.registerOptions}>
                    <RegisterButton name="fb" src={fb_icon} />
                    <RegisterButton name="fb" src={apple_icon} />
                    <RegisterButton name="fb" src={google_icon} />
                  </Box>
                  <Box paddingTop="1.2rem" className={classes.or}>
                    <Typography>or</Typography>
                  </Box>
                  <Box paddingTop="1rem" width="100%">
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                      <Box>
                        <TextInput
                          id="first_name"
                          onChange={handleOnChange}
                          placeholder="First Name"
                          conditions={errors?.first_name}
                          inputState={errors?.first_name?.length ? ERROR : INFO}
                          value={form?.first_name || ''}
                          onBlur={handleValidate}
                        />
                      </Box>
                      <Box paddingTop="1rem">
                        <TextInput
                          id="last_name"
                          onChange={handleOnChange}
                          placeholder="Last Name"
                          conditions={errors?.last_name}
                          inputState={errors?.last_name?.length ? ERROR : INFO}
                          value={form?.last_name || ''}
                          onBlur={handleValidate}
                        />
                      </Box>
                      <Box paddingTop="1rem">
                        <TextInput
                          id="email"
                          onChange={handleOnChange}
                          placeholder="Email"
                          conditions={errors?.email}
                          inputState={errors?.email?.length ? ERROR : INFO}
                          value={form?.email || ''}
                          onBlur={handleValidate}
                          inputMode="email"
                        />
                      </Box>
                      <Box paddingTop="1rem">
                        <TextInput
                          id="password"
                          onChange={handleOnChange}
                          placeholder="Password"
                          conditions={errors?.password}
                          inputState={errors?.password?.length ? ERROR : INFO}
                          value={form?.password || ''}
                          onBlur={handleValidate}
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
                        />
                      </Box>
                      <Box paddingTop="1rem">
                        <TextInput
                          id="confirm_password"
                          onChange={handleOnChange}
                          placeholder="Confirm Password"
                          conditions={errors?.confirm_password}
                          inputState={errors?.confirm_password?.length ? ERROR : INFO}
                          value={form?.confirm_password || ''}
                          onBlur={handleValidate}
                          type={showPassword[1] ? 'text' : 'password'}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment className={classes.inputAdornment} position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => handleTogglePasswordVisibility(1)}
                                  tabIndex={-1}
                                >
                                  {showPassword[1] ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                      <Box paddingTop="1rem" className={classes.terms}>
                        <Checkbox
                          color="primary"
                          value={termsAgree}
                          onChange={(e) => setTermsAgree(e.target.checked)}
                        />
                        <Typography variant="caption">
                          I agree with the{' '}
                          <Typography variant="caption" component={Link} to="/login">
                            Terms and Conditions
                          </Typography>
                        </Typography>
                      </Box>
                      <Box paddingTop="2rem">
                        <Contained
                          className={classes.textInput}
                          miniRounded
                          onClick={handleSubmit}
                          disabled={loading || !termsAgree || !validForm}
                        >
                          Sign Up
                        </Contained>
                      </Box>
                      <Box paddingTop="1rem" className={classes.account}>
                        <span>Already have an account?</span>
                        <Link to="/login">Sign In</Link>
                      </Box>
                    </form>
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
