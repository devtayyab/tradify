import React from 'react';

import styles from './Trade.module.sass';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

import icon1 from '../../assets/images/content/bitcoin.svg';
import icon2 from '../../assets/images/content/ethereum.svg';
import icon3 from '../../assets/images/content/eos.svg';
import { CardContent, Card, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

const items = [
  {
    title: 'Stock 002',
    unit: '10.589',
    price: '$36,201.34',
    positiveDay: '+6.04%',
    negativeWeek: '-1.71%',
    image: icon1,
    marketcap: '$328,564,656,654',
    volume: '$328,564,656,654',
  },
  {
    title: 'Stock 003',
    unit: '10.589',
    price: '$2,605.95',
    positiveDay: '+6.04%',
    positiveWeek: '+0.05%',
    image: icon2,
    marketcap: '$328,564,656,654',
    volume: '$328,564,656,654',
  },

  {
    title: 'Stock 004',
    unit: '10.589',
    price: '$1.00',
    positiveDay: '+6.04%',
    negativeWeek: '-1.71%',
    image: icon3,
    marketcap: '$328,564,656,654',
    volume: '$328,564,656,654',
  },
];

const data = [
  {
    name: '1',
    price: 1000,
  },
  {
    name: '2',
    price: 2300,
  },
  {
    name: '3',
    price: 2000,
  },
  {
    name: '4',
    price: 2780,
  },
  {
    name: '5',
    price: 1890,
  },
  {
    name: '6',
    price: 2390,
  },
  {
    name: '7',
    price: 2490,
  },
];

const Trade = () => {
  const style = useStyles();
  return (
    <div className={styles.trade}>
      <div className={styles.table}>
        {items.map((x, index) => (
          <Card className={style.tradeContainer} key={index}>
            <CardContent>
              <Grid container>
                <Grid className={styles.col}>
                  <div className={styles.item}>
                    <div className={styles.icon}>
                      <img src={x.image} alt="Coin" />
                    </div>
                    <div className={style.details}>
                      <span className={styles.subtitle}>{x.title}</span>
                      <span className={styles.currency}>Value = {x.unit}</span>
                    </div>
                  </div>
                </Grid>
                <Grid className={styles.col}>{x.price}</Grid>
                <Grid className={styles.col}>
                  <div className={styles.chart}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                          top: 3,
                          right: 0,
                          left: 0,
                          bottom: 3,
                        }}
                      >
                        <defs>
                          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#45B36B" stopOpacity={0.6} />
                            <stop offset="95%" stopColor="#45B36B" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <Area
                          type="monotone"
                          dataKey="price"
                          stroke="#58BD7D"
                          fillOpacity={1}
                          fill="url(#colorPrice)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </Grid>
                <Grid className={styles.col}>
                  {x.positiveDay && <div className={styles.positive}>{x.positiveDay}</div>}
                  {x.negativeDay && <div className={styles.negative}>{x.negativeDay}</div>}
                </Grid>
                <Grid className={styles.col}>
                  {x.positiveWeek && <div className={styles.positive}>{x.positiveWeek}</div>}
                  {x.negativeWeek && <div className={styles.negative}>{x.negativeWeek}</div>}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  details: {
    display: 'flex',
    flexDirection: 'column',
  },

  tradeContainer: {
    marginBottom: '1em',
    borderRadius: '1.5em',
    boxShadow: '0px 20px 30px rgba(167, 209, 233, 0.45)',
  },
}));

export default Trade;
