import { Box, Typography } from '@material-ui/core';
import Chart1 from '../../components/Charts/Chart1';
import TextInput from '../../components/TextInput';
import UserList from '../../components/UserList';
import WeeklyAvgCard from '../../components/WeeklyAvgCard';
import StockSummary from '../../components/StockSummary';
import TrendingStrategy from '../../components/TrendingStrategy';
import { HighChart } from '../../components/Charts';
import MarketInternals from './MarketInternals';
import chart_placeholder from '../../assets/images/macroeconomics/chart_placeholder.png';
import useStyles from './styles.js';
import { ButtonGroup, TabGroups } from '../../components/Button';
import { MeterGauge } from './MeterGauge';
import LineChart from './LineChart';

const Mobile = (props) => {
  const classes = useStyles();

  const valueToPercent = (val, total) => (100 / total) * val;

  return (
    <Box pb="2rem">
      <Box>
        <Typography className={classes.title} variant="h5">
          Technical Analysis
        </Typography>
      </Box>
      <Box pt="1rem" display="flex" justifyContent="center">
        <TextInput placeholder="What is your ticker?" fullWidth />
      </Box>
      <Box pt="1rem">
        <ButtonGroup
          buttons={['Intraday', 'Daily', 'Longer term']}
          currentTab={'Intraday'}
        ></ButtonGroup>
      </Box>
      <Box overflow="scroll" display="flex" className={classes.MeterGaugeContainer}>
        <MeterGauge
          sentiment={0.5}
          percentage={25}
          value={`${25}%`}
          adjust_label
          flow="Direction"
          label={['Falling', 'Rising']}
          desc="upward"
          ticks_colors={[
            '#ED37D6',
            // '#C732EC',
            // '#10B8FD',
            // '#41E7B0'
          ]}
        />
        <MeterGauge
          sentiment={0.5}
          percentage={50}
          value={`${50}%`}
          flow="Momentum"
          label={['0%', '100%']}
          desc="based on likes"
          ticks_colors={[
            '#ED37D6',
            '#C732EC',
            '#10B8FD',
            // '#41E7B0',
          ]}
        />
      </Box>
      <Box pt="3rem" display="flex" justifyContent="space-between">
        <Box>
          <LineChart name="hourly" trend="positive" />
        </Box>
        <Box>
          <LineChart name="daily" trend="negative" />
        </Box>
        <Box>
          <LineChart name="weekly" trend="negative" />
        </Box>
      </Box>
      <Box pt="3rem" display="flex" justifyContent="center">
        <WeeklyAvgCard
          title="Sector Rank"
          values={[
            {
              rating: 20,
            },
            {
              rating: 20,
            },
            {
              rating: 70,
            },
            {
              rating: 40,
            },
            {
              rating: 100,
            },
            {
              rating: 15,
            },
            {
              rating: 100,
            },
          ]}
        />
      </Box>
      <Box pt="1rem" display="flex" justifyContent="center">
        <UserList />
      </Box>
      <Box pt="1rem" display="flex" justifyContent="center">
        <WeeklyAvgCard
          title="Stock Rank in Sector"
          values={[
            {
              rating: 20,
            },
            {
              rating: 20,
            },
            {
              rating: 70,
            },
            {
              rating: 40,
            },
            {
              rating: 100,
            },
            {
              rating: 15,
            },
            {
              rating: 100,
            },
          ]}
        />
      </Box>
      <Box pt="1rem" display="flex" justifyContent="center">
        <UserList />
      </Box>
      <Box pt="1rem" display="flex" justifyContent="center">
        <Box flex="1">
          <Chart1 title="Trending Higher" upTrend />
        </Box>
        <Box flex="1">
          <Chart1 title="Trending Downward" />
        </Box>
        <Box flex="1">
          <Chart1 title="Consolidation" upTrend />
        </Box>
      </Box>
      <Box pt="1rem" display="flex" justifyContent="center">
        <StockSummary />
      </Box>
      <Box pt="1rem" display="flex" justifyContent="center">
        <img src={chart_placeholder} />
      </Box>
      <Box pt="1rem" display="flex" justifyContent="center">
        <TrendingStrategy card />
      </Box>
      <Box pt="1rem">
        <Typography className={classes.title} variant="h6">
          Market Internals
        </Typography>
        <MarketInternals />
      </Box>

      <Box mt="2rem" display="flex" justifyContent="center">
        <HighChart width="100%" config={props.pivotConfig} />
      </Box>

      <Box mt="2rem" display="flex" justifyContent="center">
        <HighChart config={props.allTechnicalConfig} />
      </Box>

      <Box mt="2rem" display="flex" justifyContent="center">
        <HighChart config={props.volumeConfig} />
      </Box>
    </Box>
  );
};

export default Mobile;
