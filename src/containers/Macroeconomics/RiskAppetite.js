import { Box, Typography, makeStyles } from '@material-ui/core';

import { ContainedButton } from '../../components/Button';

import meter from '../../assets/images/macroeconomics/meter.png';
import ellipse1 from '../../assets/images/macroeconomics/ellipse1.png';
import ellipse2 from '../../assets/images/macroeconomics/ellipse2.png';

const RiskAppetite = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box>
        <Typography variant="body1" className={classes.title}>
          Risk Appetite
        </Typography>
      </Box>
      <Box display="flex" flex="1" justifyContent="center" alignItems="center">
        <Box className={classes.meterContainer}>
          <img src={ellipse1} width="100%" height="100%" />
          <img src={meter} />
          <img src={ellipse2} width="100%" height="100%" />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <ContainedButton small rounded className={classes.riskOnButton}>
          Risk On
        </ContainedButton>
      </Box>
    </Box>
  );
};

export default RiskAppetite;

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: '1rem',
    maxHeight: '130px',
    maxWidth: '130px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: '10px',
    position: 'relative',
    overflow: 'hidden',
    filter: 'drop-shadow(0px 20px 30px rgba(167, 209, 233, 0.45))',

    '&::before': {
      content: "''",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      filter: 'blur(50px)',
      position: 'absolute',
      background: 'linear-gradient(to bottom, #FFF 30%, #2297F3 90%)',
      opacity: 0.5,
    },
  },

  title: {
    background: theme.palette.gradients.blue_linear,
    fontWeight: 'bold',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
  },
  meterContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    width: '50px',

    '& img': {
      position: 'absolute',

      '&:first-child': {
        height: '45px',
        width: '43px',
        zIndex: '1',
      },

      '&:last-child': {
        width: '47px',
        height: '44px',
        opacity: '0.3',
      },
    },
  },
  riskOnButton: {
    minWidth: '100px',
    padding: '8px 16px',
  },
}));
