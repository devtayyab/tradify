import * as React from 'react';

import { Grid, Typography, Box, Container } from '@material-ui/core';

import VideoItem from './VideoItem';

import { makeStyles } from '@material-ui/core';

export default function VideoContainer({ trainingVideos = [], ...props }) {
  const classes = useStyles();

  const getVideoItems = () => {
    return trainingVideos.map((video, index) => {
      return <VideoItem video={video} />;
    });
  };

  return (
    <Container className={classes.videoContainer}>
      <Box>
        <Typography className={classes.titleContainer} variant="h5">
          Recommended Videos
        </Typography>
        <Grid container>{getVideoItems()}</Grid>
      </Box>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    margin: '1em 0',
  },

  titleContainer: {
    fontWeight: 'bold',
    margin: '1em 0',
  },
}));
