import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 1rem',
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '.5rem 0',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '0.875rem',
  },
  desc: {
    color: theme.palette.gray1,
    fontSize: '0.675rem',
  },
  price: {
    fontSize: '0.875rem',
  },
  priceAdjustment: ({ color }) => ({
    color,
    fontSize: '0.875rem',
  }),
}));

export default useStyles;
