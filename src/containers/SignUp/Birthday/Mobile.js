import { Box, Button, Hidden, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Contained } from '../../../components/Button';

import { TextInput2 } from '../../../components/TextInput';

import useStyles from './styles';

const Mobile = (props) => {
  const classes = useStyles();
  return (
    <Hidden mdUp>
      <Box className="Birthday" className={classes.container}>
        <Box
          display="flex"
          height="150px"
          alignItems="center"
          justifyContent="center"
          color="white"
        >
          <Typography variant="h4">
            Your <strong>Birthday</strong>
          </Typography>
        </Box>
        <Box paddingTop="100px" display="flex" flexDirection="column" flex={1} color="white">
          <Typography variant="h6">When is your birthday?</Typography>
          <Box paddingTop="2rem" display="flex" flex={1}>
            <TextInput2 placeholder="Year" inpuType="tel" />
            <TextInput2 placeholder="Month" inpuType="tel" containerProps={{ marginX: '8px' }} />
            <TextInput2 placeholder="Day" inpuType="tel" />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          height="100px"
          alignItems="center"
          justifyContent="space-around"
          marginBottom="100px"
        >
          <Contained white>Next</Contained>
          <Button variant={Link}>Next</Button>
        </Box>
      </Box>
    </Hidden>
  );
};

export default Mobile;
