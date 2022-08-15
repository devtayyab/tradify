import { CircularProgress, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

export default function ProgressCircular({ size, thickness, loadingText, ...props }) {
  const style = useStyles();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress size={100} thickness={6} />
      <Typography variant="h4" className={style.contentBlue}>
        {loadingText}
      </Typography>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  contentBlue: {
    background: theme.palette.gradients.blue_linear,
    fontWeight: 'bold',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
    margin: '1em 0',
    textAlign: 'center',
  },
}));
