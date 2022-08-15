import React, { useEffect } from 'react';

import { useLocation } from 'react-router';

import { Box } from '@material-ui/core';
import Desktop from './Desktop';
import Mobile from './Mobile';
import useStyles from './index.style';

const EmailVerified = ({ location, ...props }) => {
  const classes = useStyles();

  return (
    <Box>
      <Desktop classes={classes} />
      <Mobile classes={classes} />
    </Box>
  );
};

export default EmailVerified;
