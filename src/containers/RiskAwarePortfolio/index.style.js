import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    margin: 0,
  },
  title: {
    background: theme.palette.gradients.blue_linear,
    fontWeight: 'bold',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
  },
  listContainer: {
    [theme.breakpoints.up('sm')]: {
      padding: '30px 15px',

      '& > div': {
        margin: '15px',
      },
    },
  },

  cardContainer: {
    margin: '1em 0',
    padding: '1.5em',
    borderRadius: '1.5em',
    boxShadow: '0px 20px 30px rgba(167, 209, 233, 0.45)',
  },

  riskIndexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(138.19deg, #FFCA1B 2.08%, #F77455 50.52%, #FE8F1A 94.79%)',
    color: '#fff',
    borderRadius: '1em',
    boxShadow: '0px 20px 30px rgba(167, 209, 233, 0.45)',
    padding: '1em',
    width: '150px',
    margin: '1.5em auto',
  },

  riskNumber: {
    fontWeight: 'bold',
  },

  gainText: {},

  lossText: {
    background: 'linear-gradient(138.19deg, #F60638 2.08%, #F40469 50.52%, #F20094 94.79%)',
    fontWeight: 'bold',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
  },

  bottomArea: {
    borderTop: '1px solid #B9B9B9',
    padding: '1.5em',
  },
}));

export default useStyles;
