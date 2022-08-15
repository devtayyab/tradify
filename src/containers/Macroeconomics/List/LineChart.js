import { makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import useD3 from '../../../hooks/useD3';
import _ from 'lodash';

import * as d3 from 'd3';

const WIDTH = 75;
const HEIGHT = 40;

const LineChart = (props) => {
  const [chartData, setChartData] = useState([]);
  const classes = useStyles();
  const width = WIDTH;
  const height = HEIGHT;

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
        .attr('fill', 'none')
        .attr('stroke', '#21BF73')
        .attr('stroke-width', 1.5)
        .attr(
          'd',
          d3
            .line()
            .x(function (d) {
              return xScale(d.date);
            })
            .y(function (d) {
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
    data.length = 30;

    data = data.map((d) => ({ ...d, value: _.shuffle(data)[0].value }));

    console.log({ data });
    setChartData(data);
  };

  return <svg ref={ref} className={classes.root} />;
};

export default LineChart;

const useStyles = makeStyles((theme) => ({
  root: {
    width: `${WIDTH}px`,
    height: `${HEIGHT}px`,
  },
}));
