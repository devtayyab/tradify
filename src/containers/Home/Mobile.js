import { Box, Button, Typography } from '@material-ui/core';
import ActivityCard from './ActivityCard';

import walk from '../../assets/images/home/walk.png';
import running from '../../assets/images/home/running.png';
import bicycle from '../../assets/images/home/bicycle.png';

import useStyles from './styles';
import CardItem from '../PortfolioManagement/CardItem';
import { Contained } from '../../components/Button';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const Mobile = ({ activeIndex, setActiveIndex, card_items, ...props }) => {
  const classes = useStyles();
  const activity_items = [
    {
      data: {
        value: 2314,
        over: 8000,
        unit: 'STEPS',
      },
      btnText: 'Videos',
      icon: walk,
    },
    {
      data: {
        value: 3.7,
        over: undefined,
        unit: 'KM',
      },
      btnText: 'Quizzes',
      icon: running,
    },
    {
      data: {
        value: 0,
        over: undefined,
        unit: 'KM',
      },
      btnText: 'Community',
      icon: bicycle,
    },
  ];

  const handleClick = (e, i, id) => {
    e.preventDefault();

    setActiveIndex(i);

    const item = document.getElementById(id);
    item.scrollIntoView({ inline: 'center', behavior: 'smooth' });
  };

  return (
    <Box className={classes.container}>
      <Typography className={classes.learn}>Learn to See Markets</Typography>
      <Typography variant="h4" className={classes.title}>
        Traidify!
      </Typography>
      <Box
        display="flex"
        flexWrap="noWrap"
        overflow="scroll"
        pt="1.5rem"
        justifyContent="space-between"
      >
        {activity_items.map((data, i) => (
          <ActivityCard {...data} />
        ))}
      </Box>
      <Box display="flex" flexWrap="noWrap" overflow="scroll" pt="2.5rem">
        {card_items.map((data, i) => (
          <Button
            onClick={(e) => handleClick(e, i, data.id)}
            className={clsx(classes.cardLink, { [classes.activeCardLink]: i === activeIndex })}
          >
            {data.title}
          </Button>
        ))}
      </Box>
      <Box
        id="listContainer"
        display="flex"
        flexDirection="column"
        flexWrap="noWrap"
        overflow="scroll"
        justifyContent="space-between"
      >
        {card_items.map((data, i) => (
          <Box>
            <CardItem {...data} id={data.id} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Mobile;
