import { Box, Typography, makeStyles } from '@material-ui/core';
import Modal from '../../components/Modal';

import warning_icon from '../../assets/images/risk_tolerance/modal_icon.svg';

import { Contained as ContainedButton, Outlined as OutlinedButton } from '../../components/Button';
import { Link } from 'react-router-dom';

const QuizModal = ({ open, handleClose, ...props }) => {
  const classes = useStyles();
  return (
    <Modal open={open} handleClose={handleClose}>
      <Box className={classes.container}>
        <Box display="flex" justifyContent="center">
          <img src={warning_icon} />
        </Box>
        <Box display="flex" justifyContent="center" paddingTop="1.5rem">
          <Typography variant="h5" className={classes.checkEmail}>
            Do you Want To Improve Your Personal Finances?
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" paddingTop="1rem">
          <Typography variant="subtitle1">
            Start by taking this quiz to get an idea of your investment risk tolerance – one of the
            fundamental issues to consider when planning your investment strategy, either alone or
            in consultation with a financial services professional.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" paddingTop="1rem">
          <Typography variant="subtitle1" className={classes.textBlack}>
            Choose the response that best describes you – there are no “right” or “wrong” answers.
            Just have fun! <br />
            When you're done, check the scoring grid to interpret your quiz score.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" paddingTop="1rem">
          <Typography variant="subtitle1">
            Note: By taking this quiz you will be contributing to a study on measuring financial
            risk tolerance. Your results will be recorded anonymously. We are not collecting any
            identifying information.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" paddingTop="1.5rem">
          <OutlinedButton onClick={handleClose} rounded>
            Cancel
          </OutlinedButton>
          <ContainedButton onClick={handleClose} rounded>
            Proceed
          </ContainedButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default QuizModal;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '2rem 5rem',
    maxWidth: '650px',

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

  textBlack: {
    color: theme.palette.common.black,
  },
}));
