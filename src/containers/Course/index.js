import React, { useEffect } from 'react';

import useStyle from './index.style';

import user1 from '../../assets/images/challenge/user1.png';

import VideoItem from './VideoItem';
import ProgressModal from './ProgressModal';
import VideoContainer from '../Challenge/VideoContainer';
import { ErrorIndicator, LoadingIndicator } from '../../components/ContainerIndicator';
import PropTypes from 'prop-types';

import {
  Box,
  Typography,
  Grid,
  Container,
  Avatar,
  Tabs,
  Tab,
  Card,
  IconButton,
} from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import { useDispatch, useSelector } from 'react-redux';

import { fetchTrainingVideos, modalToggle } from '../../redux/actions/training.action';

const CourseTopic = ({ ...props }) => {
  const dispatch = useDispatch();

  const {
    trainingVideos = [],
    currentCategory = {},
    currentVideo = {},
    progressModal,
    loading,
    isError,
  } = useSelector((store) => {
    const training_store = store.training;

    if (training_store) return training_store.toJS();

    return {};
  });

  useEffect(() => {
    console.log(props.match);
    dispatch(fetchTrainingVideos(props.match.params.title));
  }, []);

  const styles = useStyle();

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log('CURRENT TOPIC IS', currentCategory, currentVideo);

  const { name, description, videos, total_videos } = currentCategory?.attributes || {};
  const { author, title, thumbnail, is_active } = currentVideo;

  const getTopics = () => {
    return videos?.map((video, index) => {
      return <VideoItem video={video} />;
    });
  };

  const getContent = isError ? (
    <ErrorIndicator
      title={'Oops! Something went wrong!'}
      description={`It's on us, we moved the content to a different page.
    The search below should help!
    `}
    />
  ) : (
    <Card className={styles.container}>
      <Box paddingTop="1em" paddingBottom="1em">
        <Grid container>
          <Grid xs={6} sm={6} md={8} lg={9} xl={9}>
            <Typography className={styles.title} variant="h4">
              {name} - {title}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container>
        <Grid item xs={6} sm={12} md={12} lg={8} xl={8}>
          <Box>
            {/* <iframe
        width="95%"
        height="500px"
        src="https://www.youtube.com/embed/mzJqxT1UGho"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}

            <video width="95%" height="500px" poster={thumbnail} controls>
              <source src={currentVideo.video} type="video/mp4" />
              <source src={currentVideo.video} type="video/ogg" />
              Your browser does not support the video tag.
            </video>

            <Grid className={styles.videoDetails} container>
              <Grid xs={10} sm={10} display="flex" alignItems="center" container>
                <Grid mr={4}>
                  <Avatar src={user1} />
                </Grid>

                <Typography>{author || 'Unnamed Author'} </Typography>
              </Grid>

              <Grid display="flex" justifyContent="end" xs={2} sm={2}>
                <IconButton color="primary">
                  <FavoriteIcon />
                </IconButton>
                <IconButton color="white">
                  <ShareIcon />
                </IconButton>
              </Grid>
            </Grid>

            <Box sx={{ width: '100%' }}>
              <Tabs value={value} onChange={handleChange} textColor="red" indicatorColor="red">
                <Tab label="Description" {...a11yProps(0)} />
                <Tab label="Discussion" wrapped {...a11yProps(1)} />
                <Tab label="Other Materials" wrapped {...a11yProps(2)} />
              </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
              <Typography variant="h4">About the {name}</Typography>

              <Typography className={styles.paragraph} variant="body1">
                {description}
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              <VideoContainer />
            </TabPanel>
          </Box>
        </Grid>

        <Grid item display="flex" flexDirection="column" xs={6} sm={12} md={12} lg={4} xl={4}>
          {getTopics()}
        </Grid>
      </Grid>
    </Card>
  );

  return (
    <Container className={styles.container}>
      {loading ? <LoadingIndicator /> : getContent}
      <ProgressModal open={progressModal} />
    </Container>
  );
};

export default CourseTopic;
