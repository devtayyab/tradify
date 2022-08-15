import { Box, makeStyles, Typography } from '@material-ui/core';
import { Transform } from '@material-ui/icons';
import clsx from 'clsx';
import colors from '../../styles/colors';

const Rating = ({ card, color, label, value, ...props }) => {
  const limit = card ? 10 : 20;
  const percentage = Math.floor(value * (limit / 100));
  const flame_scale = computeFlameScale(value, 'positive');
  const classes = useStyles({ percentage: flame_scale });
  const bars = [];

  /**
    flame scale logic
    positive = 200%
  **/
  function computeFlameScale(percent, sentiment) {
    let scale_value = percent;

    if (sentiment === 'positive') {
      scale_value += 100;
    }
    return scale_value;
  }

  for (let i = 1; i <= limit; i++) {
    let bg = '#C4C4C4';

    if (percentage >= i) {
      bg = color || colors.peter_river;
    }
    bars.push(<Box bgcolor={bg} className={clsx(classes.bar, { [classes.cardBar]: card })} />);
  }

  return (
    <Box>
      <Box>
        <Typography className={clsx(classes.label, { [classes.cardLabel]: card })}>
          {label}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Box>
          <Typography variant="h6" className={clsx(classes.value, { [classes.cardValue]: card })}>
            {value || '0'}%
          </Typography>
        </Box>
        <Box display="flex" marginLeft="5px">
          {bars}
        </Box>
      </Box>
    </Box>
  );
};

export default Rating;

const useStyles = makeStyles((theme) => ({
  label: {
    fontSize: '.875rem',
  },
  value: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  bar: {
    width: '3px',
    height: '14px',
    borderRadius: '3px',
    margin: '0 1.5px',
  },
  cardLabel: {
    color: '#FFF',
    fontSize: '.875rem',
  },
  cardValue: {
    color: '#FFF',
    fontSize: '1rem',
  },
  cardBar: {
    width: '3px',
    height: '13px',
  },
  flame: {
    '& span': {
      transform: (props) => `scale(${props.percentage}%)`,
      transition: 'all ease 1s',
    },
  },
}));
