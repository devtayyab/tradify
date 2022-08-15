import {
  Box,
  Button,
  Card,
  CardContent,
  Hidden,
  IconButton,
  makeStyles,
  Typography,
  useTheme,
} from '@material-ui/core';

import clsx from 'clsx';

import arrow_right from '../../assets/images/portfolio_management/arrow_right.png';
import arrow_right_white from '../../assets/images/portfolio_management/arrow_right_white.png';
import { Link } from 'react-router-dom';
import { THEME_DARK_MODE, THEME_LIGHT_MODE } from '../../constants';
import { useSelector } from 'react-redux';

const CardItem = ({ className, noMargin, title, desc, image, ...props }) => {
  const classes = useStyles();
  const theme = useSelector((store) => store.app.get('theme'));
  const isDarkTheme = theme === THEME_DARK_MODE;

  return (
    <Card className={clsx(classes.card, className, { [classes.noMargin]: noMargin })} {...props}>
      <CardContent>
        <Hidden smUp>
          <Box className={classes.title}>
            <Typography variant="h5">{title}</Typography>
          </Box>
        </Hidden>
        <Box display="flex">
          <Box display="flex" flexDirection="column" paddingX="10px" flex={1}>
            <Hidden smDown>
              <Box className={clsx(classes.title, { [classes.darkTitle]: isDarkTheme })}>
                <Typography variant="h5">{title}</Typography>
              </Box>
            </Hidden>
            <Box className={classes.desc}>
              <Typography variant="body2">{desc}</Typography>
            </Box>
            <Box className={classes.arrow}>
              <Button component={Link}>
                <img src={isDarkTheme ? arrow_right_white : arrow_right} />
              </Button>
            </Box>
          </Box>
          <Box className={classes.cardImg}>
            <img src={image} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardItem;

const useStyles = makeStyles((theme) => ({
  card: {
    background: theme.palette.card.base,
    boxShadow: '0px 20px 30px rgba(167, 209, 233, 0.45)',
    borderRadius: '12px',
    margin: '25px',

    [theme.breakpoints.down('sm')]: {
      margin: '10px',
      minWidth: '320px',
      maxWidth: '450px',
    },
  },
  noMargin: {
    margin: 0,
  },
  title: {
    '& h5': {
      background: theme.palette.gradients.blue_linear,
      fontWeight: 'bold',
      '-webkitBackgroundClip': 'text',
      '-webkitTextFillColor': 'transparent',
      color: theme.palette.common.white,
    },
  },
  darkTitle: {
    '& h5': {
      '-webkitTextFillColor': 'unset',
    },
  },
  desc: {
    paddingTop: '1rem',
    color: theme.palette.card.desc,
  },
  arrow: {
    paddingTop: '.75rem',

    '& a': {
      marginLeft: '-8px',
    },
  },
  cardImg: {
    display: 'flex',
    padding: '0 10px',
    justifyContent: 'center',
    alignItems: 'center',

    '& img': {
      maxWidth: '150px',
      maxHeight: '160px',
    },

    [theme.breakpoints.only('xs')]: {
      padding: 0,
      maxWidth: '30%',

      '& img': {
        width: '100%',
        maxWidth: '150px',
        maxHeight: '160px',
      },
    },
  },
}));
