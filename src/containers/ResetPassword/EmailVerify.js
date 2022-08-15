import React from 'react';

import { Link } from 'react-router-dom';
import { Box, Grid, TextField, Button, Typography, Hidden } from '@material-ui/core';

import { Contained } from '../../components/Button';

import useStyle from './index.style';
import TextInput from '../../components/TextInput';

const EmailVerify = (props) => {
  const classes = useStyle();

  return (
    <Box>
      <Box className={classes.desc1}>
        <Typography variant="h4">Reset Password</Typography>
      </Box>
      <Box paddingTop="16px" className={classes.desc2}>
        <Typography variant="h6">
          Enter the email associated with your account and we’ll send an email with instructions to
          reset your password.
        </Typography>
      </Box>
      <Box paddingTop="40px" maxWidth="400px">
        <form noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <TextInput label="Email" placeholder="Email" inputMode="email" />
          <Box paddingTop="30px">
            <Contained onClick={props.handleClick} className={classes.textInput} miniRounded>
              Verify email
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

export default EmailVerify;
