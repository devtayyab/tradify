import { Box, makeStyles, Typography } from '@material-ui/core';

import { Contained as ContainedButton } from '../../components/Button';

import walk from '../../assets/images/home/walk.png';

const ActivityCard = ({ data, btnText, icon, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={classes.card}>
      <Box display="flex" flexDirection="column" height="100%">
        <Box display="flex" alignItems="center" justifyContent="center">
          <img src={walk} />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" color="#FFF">
          <Box className={classes.value}>
            <Typography variant="h5">{data.value}</Typography>
          </Box>
          {data.over && <Box className={classes.divider} />}
          <Box className={classes.label}>
            <Box>
              <Typography variant="subtitle1">{data.over}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">{data.unit}</Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flex={1} />
        <Box pt="1rem">
          <ContainedButton white rounded className={classes.button}>
            {btnText}
          </ContainedButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ActivityCard;

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '10px',
    borderRadius: '1rem',
    background: theme.palette.gradients.gradient_4,
    display: 'inline-block',
    margin: '0 3px',
  },
  value: {
    '& h5': {
      fontWeight: 'bold',
      color: '#FFF',
      letterSpacing: '-1px',
    },
  },
  divider: {
    width: '5px',
    height: '2.5rem',
    backgroundColor: '#FFF',
    transform: 'rotate(16deg)',
    margin: '0 3px 0 8px',
  },
  label: {
    padding: '6px',
    '& h6': {
      lineHeight: '1.2rem',
      fontWeight: 'bold',
      color: '#FFF',
    },

    '& div:last-child': {
      opacity: 0.5,
    },
  },
  button: {
    minWidth: 'unset',
  },
}));
