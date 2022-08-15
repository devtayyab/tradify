import React, { useEffect } from 'react';
import useStyle from './index.style';

import UserList from './UserList';

import VideoContainer from './VideoContainer';
import TrainingModal from './TrainingModal';
import { ButtonGroup } from '../../components/Button';
import { Box, Typography, Grid, Container } from '@material-ui/core';
import { ErrorIndicator, LoadingIndicator } from '../../components/ContainerIndicator';

import { useDispatch, useSelector } from 'react-redux';

import { fetchTrainingVideos, modalToggle } from '../../redux/actions/training.action';

const Challenge = (props) => {
  const styles = useStyle();
  const dispatch = useDispatch();

  const {
    trainingVideos = [],
    showModal,
    isError,
    error,
    loading,
  } = useSelector((store) => {
    const training_store = store.training;

    if (training_store) return training_store.toJS();

    return {};
  });

  useEffect(() => {
    dispatch(fetchTrainingVideos());
  }, []);

  const getContent = isError ? (
    <ErrorIndicator
      title={'Oops! Something went wrong!'}
      description={`It's on us, we moved the content to a different page.
The search below should help!
`}
    />
  ) : (
    <Box paddingTop="1.5em" paddingBottom="3em">
      <Grid container>
        <Grid xs={6} sm={6} md={8} lg={9} xl={9}>
          <Typography className={styles.title} variant="h3">
            Test Your Knowledge
          </Typography>
        </Grid>
        <Grid xs={6} sm={6} md={4} lg={3} xl={2}>
          <ButtonGroup buttons={['Do', 'Done']} currentTab={'Do'}></ButtonGroup>
        </Grid>
      </Grid>

      {/* Video List */}
      <VideoContainer trainingVideos={trainingVideos} />
    </Box>
  );

  return (
    <Container className={styles.container}>
      {loading ? <LoadingIndicator /> : getContent}
      <TrainingModal open={showModal} />
    </Container>
  );
};

export default Challenge;
