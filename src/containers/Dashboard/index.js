import React from 'react';

import { Container, Box } from '@material-ui/core';
import useStyles from './index.style';
import { useDispatch } from 'react-redux';
import Maintenance from '../Maintenance';

const Dashboard = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  return <Maintenance {...props} />;

  return (
    <Container className={styles.container}>
      <Box margin={0}>Dashboard</Box>
    </Container>
  );
};

export default Dashboard;
