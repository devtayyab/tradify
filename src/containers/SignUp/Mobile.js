import React from 'react';

import { Box, Typography, Hidden, Checkbox, InputAdornment, IconButton } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { Contained } from '../../components/Button';
import TextInput from '../../components/TextInput';
import SuccessModal from './SuccessModal';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { ERROR, INFO } from '../../constants';

const Mobile = ({
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
    <Hidden mdUp>
      <Box className="SignUp" className={classes.container}>
        <SuccessModal open={successModal} handleClose={handleModalClose} />
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
            <Box className={classes.register}>
              <Typography variant="h4">Register</Typography>
            </Box>
            <Box paddingTop="6px">
              <Typography variant="subtitle1">Create your account</Typography>
            </Box>
            <Box paddingTop="1rem" width="100%">
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Box>
                  <TextInput
                    id="first_name"
                    onChange={handleOnChange}
                    placeholder="First Name"
                    label="First Name"
                    conditions={errors?.first_name}
                    inputState={errors?.first_name?.length ? ERROR : INFO}
                    value={form?.first_name || ''}
                    onBlur={handleValidate}
                  />
                </Box>
                <Box paddingTop=".5rem">
                  <TextInput
                    id="last_name"
                    onChange={handleOnChange}
                    placeholder="Last Name"
                    label="Last Name"
                    conditions={errors?.last_name}
                    inputState={errors?.last_name?.length ? ERROR : INFO}
                    value={form?.last_name || ''}
                    onBlur={handleValidate}
                  />
                </Box>
                <Box paddingTop=".5rem">
                  <TextInput
                    id="email"
                    onChange={handleOnChange}
                    placeholder="Email"
                    label="Email"
                    conditions={errors?.email}
                    inputState={errors?.email?.length ? ERROR : INFO}
                    value={form?.email || ''}
                    onBlur={handleValidate}
                    inputMode="email"
                  />
                </Box>
                <Box paddingTop=".5rem">
                  <TextInput
                    id="password"
                    onChange={handleOnChange}
                    placeholder="Password"
                    label="Password"
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
                <Box paddingTop=".5rem">
                  <TextInput
                    id="confirm_password"
                    onChange={handleOnChange}
                    placeholder="Confirm Password"
                    label="Confirm Password"
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
                <Box className={classes.terms}>
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
                <Box paddingTop=".5rem" className={classes.account}>
                  <span>Already have an account?</span>
                  <Link to="/login">Sign In</Link>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flex={1} />
        <Contained
          fullWidth
          sharp
          onClick={handleSubmit}
          disabled={loading || !termsAgree || !validForm}
        >
          Sign Up
        </Contained>
      </Box>
    </Hidden>
  );
};

export default Mobile;
