import { Box, Typography } from '@material-ui/core';

import library from '../../../assets/images/macroeconomics/icon_library.png';

import LineChart from './LineChart';

import colors from '../../../styles/colors';

import useStyles from './styles';

const Item = (props) => {
  const randomPriceAdj = randomizeColor();
  const classes = useStyles({ color: randomPriceAdj[0] });

  function randomizeColor() {
    const r = Math.random() > 0.5;
    return [r ? colors.green_1 : colors.red1, r > 0.5 ? '+' : '-'];
  }

  return (
    <Box className={classes.item}>
      <Box>
        <img src={library} />
      </Box>
      <Box pl="1rem" display="flex">
        <Box>
          <Box>
            <Typography variant="body2" className={classes.name}>
              US Federal Budget Balance
            </Typography>
          </Box>
          <Box pt="2px">
            <Typography className={classes.desc}>11/17/21 M</Typography>
          </Box>
        </Box>
        <Box px=".5rem">
          <LineChart />
        </Box>
        <Box>
          <Box>
            <Typography variant="body2" className={classes.price}>
              ₹2,509.75
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.priceAdjustment}>
              {`${randomPriceAdj[1]}9.77%`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
