import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const style = {
  chart: {
    width: '300px',
  },
};

const DoughnutChart = (props) => {
  const { labels, values } = props;

  const data = {
    labels: labels,
    datasets: [
      {
        label: '# of Votes',
        data: values || [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'center',
      },
    },
  };

  return (
    <div style={style.chart}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
