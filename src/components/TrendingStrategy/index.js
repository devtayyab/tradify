import { Box, Typography } from '@material-ui/core';
import clsx from 'clsx';

import Item from './Item';

import useStyles from './styles';

const TrendingStrats = ({ card, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.container, { [classes.cardContainer]: card })}>
      <Box>
        <Typography
          variant="subtitle1"
          className={clsx(classes.title, { [classes.cardTitle]: card })}
        >
          Trending Up Strategies
        </Typography>
      </Box>
      <Box pt="2rem">
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

export default TrendingStrats;
