import React, { Component, useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import axios from 'axios';

import HighchartData from 'highcharts/modules/data';
import HighchartsDragPanes from 'highcharts/modules/drag-panes';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsIndicator from 'highcharts/indicators/indicators';
import HighchartsPivot from 'highcharts/indicators/pivot-points';
import HighchartsEMA from 'highcharts/indicators/ema';
import HighchartsMACD from 'highcharts/indicators/macd';

// SMA and Volume
import HighchartsVolumeByPrice from 'highcharts/indicators/volume-by-price';

// All Indicators
import HighchartsAllIndicator from 'highcharts/indicators/indicators-all';

HighchartData(Highcharts);
HighchartsDragPanes(Highcharts);
HighchartsExporting(Highcharts);
HighchartsIndicator(Highcharts);
HighchartsPivot(Highcharts);
HighchartsEMA(Highcharts);
HighchartsMACD(Highcharts);
HighchartsVolumeByPrice(Highcharts);
HighchartsAllIndicator(Highcharts);

const HighCharts = ({ config, ...props }) => {
  // const [data, setData] = useState([]);
  // const [volume, setVolume] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(`https://demo-live-data.highcharts.com/aapl-ohlcv.json`);
  //       const json = await response.json();
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }
  //   // fetchData();
  // }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={config} />
    </div>
  );
};

export default HighCharts;
