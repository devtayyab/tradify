import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    background: theme.palette.primary.mainGradient,
    fontWeight: 'bold',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
  },
  MeterGaugeContainer: {
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  paragraph: {
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '-50px',
  },
  market: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: '20px',
  },
  performance: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  index: {
    fontSize: '11px',
    lineHeight: '0.7',
  },
}));

export default useStyles;
