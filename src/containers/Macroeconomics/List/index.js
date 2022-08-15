import { Box, Typography } from '@material-ui/core';

import Item from './Item';

import useStyles from './styles';

const List = ({ title, items, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box>
        <Typography variant="subtitle1" className={classes.title}>
          {title}
        </Typography>
      </Box>
      <Box pt="1rem">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Box>
    </Box>
  );
};

export default List;
