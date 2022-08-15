import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import sample_profile from '../assets/images/header/sample_profile.png';

const UserAvatar = ({ isActive, ...props }) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.container, { [classes.active]: isActive })}>
      <img src={sample_profile} />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    position: 'relative',

    '& img': {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
    },
  },
  active: {
    '&:after': {
      content: "''",
      position: 'absolute',
      width: '10px',
      height: '10px',
      top: 0,
      left: '5px',
      borderRadius: '50%',
      backgroundColor: theme.palette.green_1,
    },
  },
}));

export default UserAvatar;
