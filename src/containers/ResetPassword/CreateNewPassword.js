import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Box, Button, Typography, InputAdornment, IconButton } from '@material-ui/core';

import { Contained } from '../../components/Button';

import useStyle from './index.style';
import TextInput from '../../components/TextInput';
import { INPUT_STATUS } from '../../constants/input';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const CreateNewPassword = (props) => {
  const classes = useStyle();
  const [showPassword, setShowPassword] = useState([false, false]);

  const handleClick = () => {
    // TODO: handle click here
  };

  const handleTogglePasswordVisibility = (index) => {
    const newShowPassword = [...showPassword];
    newShowPassword[index] = !newShowPassword[index];
    setShowPassword(newShowPassword);
  };

  return (
    <Box>
      <Box className={classes.desc1}>
        <Typography variant="h4">Create New Password</Typography>
      </Box>
      <Box paddingTop="16px" className={classes.desc2}>
        <Typography variant="h6">
          Your new password must be different from recently used passwords.
        </Typography>
      </Box>
      <Box paddingTop="40px" maxWidth="400px">
        <form noValidate autoComplete="off">
          <Box>
            <TextInput
              variant="outlined"
              size="small"
              label="Password"
              placeholder="Password"
              className={classes.textInput}
              type={showPassword[0] ? 'text' : 'password'}
              conditions={[
                {
                  value: 1,
                  label: 'Must be at least 8 characters.',
                  isValid: INPUT_STATUS.INITIAL,
                },
                {
                  value: 1,
                  label: 'Must be at least 8 characters.',
                  isValid: INPUT_STATUS.INITIAL,
                },
                {
                  value: 1,
                  label: 'Must be at least 8 characters.',
                  isValid: INPUT_STATUS.VALID,
                },
              ]}
              InputProps={{
                endAdornment: (
                  <InputAdornment className={classes.inputAdornment} position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleTogglePasswordVisibility(0)}
                    >
                      {showPassword[0] ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box paddingTop="2rem">
            <TextInput
              variant="outlined"
              size="small"
              label="Password"
              placeholder="Password"
              className={classes.textInput}
              type={showPassword[1] ? 'text' : 'password'}
              conditions={[
                {
                  value: 1,
                  label: 'Both passwords must match.',
                  isValid: INPUT_STATUS.INITIAL,
                },
              ]}
              InputProps={{
                endAdornment: (
                  <InputAdornment className={classes.inputAdornment} position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleTogglePasswordVisibility(1)}
                    >
                      {showPassword[1] ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box paddingTop="30px">
            <Contained onClick={handleClick} className={classes.textInput} miniRounded>
              Reset Password
            </Contained>
          </Box>
          <Box paddingTop="20px" className={classes.noAccount}>
            <span>Don’t have an account?</span>
            <Button component={Link} disableRipple to="/sign-up">
              Sign Up
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreateNewPassword;
