import { Box, Typography } from '@material-ui/core';

import caution_img from '../../assets/images/server_error/caution.svg';
import refresh_icon from '../../assets/images/button/refresh.png';

import { Contained as ContainedButton } from '../../components/Button';

import useStyles from './styles';

const LeftContent = (props) => {
  const classes = useStyles();
  return (
    <Box padding="100px 70px">
      <Box display="flex" justifyContent="center">
        <Box className={classes.imageContainer}>
          <img src={caution_img} />
        </Box>
      </Box>
      <Box className={classes.desc1}>
        <Typography variant="h4">There was an error, please try again later</Typography>
      </Box>
      <Box className={classes.desc2}>
        <Typography>
          The server encountered an internal error and was not able to complete your request
        </Typography>
      </Box>
      <Box paddingTop="70px" display="flex" justifyContent="center">
        <ContainedButton>
          <img className={classes.refreshIcon} src={refresh_icon} />
          <Typography className={classes.refreshText} variant="body1" component="span">
            Refresh
          </Typography>
        </ContainedButton>
      </Box>
    </Box>
  );
};

export default LeftContent;
