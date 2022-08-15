import { makeStyles, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import * as d3 from 'd3';
import useD3 from '../../hooks/useD3';
import colors from '../../styles/colors';

import needle from '../../assets/images/icons/pointer.svg';

const HEIGHT = 200;
const WIDTH = 150;
const OUTER_RADIUS = 60;
const INNER_RADIUS = 52;
const THRESHOLD = {
  low: 30,
  medium: 70,
  high: 100,
};

export const MeterGauge = ({
  percentage,
  sentiment,
  flow,
  desc,
  label,
  adjust_label = false,
  ticks_colors,
  ...props
}) => {
  const classes = useStyles();

  const ref = useD3(
    (svg) => {
      const minAngle = -90;
      const maxAngle = 90;
      const angleRange = maxAngle - minAngle;
      const arcWidth = 10;

      const fullArc = d3
        .arc()
        .innerRadius(INNER_RADIUS)
        .outerRadius(OUTER_RADIUS)
        .startAngle(-Math.PI / 2)
        .endAngle(Math.PI / 2)
        .cornerRadius(10);

      const arcValue = d3
        .arc()
        .innerRadius(INNER_RADIUS)
        .outerRadius(OUTER_RADIUS)
        .startAngle(-Math.PI / 2)
        .endAngle(percentage * (Math.PI / 100) + -Math.PI / 2)
        .cornerRadius(20);

      const scale = d3.scaleLinear().range([0, 1]).domain([0, 70]);

      const ticks = scale.ticks(7);

      svg
        .select(`.${classes.value}`)
        .attr('fill', `url(#gradient_${flow})`)
        .call((g) => {
          g.attr('d', arcValue);
        });
      svg.select(`.${classes.placeholder}`).call((g) => {
        g.attr('d', fullArc);
      });

      const placeholder = svg
        .append('g')
        .attr('class', 'label')
        .attr('transform', `translate(${WIDTH / 2},${HEIGHT / 2})`);

      placeholder
        .selectAll('line')
        .data(ticks)
        .enter()
        .call((g) => {
          g.append('line')
            .attr('class', 'tickline')
            .attr('x1', 0)
            .attr('y1', 55)
            .attr('x2', 0)
            .attr('y2', 50)
            .attr('transform', (d) => {
              const newAngle = minAngle + scale(d) * angleRange;
              return `rotate(${newAngle}), translate(0, ${arcWidth - 5 - 100})`;
            })
            .style('stroke', '#3C4254')
            .style('stroke-width', '1px');
        });

      const label1 = placeholder
        .append('g')
        .attr('class', classes.legend)
        .attr('transform', (d) => {
          return `translate(${
            minAngle + scale(0) * angleRange + (10 + (adjust_label ? 10 : 20))
          }, 20)`;
        });
      const label2 = placeholder
        .append('g')
        .attr('class', classes.legend)
        .attr('transform', (d) => {
          return `translate(${
            minAngle + scale(scale.domain()[1]) * angleRange - (10 + (adjust_label ? 40 : 35))
          }, 20)`;
        });

      label1.append('text').text(label[0]);
      label2.append('text').text(label[1]);
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

  const renderOffsetColors = () => {
    const items = [<stop stopColor={ticks_colors[0]} offset="0%" />];
    const c = ticks_colors.length;
    const interval = 100 / (c - 1);

    for (let i = 1; i < c; i++) {
      items.push(<stop stopColor={ticks_colors[i]} offset={`${i * interval}%`} />);
    }

    return items;
  };

  const percToDeg = (perc) => perc * 360;

  const degToRad = (deg) => (deg * Math.PI) / 180;

  const percToRad = (perc) => degToRad(percToDeg(perc));

  const needleLen = 30;
  const needleRadius = 3;
  const percent = percentage / 100;

  const thetaRad = percToRad(percent / 2);

  const centerX = 15.9;
  const centerY = 16;

  const topX = centerX - needleLen * Math.cos(thetaRad);
  const topY = centerY - needleLen * Math.sin(thetaRad);

  const leftX = centerX - needleRadius * Math.cos(thetaRad - Math.PI / 2);
  const leftY = centerY - needleRadius * Math.sin(thetaRad - Math.PI / 2);

  const rightX = centerX - needleRadius * Math.cos(thetaRad + Math.PI / 2);
  const rightY = centerY - needleRadius * Math.sin(thetaRad + Math.PI / 2);

  return (
    <Box width="100%" display="flex" justifyContent="center" position="relative">
      <svg className={classes.root} ref={ref}>
        <defs>
          <linearGradient id={`gradient_${flow}`}>{renderOffsetColors()}</linearGradient>
        </defs>
        <g className="x-axis" />
        <path className={classes.value} />
        <path className={classes.placeholder} />
        <g className={classes.needle}>
          {/* <path d="M18.1243 25.9884C23.5664 24.732 26.9578 19.2942 25.6993 13.8428C24.4407 8.39138 19.0088 4.99064 13.5667 6.24705C8.12458 7.50346 4.73316 12.9412 5.99172 18.3927C7.25028 23.8441 12.6822 27.2448 18.1243 25.9884Z" fill="#2C81FF"/> */}
          {/* uncomment if u want to add the ring */}
          <path
            d="M17.4652 23.1335C21.3332 22.2405 23.7436 18.3756 22.8491 14.501C21.9546 10.6264 18.0938 8.20934 14.2258 9.10233C10.3578 9.99532 7.94738 13.8602 8.84191 17.7348C9.73643 21.6094 13.5972 24.0265 17.4652 23.1335Z"
            fill="#F9FFFE"
          />
          <path
            d="M16.9819 21.0403C19.6956 20.4137 21.3868 17.7022 20.7592 14.9838C20.1316 12.2654 17.4229 10.5697 14.7092 11.1962C11.9955 11.8227 10.3044 14.5342 10.9319 17.2526C11.5595 19.971 14.2682 21.6668 16.9819 21.0403Z"
            fill="#2C81FF"
          />
          <path d={`M${leftX} ${leftY} L${topX} ${topY} L${rightX} ${rightY}`} fill="#2C81FF" />
        </g>
      </svg>
      <Box className={classes.centerDetails}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography className={classes.percent} variant="h6">
            {props.value}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            {desc}
          </Typography>
          <Typography variant="h6" className={classes.desc}>
            {flow}
          </Typography>
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
    width: `${WIDTH}px`,
    height: `${HEIGHT}px`,

    '& path': {
      strokeLinecap: 'round',
    },
  },
  value: {
    strokeLinecap: 'round',
    transform: `translate(${WIDTH / 2}px,${HEIGHT / 2}px)`,
  },
  placeholder: {
    strokeLinecap: 'round',
    transform: `translate(${WIDTH / 2}px,${HEIGHT / 2}px)`,
    fill: '#3C4254',
    opacity: 0.1,
  },
  centerDetails: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: '75%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  percent: {
    color: colors.peter_river,
    fontSize: '1rem',
  },
  caption: {
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
  },
  desc: {
    background: theme.palette.gradients.blue_linear,
    fontSize: '1rem',
    fontWeight: 'bold',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
  },
  legend: {
    fontSize: '.775rem',
  },
  needle: {
    transform: `translate(${WIDTH / 2 - 15}px, 85px)`,
  },
}));
