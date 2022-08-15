import React, { useState } from "react";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import { TabGroups } from '../../components/Button';
import { Box, Card } from '@material-ui/core';
import Performance from '../../services/performance'
import { values } from './constant'
import useStyles from './styles.js';
import { green } from "@material-ui/core/colors";
import { timedata } from "./constant";
const graphic = echarts.graphic;
echarts.registerTheme("my_theme", {
    backgroundColor: "#f4cccc",
});
echarts.registerTheme("another_theme", {
    backgroundColor: "#eee",
});
export default function MarketInternals() {
    const className = 'MarketInternals';
    const theme = '';
    const [duration, setDuration] = useState('y');
    const [performances, setperformances] = useState([]);
    const [xLsCummonictaion, setxLsCummonictaion] = useState([]);
    const [cummunicationlabel, setcummunicationlabel] = useState([]);
    const [reds, setRed] = useState([]);
    const [greens, setGreen] = useState([]);
    const [tricker, setTricker] = useState([]);
    const [cummtype, setCummtype] = useState(tricker[0]);

    const classes = useStyles();

    const formatter = (value, type) => {
        if (type === 'red') {
            return value.map((item, index) => {
                return Math.abs(item?.attributes[type]) * -1
            })
        } else {
            return value.map((item, index) => {
                return item?.attributes[type]
            })
        }
    }
    React.useEffect(() => fetchdata('Real-Time'), []);
    const fetchdata = async (tab) => {
        const value = timedata[tab];
        console.log(value)
        setDuration(value);
        const result = await Performance.getPerformance('/stocks/etf/comparative-performance/', `?f=${value}&g=us_sectors,us_index`);
        const performance_index = formatter(result.data?.data, 'performance_index')
        setperformances(performance_index)
        const redvalue = formatter(result.data?.data, 'red')
        setRed(redvalue)
        const greenvalue = formatter(result.data?.data, 'green')
        greenvalue.length > 0 ? setGreen(greenvalue) : setGreen([])
        const trickervalue = formatter(result.data?.data, 'ticker')
        setTricker(trickervalue)
    }
    const Perfromanceoption = {
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
            data: tricker,
        },
        series: [
            {
                name: 'Index',
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
                data: performances.map((value) => ({
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
    const Breadthoption = {
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
            scale: true,
            axisLine: {
                lineStyle: { color: '#fff' },
                textStyle: { color: '#fff' },
            },
            axisLabel: { show: true },
            axisTick: { show: true },
            splitLine: { show: false },
            data: tricker,
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
                data: greens.map((value) => ({
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

    const Breadthoption1 = {
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
            data: tricker,
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
                data: reds.map((value) => ({
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
    const xLsCummonictaionoption = {
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
            data: cummunicationlabel,
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
                data: xLsCummonictaion.map((value) => ({
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

    const barClick = async (e) => {
        setCummtype(e.name);
        console.log(e);
        const result = await Performance.getPerformance('/stocks/holding/comparative-performance/', `?f=${duration}&e=${e.name}`);
        console.log(result);
        const stock_ticker = result?.data?.data?.map((value) => { return { value: value?.attributes?.performance_index, name: value?.attributes?.stock_ticker } });
        const sortingarray = stock_ticker.sort((a, b) => a?.value - b?.value)
        console.log(sortingarray);
        const finalarray = sortingarray.slice(0, 5)
        const finalarray1 = sortingarray.slice(-5)
        const finalarray2 = finalarray.concat(finalarray1)
        const finlalvalue = finalarray2.map((value) => value?.value);
        const finlalname = finalarray2.map((value) => value?.name);

        setxLsCummonictaion(finlalvalue);
        setcummunicationlabel(finlalname);
    }

    const onEvents = {
        'click': (e) => barClick(e),

    }
    console.log(performances, reds, greens)
    return (
        <div>
            <TabGroups
                buttons={['Real-Time', 'Week', 'Month', 'QTD', 'YTD', 'Year']}
                currentTab={'Real-Time'}
                onClick={(tab) => fetchdata(tab)}
            ></TabGroups>
            <div>
                <Box pt='1rem' display='flex' flexDirection='row' justifyContent='space-between'>
                    <Card style={{ width: '45%', height: '100%' }}>
                        <p className={classes.paragraph}>Performance</p>
                        <div className={classes.performance}>

                            <ReactECharts
                                option={Perfromanceoption}
                                style={{ height: "250px", width: "90%", marginBottom: "1rem" }}
                                className={className}
                                theme={theme}
                                onEvents={onEvents}
                            />
                            <div>
                                {values.map((data, index) => <p className={classes.index} color={data > 0 ? 'black' : 'red'}>{data}</p>)}
                            </div>
                        </div>
                        <p className={classes.paragraph}>Market Breadth</p>
                        <div className={classes.market}>
                            <ReactECharts
                                option={Breadthoption1}
                                style={{ height: "250px", width: "80%" }}
                                className={className}
                                theme={theme}
                            />
                            <ReactECharts
                                option={Breadthoption}
                                style={{ height: "250px", width: "80%", }}
                                className={className}
                                theme={theme}
                            />
                        </div>
                    </Card>
                    <Card style={{ width: '45%', height: '100%' }}>
                        <p className={classes.paragraph}>{cummtype} Communication</p>
                        <ReactECharts
                            option={xLsCummonictaionoption}
                            style={{ height: "300px", width: "100%" }}
                            className={className}
                            theme={theme}
                        />
                    </Card>

                </Box>
            </div>

        </div>
    );
}
