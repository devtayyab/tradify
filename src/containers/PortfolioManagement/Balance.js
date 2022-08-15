import { Box, makeStyles, Typography } from '@material-ui/core';
import ProgressLinear from '../../components/ProgressLinear';

const Balance = ({ title, value, currency, limit, color, ...props }) => {
  const styles = useStyles();
  const progress = (value / limit) * 100;

  return (
    <Box maxWidth="150px" width="100%">
      <Box>
        <Typography className={styles.title} variant="body2">
          {title}
        </Typography>
      </Box>
      <Box paddingTop=".75rem">
        <Typography className={styles.value} component="span">
          <Typography component="span">{currency}</Typography>
          {value}
        </Typography>
      </Box>
      <Box paddingTop=".75rem">
        <ProgressLinear value={progress} color={color} />
      </Box>
    </Box>
  );
};

export default Balance;

const useStyles = makeStyles((theme) => ({
  value: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  title: {
    fontWeight: 'bold',
  },
}));
