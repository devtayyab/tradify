import React from 'react';

import { Redirect, useHistory, useLocation } from 'react-router';
import { Container, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Maintenance from '../Maintenance';

const Welcome = (props) => {
  const history = useHistory();
  const location = useLocation();

  console.log({ history, location });

  return <Maintenance {...props} />;

  return (
    <Container className="Welcome">
      <Box>
        {[...new Array(20)].map(() => 'landing page').join('\n')}
        <Link to="/login">Login</Link>
      </Box>
    </Container>
  );
};

export default Welcome;
