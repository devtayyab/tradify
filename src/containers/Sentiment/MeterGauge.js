import { makeStyles, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import * as d3 from 'd3';
import useD3 from '../../hooks/useD3';
import colors from '../../styles/colors';

export const MeterGauge = ({ percentage, sentiment, ...props }) => {
  const flame_scale = computeFlameScale(percentage, sentiment);
  const classes = useStyles({ percentage: flame_scale });

  const ref = useD3(
    (svg) => {
      const minAngle = -90;
      const maxAngle = 90;
      const angleRange = maxAngle - minAngle;
      const arcWidth = 20;

      const fullArc = d3
        .arc()
        .innerRadius(90)
        .outerRadius(100)
        .startAngle(-Math.PI / 2)
        .endAngle(Math.PI / 2)
        .cornerRadius(20);

      const arcValue = d3
        .arc()
        .innerRadius(90)
        .outerRadius(100)
        .startAngle(-Math.PI / 2)
        .endAngle(percentage * (Math.PI / 100) + -Math.PI / 2)
        .cornerRadius(20);

      const scale = d3.scaleLinear().range([0, 1]).domain([0, 100]);

      const ticks = scale.ticks(10);

      console.log({ ticks });

      svg.select(`.${classes.value}`).call((g) => {
        g.attr('d', arcValue);
      });
      svg.select(`.${classes.placeholder}`).call((g) => {
        g.attr('d', fullArc);
      });

      const placeholder = svg
        .append('g')
        .attr('class', 'label')
        .attr('transform', `translate(100,100)`);

      placeholder
        .selectAll('line')
        .data(ticks)
        .enter()
        .call((g) => {
          g.append('line')
            .attr('class', 'tickline')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', 0)
            .attr('y2', 5)
            .attr('transform', (d) => {
              const newAngle = minAngle + scale(d) * angleRange;
              return `rotate(${newAngle}), translate(0, ${arcWidth - 5 - 100})`;
            })
            .style('stroke', '#3C4254')
            .style('stroke-width', '1px');
        });
    },
    [percentage]
  );

  function computeFlameScale(percent, sentiment) {
    let scale_value = +percent;

    if (sentiment === 'positive') {
      scale_value += 200;
    }

    return scale_value;
  }

  return (
    <Box width="100%" display="flex" justifyContent="center" position="relative">
      <svg className={classes.root} ref={ref}>
        <g className="x-axis" />
        <path className={classes.value} />
        <path className={classes.placeholder} />
      </svg>
      <Box className={classes.centerDetails}>
        <Box
          padding="1rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={classes.flame}
        >
          <span>🔥</span>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography className={classes.percent} variant="h5">
            {percentage}%
          </Typography>
          <Typography>Based on likes</Typography>
        </Box>
      </Box>
    </Box>
  );
};

const _deg2rad = (deg) => {
  return (deg * Math.PI) / 180;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '200px',
    height: '200px',

    '& path': {
      strokeLinecap: 'round',
    },
  },
  value: {
    strokeLinecap: 'round',
    transform: 'translate(100px,100px)',
    fill: '#A276FF',
  },
  placeholder: {
    strokeLinecap: 'round',
    transform: 'translate(100px,100px)',
    fill: '#3C4254',
    opacity: 0.1,
  },
  centerDetails: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  percent: {
    color: colors.peter_river,
  },
  flame: {
    '& span': {
      transform: (props) => `scale(${props.percentage}%)`,
      transition: 'all ease 1s',
    },
  },
}));
