import React from 'react';

import { Grid } from '@material-ui/core';

import useStyles from './styles';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const ServerError = (props) => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container spacing={0}>
      <Grid className={classes.leftContainer} xs={12} sm={12} md={6} lg={6} xl={6}>
        <LeftContent />
      </Grid>
      <Grid className={classes.rightContainer} xs={12} sm={12} md={6} lg={6} xl={6}>
        <RightContent />
      </Grid>
    </Grid>
  );
};

export default ServerError;
