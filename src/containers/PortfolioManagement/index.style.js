import { makeStyles } from '@material-ui/core/styles';
import bg from '../../assets/images/portfolio_management/bg.png';
const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    margin: 0,
  },

  content: {
    background: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    paddingTop: '50px',
    marginTop: '3rem',
    borderRadius: '6px',
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    color: theme.text[4],
    fontWeight: 'bold',
  },
  searchBarWrapper: {
    padding: '5px 0',
  },
  rightContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-end',

    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
    },
  },
  content2: {
    padding: '25px 55px',
    backgroundColor: theme.palette.common.white,
    borderRadius: '18px 18px 6px 6px',
    boxShadow: '0px 20px 30px rgba(167, 209, 233, 0.45)',

    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
}));

export default useStyles;
