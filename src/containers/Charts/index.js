import React, { useState } from 'react';
import cn from 'classnames';
import TradingViewWidget from 'react-tradingview-widget';
import { HighChart } from '../../components/Charts';
import { makeStyles } from '@material-ui/core';
import stockData from './sample-data.json';

const dates = ['Time', '1H', '4H', '1D', '1W', '1M'];
const navigation = ['Trading View', 'MACD and Pivot Points', 'All Technicals', 'SMA and Volume'];

const data = [
  {
    name: '1',
    price: 4000,
  },
  {
    name: '2',
    price: 3000,
  },
  {
    name: '3',
    price: -1000,
  },
  {
    name: '4',
    price: 500,
  },
  {
    name: '5',
    price: -2000,
  },
  {
    name: '6',
    price: -250,
  },
  {
    name: '7',
    price: 3900,
  },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.price));
  const dataMin = Math.min(...data.map((i) => i.price));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

const pivotPoint = {
  rangeSelector: {
    selected: 2,
  },

  yAxis: [
    {
      height: '75%',
      resize: {
        enabled: true,
      },
      labels: {
        align: 'right',
        x: -3,
      },
      title: {
        text: 'AAPL',
      },
    },
    {
      top: '75%',
      height: '25%',
      labels: {
        align: 'right',
        x: -3,
      },
      offset: 0,
      title: {
        text: 'MACD',
      },
    },
  ],

  title: {
    text: 'AAPL Stock Price',
  },

  subtitle: {
    text: 'With MACD and Pivot Points technical indicators',
  },

  series: [
    {
      type: 'ohlc',
      id: 'aapl',
      name: 'AAPL Stock Price',
      data: stockData,
      zIndex: 1,
    },
    {
      type: 'pivotpoints',
      linkedTo: 'aapl',
      zIndex: 0,
      lineWidth: 1,
      dataLabels: {
        overflow: 'none',
        crop: false,
        y: 4,
        style: {
          fontSize: 9,
        },
      },
    },
    {
      type: 'macd',
      yAxis: 1,
      linkedTo: 'aapl',
    },
  ],
};

// SMA and Volume Config
var ohlc = [],
  volume = [],
  dataLength = stockData.length,
  // set the allowed units for data grouping
  groupingUnits = [
    [
      'week', // unit name
      [1], // allowed multiples
    ],
    ['month', [1, 2, 3, 4, 6]],
  ],
  i = 0;

for (i; i < dataLength; i += 1) {
  ohlc.push([
    stockData[i][0], // the date
    stockData[i][1], // open
    stockData[i][2], // high
    stockData[i][3], // low
    stockData[i][4], // close
  ]);

  volume.push([
    stockData[i][0], // the date
    stockData[i][5], // the volume
  ]);
}

const volumeByPrice = {
  rangeSelector: {
    selected: 2,
  },

  title: {
    text: 'AAPL Historical',
  },

  subtitle: {
    text: 'With SMA and Volume by Price technical indicators',
  },

  yAxis: [
    {
      startOnTick: false,
      endOnTick: false,
      labels: {
        align: 'right',
        x: -3,
      },
      title: {
        text: 'OHLC',
      },
      height: '60%',
      lineWidth: 2,
      resize: {
        enabled: true,
      },
    },
    {
      labels: {
        align: 'right',
        x: -3,
      },
      title: {
        text: 'Volume',
      },
      top: '65%',
      height: '35%',
      offset: 0,
      lineWidth: 2,
    },
  ],

  tooltip: {
    split: true,
  },

  plotOptions: {
    series: {
      dataGrouping: {
        units: groupingUnits,
      },
    },
  },

  series: [
    {
      type: 'candlestick',
      name: 'AAPL',
      id: 'aapl',
      zIndex: 2,
      data: ohlc,
    },
    {
      type: 'column',
      name: 'Volume',
      id: 'volume',
      data: volume,
      yAxis: 1,
    },
    {
      type: 'vbp',
      linkedTo: 'aapl',
      params: {
        volumeSeriesID: 'volume',
      },
      dataLabels: {
        enabled: false,
      },
      zoneLines: {
        enabled: false,
      },
    },
    {
      type: 'sma',
      linkedTo: 'aapl',
      zIndex: 1,
      marker: {
        enabled: false,
      },
    },
  ],
};

// All Technicals Config
const allTechnical = {
  chart: {
    height: 600,
  },
  title: {
    text: 'AAPL Historical',
  },
  subtitle: {
    text: 'All indicators',
  },
  legend: {
    enabled: true,
  },
  rangeSelector: {
    selected: 2,
  },
  yAxis: [
    {
      height: '60%',
    },
    {
      top: '60%',
      height: '20%',
    },
    {
      top: '80%',
      height: '20%',
    },
  ],
  plotOptions: {
    series: {
      showInLegend: true,
    },
  },
  series: [
    {
      type: 'candlestick',
      id: 'aapl',
      name: 'AAPL',
      data: stockData,
    },
    {
      type: 'column',
      id: 'volume',
      name: 'Volume',
      data: volume,
      yAxis: 1,
    },
    {
      type: 'pc',
      id: 'overlay',
      linkedTo: 'aapl',
      yAxis: 0,
    },
    {
      type: 'macd',
      id: 'oscillator',
      linkedTo: 'aapl',
      yAxis: 2,
    },
  ],
};

const Actions = () => {
  const styles = useStyles();
  const [activeIndexDates, setActiveIndexDates] = useState(0);
  const [activeIndexNav, setActiveIndexNav] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        {navigation.map((x, index) => (
          <button
            className={cn(styles.link, {
              [styles.active]: index === activeIndexNav,
            })}
            onClick={() => setActiveIndexNav(index)}
            key={index}
          >
            {x}
          </button>
        ))}
      </div>
      {activeIndexNav === 0 && (
        <div className={styles.inner}>
          <div className={styles.head}>
            <div className={styles.group}>
              <div className={styles.nav}>
                {dates.map((x, index) => (
                  <button
                    className={cn(styles.link, {
                      [styles.active]: index === activeIndexDates,
                    })}
                    onClick={() => setActiveIndexDates(index)}
                    key={index}
                  >
                    {x}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.iframe}>
            <TradingViewWidget
              symbol="NASDAQ:AAPL"
              locale="en"
              hide_top_toolbar={true}
              studies={['Volume@tv-basicstudies']}
              autosize
            />
          </div>
        </div>
      )}
      {activeIndexNav === 1 && (
        <div className={styles.inner}>
          <div className={styles.iframe}>
            <HighChart config={pivotPoint} />
          </div>
        </div>
      )}
      {activeIndexNav === 2 && (
        <div className={styles.inner}>
          <div className={styles.iframe}>
            <HighChart config={allTechnical} />
          </div>
        </div>
      )}
      {activeIndexNav === 3 && (
        <div className={styles.inner}>
          <div className={styles.iframe}>
            <HighChart config={volumeByPrice} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Actions;

const useStyles = makeStyles((theme) => ({
  container: {
    width: '1000px',
    height: '500px',
  },

  iframe: {
    height: '490px',
    margin: -'1px',
  },
}));
