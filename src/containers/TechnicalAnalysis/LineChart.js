import { makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import useD3 from '../../hooks/useD3';
import _ from 'lodash';

import * as d3 from 'd3';

const WIDTH = 75;
const HEIGHT = 40;

const LineChart = ({ trend, name, color, ...props }) => {
  const [chartData, setChartData] = useState([]);
  const classes = useStyles();
  const width = WIDTH;
  const height = HEIGHT - 10;

  const ref = useD3(
    (svg) => {
      const data = [...(chartData || [])];
      const xScale = d3
        .scaleTime()
        .domain(
          d3.extent(data, function (d) {
            return d.date;
          })
        )
        .range([0, width]);
      const yScale = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, function (d) {
            return +d.value;
          }),
        ])
        .range([height, 0]);

      svg
        .append('path')
        .datum(data)
        .attr('transform', `translate(0, 5)`)
        .attr('fill', `url(#${trend === 'positive' ? 'up' : 'down'}Gradient)`)
        .attr('stroke-width', 1.5)
        .attr(
          'd',
          d3
            .area()
            .x(function (d) {
              return xScale(d.date);
            })
            .y0(height)
            .y1(function (d) {
              return yScale(d.value);
            })
        );
    },
    [chartData]
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await d3.csv(
      'https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv'
    );
    data = data.map((d) => ({ date: d3.timeParse('%Y-%m-%d')(d.date), value: d.value }));
    data.length = 15;

    data = data.map((d) => ({ ...d, value: _.shuffle(data)[0].value }));

    console.log({ data });
    setChartData(data);
  };

  return (
    <svg ref={ref} className={classes.root}>
      <defs>
        <linearGradient id="upGradient" x1="0" x2="0" y1="0" y2="1">
          <stop className={classes.upGradientStop1} offset="0%" />
          <stop className={classes.upGradientStop2} offset="20%" />
          <stop className={classes.upGradientStop3} offset="100%" />
        </linearGradient>
        <linearGradient id="downGradient" x1="0" x2="0" y1="0" y2="1">
          <stop className={classes.downGradientStop1} offset="0%" />
          <stop className={classes.downGradientStop2} offset="20%" />
          <stop className={classes.downGradientStop3} offset="100%" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LineChart;

const useStyles = makeStyles((theme) => ({
  root: {
    width: `${WIDTH}px`,
    height: `${HEIGHT}px`,
  },
  upGradientStop1: {
    stopColor: '#1CD1A1',
  },
  upGradientStop2: {
    stopColor: '#1CD1A1',
  },
  upGradientStop3: {
    stopColor: '#FFF',
  },

  downGradientStop1: {
    stopColor: '#F20049',
  },
  downGradientStop2: {
    stopColor: '#F20049',
  },
  downGradientStop3: {
    stopColor: '#FFF',
  },
}));
