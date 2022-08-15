import { Box, Typography, makeStyles, Button } from '@material-ui/core';
import Modal from '../../components/Modal';

import email_check from '../../assets/images/signup/email_check.png';
import { Contained as ContainedButton, Outlined as OutlinedButton } from '../../components/Button';
import { Link } from 'react-router-dom';

const VerifyEmailModal = ({ open, handleClose, ...props }) => {
  const classes = useStyles();
  return (
    <Modal open={open} handleClose={handleClose}>
      <Box className={classes.container}>
        <Box display="flex" justifyContent="center">
          <img src={email_check} />
        </Box>
        <Box display="flex" justifyContent="center" paddingTop="1.5rem">
          <Typography variant="h5" className={classes.checkEmail}>
            Your email is not yet verified.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" paddingTop=".5rem" textAlign="center">
          <Typography variant="subtitle1">
            Check for the verification email we've sent to you to verify your account.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" paddingTop="3rem" textAlign="center">
          <Typography variant="subtitle1">
            {`Didn’t receive any email? Check your spam filter, or `}
            <Typography variant="link" component={Link} className={classes.tryOtherEmailLink}>
              resend
            </Typography>
            {` a new verification email `}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default VerifyEmailModal;

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
