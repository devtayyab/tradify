import Mobile from './Mobile';
import stockData from '../Charts/sample-data.json';

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

export default () => {
  return (
    <>
      <Mobile
        data={stockData}
        pivotConfig={pivotPoint}
        allTechnicalConfig={allTechnical}
        volumeConfig={volumeByPrice}
      />
    </>
  );
};
