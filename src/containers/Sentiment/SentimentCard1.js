import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Skeleton from '@material-ui/lab/Skeleton';

import colors from '../../styles/colors';

import Rating from './Rating1';

import arrow_blue from '../../assets/images/icons/left_arrow_blue.svg';
import ProgressLinear from '../../components/ProgressLinear';
import { MeterGauge } from './MeterGauge';

const SentimentCard = ({
  loading,
  subjectivity,
  sentiment,
  percentage,
  title,
  desc,
  icon,
  decimelToPercent,
  ...props
}) => {
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
      <CardContent className={classes.content}>
        <Box className={classes.cardHeader}>
          <Typography variant="h5">{title.charAt(0).toUpperCase() + title.slice(1)}</Typography>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </Box>
        <Box display="flex" flexDirection="column" pt="1rem" px="1rem">
          <MeterGauge percentage={decimelToPercent(props.compound)} sentiment="positive" />
          <Box display="flex" flex="1" alignItems="center">
            <Box flex="2">
              <Typography variant="body2">Sentiment</Typography>
            </Box>
            <Box flex="1">
              <Typography variant="body2">{decimelToPercent(props.polarity)}%</Typography>
            </Box>
            <Box flex="2">
              <ProgressLinear color={colors.gradients.blue_linear} value={82} />
            </Box>
          </Box>
        </Box>
        <Box display="flex" pt="10px" px="1rem">
          <Box display="flex" flex="1" alignItems="center">
            <Box flex="2">
              <Typography variant="body2">Subjectivity</Typography>
            </Box>
            <Box flex="1">
              <Typography variant="body2">{decimelToPercent(subjectivity)}</Typography>
            </Box>
            <Box flex="2">
              <ProgressLinear color={colors.gradients.cpanel_green} value={82} />
            </Box>
          </Box>
        </Box>
      </CardContent>
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
    minWidth: '340px',
    width: '100%',

    '& > div:first-child': {
      padding: '1rem',
      paddingTop: '.5rem',
    },
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '1rem',

    '& h5': {
      display: 'flex',
      alignItems: 'center',
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
    justifyContent: 'center',
    padding: '10px 16px',
    background: theme.palette.gradients.main_linear_1,
  },
  totalScore: {
    color: '#FFF',

    '& h5': {
      fontWeight: 'bold',
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
