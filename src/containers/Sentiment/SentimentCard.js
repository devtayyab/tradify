import { Box, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import colors from '../../styles/colors';

import Rating from './Rating';

import arrow_blue from '../../assets/images/icons/left_arrow_blue.svg';

const SentimentCard = ({ loading, title, desc, icon, ...props }) => {
  const classes = useStyles();

  if (!!loading) {
    return (
      <Card className={[classes.card, classes.cardPlaceholder]}>
        <CardContent>
          <Skeleton className={classes.titlePlaceholder} />
          <Skeleton className={classes.contentPlaceholder} />
        </CardContent>
        <CardActions className={classes.actionsPlaceholderContainer}>
          <Skeleton className={classes.actionsPlaceholder} />
        </CardActions>
      </Card>
    );
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box className={classes.cardHeader}>
          <Typography variant="h5">{title}</Typography>
          <img src={arrow_blue} />
        </Box>
        <Box display="flex" pt="10px">
          <Box display="flex" flex="1">
            <Typography>{desc}</Typography>
          </Box>
          <Box display="flex" paddingX="15px" alignItems="center">
            <img className={classes.cardImage} src={icon} />
          </Box>
        </Box>
      </CardContent>
      <CardActions className={classes.actions}>
        <Rating card color={colors.green_1} label="Subjectivity" value={40} />
        <Rating card color={colors.green_1} label="Sentiment" value={70} />
        <Box className={classes.totalScore}>
          <Typography>Total Score</Typography>
          <Typography component="span">
            <Typography component="span">6.8</Typography>
            <Typography component="span">{` out of `}</Typography>
            <Typography component="span">10</Typography>
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default SentimentCard;

const useStyles = makeStyles((theme) => ({
  card: {
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
    boxShadow: '0px 20px 30px rgba(167, 209, 233, 0.45)',
    borderRadius: '12px',
    maxWidth: '340px',
    width: '100%',

    '& > div:first-child': {
      padding: '1rem 2rem',
    },
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',

    '& h5': {
      background: theme.palette.gradients.blue_linear,
      fontWeight: 'bold',
      '-webkitBackgroundClip': 'text',
      '-webkitTextFillColor': 'transparent',
    },
  },
  cardImage: {
    width: '90px',
    height: '90px',
    objectFit: 'contain',
  },
  actions: {
    padding: '10px 16px',
    background: theme.palette.gradients.main_linear_1,
  },
  totalScore: {
    paddingLeft: '1rem',
    color: '#FFF',

    '& p:first-child': {
      fontSize: '.875rem',
    },

    '& span': {
      fontSize: '.875rem',
      fontWeight: 'bold',

      '&:first-child': {
        fontSize: '1.25rem',
        color: '#FE8F1A',
      },

      '&:last-child': {
        fontSize: '1.25rem',
      },
    },
  },
  cardPlaceholder: {
    minWidth: '284px',
    [theme.breakpoints.up('sm')]: {
      minWidth: '328px',
      display: 'flex',
      flexDirection: 'column',

      '& > div:first-child': {
        flex: 1,
      },
    },
  },
  titlePlaceholder: {
    width: '75%',
    height: '2rem',
    transform: 'none',
  },
  contentPlaceholder: {
    height: '12rem',
    marginTop: '2rem',
    transform: 'none',
  },
  actionsPlaceholderContainer: {
    padding: 0,
  },
  actionsPlaceholder: {
    width: '100%',
    height: '64px',
    transform: 'none',
    borderRadius: 0,
  },
}));
