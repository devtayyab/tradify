import * as echarts from 'echarts';
const graphic = echarts.graphic;
const THRESHOLD = {
  low: 30,
  medium: 70,
  high: 100,
};
const labelRight = {
  position: 'right',
};
export const values = [-6, 1, 23, 4, 7, 8, -10];
export const breadthvalue = [1, 2, 6, 4, 5, 6, 7];
export const breadthvalue1 = [-1, -4, -3, -6, -5];
export const xlsvalus = [5, 4, 3, 2, 1, -1.5, -2, -3, -4, -5];
export const datas = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

export const timedata = {
  'Real-Time': 'd',
  Week: 'w',
  Month: 'm',
  year: 'y',
  QTD: 'qtd',
  YTD: 'ytd',
};

export const Perfromanceoption = {
  title: {
    text: '',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  xAxis: {
    type: 'value',

    axisLabel: {
      show: true,
      color: function (value, index) {
        if (value < 0) {
          return 'red';
        } else {
          return 'blue';
        }
      },
      align: 'right',
      rich: {
        a: {
          align: 'right',
        },
      },
    },

    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: 'category',
    scale: true,
    boundaryGap: [0.0, 0.0],

    axisLine: {
      show: false,
      // lineStyle: { color: '#fff' },
      // textStyle: { color: '#fff' },
    },
    axisLabel: { show: true },
    axisTick: { show: false },
    splitLine: { show: false },
    data: ['B', 'C', 'D', 'E', 'F', 'G', 'H'],
  },
  series: [
    {
      name: 'Cost',
      type: 'bar',
      barWidth: '100%',
      barCategoryGap: '1%',
      barGap: '1%',
      borderRadius: 18,
      borderColor: '#000',
      borderWidth: 1,
      borderType: 'solid',
      barMaxWidth: '90%',
      showBackground: true,
      backgroundStyle: {
        color: '#E9F5F1',
        borderRadius: 18,
      },
      data: values.map((value) => ({
        value: value,

        itemStyle: {
          color:
            value > 0
              ? new graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    { offset: 0, color: '#41E7B0' },
                    { offset: 1, color: '#5D5FEF' },
                  ],
                  false
                )
              : new graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    { offset: 0, color: '#EF5DA8' },
                    { offset: 1, color: '#5D5FEF' },
                  ],
                  false
                ),

          borderRadius: value > 0 ? [0, 12, 12, 0] : [12, 0, 0, 12],
          borderWidth: 0,
          borderColor: value > 0 ? '#41E7B0' : '#EF5DA8',
        },
      })),
      label: {
        show: false,

        formatter: '{b}',
        position: '',
        color: '#000',
        fontSize: '12px',
        fontWeight: 'bold',
        borderRadius: '12',
      },
    },
  ],
};

export const Breadthoption = {
  title: {
    text: '',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  // grid: {

  //     bottom: 30,
  // },

  visualMap: {
    show: false,
    min: 0,
    max: 10,
    inRange: {
      color: ['#EF5DA8', '##41E7B0'],
    },
    text: ['>0', '<0'],
    calculable: true,
    type: 'continuous',
  },
  xAxis: {
    type: 'value',
    position: 'right',
    axisLabel: { show: false },
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: 'category',
    labelRight: labelRight,
    axisLine: {
      lineStyle: { color: '#fff' },
      textStyle: { color: '#fff' },
    },
    axisLabel: { show: true },
    axisTick: { show: true },
    splitLine: { show: false },
    data: ['B', 'C', 'D', 'E', 'F', 'G', 'H'],
  },
  series: [
    {
      name: 'Cost',
      type: 'bar',
      barWidth: '100%',
      stack: 'Total',
      barCategoryGap: '1%',
      barGap: '1%',
      borderRadius: 18,
      borderColor: '#000',
      borderWidth: 1,
      borderType: 'solid',
      barMaxWidth: '90%',
      showBackground: true,
      backgroundStyle: {
        color: '#E9F5F1',
        borderRadius: 18,
      },
      label: {
        // show: true,
        // formatter: "{b}",
        // position: "right",
        borderRadius: '12',
      },
      data: breadthvalue.map((value) => ({
        value: value,

        itemStyle: {
          color:
            value > 0
              ? new graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    { offset: 0, color: '#41E7B0' },
                    { offset: 1, color: '#5D5FEF' },
                  ],
                  false
                )
              : new graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    { offset: 0, color: '#EF5DA8' },
                    { offset: 1, color: '#5D5FEF' },
                  ],
                  false
                ),

          borderRadius: value > 0 ? [0, 12, 12, 0] : [12, 0, 0, 12],
          borderWidth: 0,
          borderColor: value > 0 ? '#41E7B0' : '#EF5DA8',
        },
      })),
    },
  ],
};
export const Breadthoption1 = {
  title: {
    text: '',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  // grid: {

  //     bottom: 30,
  // },

  visualMap: {
    show: false,
    min: 0,
    max: 10,
    inRange: {
      color: ['#EF5DA8', '##41E7B0'],
    },
    text: ['>0', '<0'],
    calculable: true,
    type: 'continuous',
  },
  xAxis: {
    type: 'value',
    position: 'right',
    axisLabel: { show: false },
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: 'category',
    labelRight: labelRight,
    axisLine: {
      lineStyle: { color: '#fff' },
      textStyle: { color: '#fff' },
    },
    axisLabel: { show: true },
    axisTick: { show: true },
    splitLine: { show: false },
    data: ['B', 'C', 'D', 'E', 'F', 'G', 'H'],
  },
  series: [
    {
      name: 'Cost',
      type: 'bar',
      barWidth: '100%',
      stack: 'Total',
      barCategoryGap: '1%',
      barGap: '1%',
      borderRadius: 18,
      borderColor: '#000',
      borderWidth: 1,
      borderType: 'solid',
      barMaxWidth: '90%',
      showBackground: true,
      backgroundStyle: {
        color: '#E9F5F1',
        borderRadius: 18,
      },
      label: {
        // show: true,
        // formatter: "{b}",
        // position: "right",
        borderRadius: '12',
      },
      data: breadthvalue1.map((value) => ({
        value: value,

        itemStyle: {
          color:
            value > 0
              ? new graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    { offset: 0, color: '#41E7B0' },
                    { offset: 1, color: '#5D5FEF' },
                  ],
                  false
                )
              : new graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    { offset: 0, color: '#EF5DA8' },
                    { offset: 1, color: '#5D5FEF' },
                  ],
                  false
                ),

          borderRadius: value > 0 ? [0, 12, 12, 0] : [12, 0, 0, 12],
          borderWidth: 0,
          borderColor: value > 0 ? '#41E7B0' : '#EF5DA8',
        },
      })),
    },
  ],
};

export const xLsCummonictaionoption = {
  title: {
    text: '',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  visualMap: {
    show: false,
    min: 0,
    max: 10,
    inRange: {
      color: ['#EF5DA8', '##41E7B0'],
    },
    text: ['>0', '<0'],
    calculable: true,
    type: 'continuous',
  },
  xAxis: {
    type: 'category',
    position: 'right',

    axisLabel: { show: true, fontSize: '12px', rotate: 45, align: 'right' },
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
  },
  yAxis: {
    type: 'value',
    scale: true,
    min: function (value) {
      return value.min;
    },
    max: function (value) {
      return value.max;
    },
    splitNumber: 2,

    position: 'right',
    axisLine: {
      show: false,
    },
    // axisLabel: { show: true, position: 'right', fontSize: '12px' },
    axisTick: { show: false },
    splitLine: { show: false },
  },
  series: [
    {
      name: 'Cost',
      type: 'bar',
      barWidth: '100%',
      stack: 'Total',
      barCategoryGap: '1%',
      barGap: '1%',
      borderRadius: 18,
      borderColor: '#000',
      borderWidth: 1,
      borderType: 'solid',
      barMaxWidth: '90%',
      showBackground: true,
      backgroundStyle: {
        color: '#E9F5F1',
        borderRadius: 18,
      },
      label: {
        borderRadius: '12',
      },
      data: xlsvalus.map((value) => ({
        value: value,

        itemStyle: {
          color:
            value > 0
              ? new graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    { offset: 0, color: '#41E7B0' },
                    { offset: 1, color: '#5D5FEF' },
                  ],
                  false
                )
              : new graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    { offset: 0, color: '#EF5DA8' },
                    { offset: 1, color: '#5D5FEF' },
                  ],
                  false
                ),

          borderRadius: value > 0 ? [20, 20, 20, 20] : [20, 20, 20, 20],
          borderWidth: 0,
          borderColor: value > 0 ? '#41E7B0' : '#EF5DA8',
        },
      })),
    },
  ],
};
