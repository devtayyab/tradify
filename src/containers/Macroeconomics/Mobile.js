import { Box, Grid, Typography } from '@material-ui/core';

import map from '../../assets/images/macroeconomics/map.png';
import chart_placeholder from '../../assets/images/macroeconomics/chart_placeholder.png';

import LocationStats from './LocationStats';
import RiskAppetite from './RiskAppetite';

import useStyles from './styles.js';
import TrendingStrategy from '../../components/TrendingStrategy';
import { ButtonGroup } from '../../components/Button';
import { RelativeIndex } from './RelativeIndex';
import List from './List';

const Mobile = ({ data, ...props }) => {
  const classes = useStyles();
  const locations = [
    {
      name: 'Europe',
      value: 2.04,
      rating: 60,
    },
    {
      name: 'Asia',
      value: 1.79,
      rating: 30,
    },
    {
      name: 'Africa',
      value: 0.65,
      rating: 40,
    },
    {
      name: 'Australia',
      value: 1.25,
      rating: 15,
    },
    {
      name: 'America',
      value: 3.23,
      rating: 45,
    },
  ];

  return (
    <Box className={classes.container}>
      <Box display="flex">
        <Typography className={classes.title} variant="h5">
          Global Macro
        </Typography>
        <Box>
          <ButtonGroup buttons={['Stock', 'BlockChain']} currentTab={'Stock'}></ButtonGroup>
        </Box>
      </Box>
      <Box pt="1.5rem">
        <Typography variant="subtitle1">
          Nunc sed id semper risus. Nullam ac tortor vitae purus faucibus ornare suspendise sed.
          Proin nibh nisl condimentum id venenatis a condimentum vitae. Pulvinar libero volutpat.
        </Typography>
      </Box>
      <Box pt="2.5rem" alignItems="center" justifyContent="center" display="flex">
        <img src={map} />
      </Box>
      <Box pt="2.5rem">
        <Grid container>
          <Grid item xs={6}>
            <Box>
              {locations.map((data) => (
                <LocationStats data={data} />
              ))}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box width="100%" height="100%" display="flex" justifyContent="center">
              <RiskAppetite />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box pt="5rem" display="flex" flexDirection="column" justifyContent="center">
        <img src={chart_placeholder} />
      </Box>
      <Box pt="5rem" display="flex" flexDirection="column" alignItems="center">
        <TrendingStrategy />
      </Box>
      <Box pt="5rem">
        {data.map((item) => (
          <RelativeIndex data={item} />
        ))}
      </Box>
      <Box pt="5rem" display="flex" flexDirection="column" alignItems="center">
        <List title="Employment & Prices" />
      </Box>
      <Box pt="5rem" display="flex" flexDirection="column" alignItems="center">
        <List title="Consumer Confidence" />
      </Box>
    </Box>
  );
};

export default Mobile;
