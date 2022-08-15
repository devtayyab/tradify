import * as React from 'react';

import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
  Typography,
} from '@material-ui/core';

export default function SubItem(props) {
  const selectCurrentVideo = () => {};

  const videoList = [
    {
      id: 1,
      title: 'Bond',
      description:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests.',
      image: 'http://localhost:3000/images/image3.jpeg',
    },
    {
      id: 2,
      title: 'Commodoties',
      description:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests.',
      image: 'http://localhost:3000/images/image4.jpg',
    },
    {
      id: 3,
      title: 'Equities',
      description:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests.',
      image: 'http://localhost:3000/images/image5.jpeg',
    },
    {
      id: 4,
      title: 'Currencies',
      description:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests.',
      image: 'http://localhost:3000/images/image6.jpg',
    },
  ];

  const getVideoList = () => {
    return videoList.map((video, index) => {
      return (
        <Box onClick={selectCurrentVideo}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={`${index + 1}`} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={video.title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {video.description}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          {index !== videoList.length - 1 ? <Divider variant="inset" component="li" /> : ''}
        </Box>
      );
    });
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>{getVideoList()}</List>
  );
}
