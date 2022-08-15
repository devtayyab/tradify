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
} from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SubItem from './SubItem';

import { makeStyles } from '@material-ui/core';

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

export default function VideoItem({ video, ...props }) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { title, description, videoList } = video;

  return (
    <Card className={classes.cardContainer} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
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
          <SubItem videoList={videoList} />
        </CardContent>
      </Collapse>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    marginRight: '1em',
  },

  videoThumbnail: {
    position: 'relative',
    height: '250px',

    '& .playBtn': {
      '&:hover': {
        border: '2px solid red',
      },
    },
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
