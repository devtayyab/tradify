import * as React from 'react';
import { styled } from '@mui/material/styles';

import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Collapse,
  IconButton,
  Grid,
  Typography,
  Box,
  Avatar,
} from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideoSubTopic from './VideoSubTopic';
import UserIcon from './UserIcon';
import user1 from '../../assets/images/challenge/user1.png';

import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function VideoItem({ video = {}, ...props }) {
  const history = useHistory();
  const classes = useStyles();
  const {
    name,
    author,
    learners,
    learnTime = 5,
    description,
    total_videos,
    videos = [],
  } = video.attributes;

  const getVideo = videos[0] || {};
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (e) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  const handleVideoClick = (e) => {
    e.stopPropagation();
    history.push({ pathname: `/app/challenge/${name}` });
  };

  return (
    <Grid xs={12} sm={6} md={6} lg={4} xl={4}>
      <Card className={classes.cardContainer} sx={{ maxWidth: 345 }} onClick={handleVideoClick}>
        <CardMedia
          className={classes.videoThumbnail}
          height="250"
          image={getVideo.thumbnail}
          alt={name}
        >
          <IconButton className={classes.playBtn}>
            <FavoriteIcon />
          </IconButton>
        </CardMedia>
        <CardContent>
          <Grid container marginBottom="1em">
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Avatar src={user1} /> <Typography> {author || 'Unnmaed Author'} </Typography>
            </Box>

            {/* <Grid item xs={2} md={2}>
              <Typography> {total_videos} Videos </Typography>
            </Grid> */}
          </Grid>

          <Typography className={classes.title} variant="h5">
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>

          {/* <UserIcon className={classes.topicProgress} /> */}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <VideoSubTopic subTopic={videos} category={name} />
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    marginRight: '1em',
    marginBottom: '1em',
    cursor: 'pointer',
  },

  videoThumbnail: {
    position: 'relative',
    height: '250px',

    '& .playBtn': {},
  },

  playBtn: {
    display: 'none',

    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },

  title: {
    fontWeight: 800,
  },
}));
