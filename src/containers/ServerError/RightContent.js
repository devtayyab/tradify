import { Box, Typography } from '@material-ui/core';

import { Contained as ContainedButton } from '../../components/Button';

import useStyles from './styles';

const RightContent = (props) => {
  const classes = useStyles();
  return (
    <Box padding="100px 70px">
      <Box className={classes.rightDesc1}>
        <Typography variant="h3">Traidify UI Template</Typography>
      </Box>
      <Box className={classes.rightDesc2} paddingTop="60px">
        <Typography>{`High performance template built with lots of powerful Material-UI components across multiple product niches for fast & perfect apps development processes.`}</Typography>
      </Box>
      <Box paddingTop="50px" display="flex" justifyContent="center">
        <ContainedButton white>
          <Typography className={classes.refreshText} variant="body1" component="span">
            Buy Template
          </Typography>
        </ContainedButton>
      </Box>
    </Box>
  );
};

export default RightContent;
