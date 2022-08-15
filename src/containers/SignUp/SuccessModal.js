import { Box, Typography, makeStyles } from '@material-ui/core';
import Modal from '../../components/Modal';

import email_check from '../../assets/images/signup/email_check.png';
import { Contained as ContainedButton, Outlined as OutlinedButton } from '../../components/Button';
import { Link } from 'react-router-dom';

const SuccessModal = ({ open, handleClose, ...props }) => {
  const classes = useStyles();
  return (
    <Modal open={open} handleClose={handleClose}>
      <Box className={classes.container}>
        <Box display="flex" justifyContent="center">
          <img src={email_check} />
        </Box>
        <Box display="flex" justifyContent="center" paddingTop="1.5rem">
          <Typography variant="h5" className={classes.checkEmail}>
            Check your mail
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" paddingTop=".5rem" textAlign="center">
          <Typography variant="subtitle1">
            We have sent an email too verify your account.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" paddingTop="1.5rem">
          <ContainedButton rounded>Open email app</ContainedButton>
        </Box>
        <Box display="flex" justifyContent="center" paddingTop="1rem">
          <OutlinedButton rounded>Skip, I’ll confirm later</OutlinedButton>
        </Box>
        <Box display="flex" justifyContent="center" paddingTop="3rem" textAlign="center">
          <Typography variant="subtitle1">
            Didn’t receive any email? Check your spam filter, or{' '}
            <Typography component={Link} className={classes.tryOtherEmailLink}>
              try another email address
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default SuccessModal;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '2rem 5rem',

    [theme.breakpoints.down('sm')]: {
      padding: '2rem 2rem',
    },
  },
  checkEmail: {
    background: theme.palette.gradients.blue_linear,
    fontWeight: 'bold',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
  },
  tryOtherEmailLink: {
    color: theme.palette.peter_river,
  },
}));
