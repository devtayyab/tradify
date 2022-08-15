import { Box, makeStyles } from '@material-ui/core';
const Dots = (props) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      paddingX="20px"
      alignItems="center"
      justifyContent="center"
    >
      <Box className={classes.dot} marginBottom="15px" />
      <Box className={classes.dot} marginBottom="15px" />
    </Box>
  );
};

export default Dots;

const useStyles = makeStyles((theme) => ({
  dot: {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    backgroundColor: 'black',
  },
}));
