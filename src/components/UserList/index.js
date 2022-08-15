import { Box, makeStyles, Typography } from '@material-ui/core';
import UserAvatar from '../UserAvatar';
import { Fab } from '../Button';

import scan_white from '../../assets/images/icons/scan_white.png';

const UserList = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box display="flex" flex="1">
        <Box>
          <UserAvatar isActive />
        </Box>
        <Box marginLeft="-25px">
          <UserAvatar />
        </Box>
        <Box marginLeft="-25px">
          <UserAvatar />
        </Box>
        <Box marginLeft="-25px">
          <UserAvatar />
        </Box>
        <Box marginLeft="-25px">
          <UserAvatar />
        </Box>
        <Box marginLeft="-25px" position="relative">
          <UserAvatar />
          <Box className={classes.more}>
            <Typography>+8</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Fab className={classes.scan} primary>
          <img src={scan_white} />
        </Fab>
      </Box>
    </Box>
  );
};

export default UserList;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100%',
    maxWidth: '350px',
    padding: '1rem',
    borderRadius: '16px',
    backgroundColor: '#3C3F69',
  },
  more: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: '#3c3f698a',
    color: '#FFF',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& p': {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
  },
  scan: {
    width: '50px',
    height: '50px',
  },
}));
