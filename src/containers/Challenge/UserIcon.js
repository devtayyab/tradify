import React, { useState } from 'react';

import { Box, Typography, CircularProgress, Avatar } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';

import user1 from '../../assets/images/challenge/user1.png';

function CircularProgressWithLabel(props) {
  const styles = useStyles();

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} size={45} thickness={10} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar className={styles.userIcon} src={user1} />
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

const UserIcon = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
};

export default UserIcon;

const useStyles = makeStyles((theme) => ({
  userIcon: {
    margin: '0.5em',
  },

  userImg: {},
}));
