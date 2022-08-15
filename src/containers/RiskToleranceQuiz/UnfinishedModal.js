import { Box, Typography, makeStyles } from '@material-ui/core';
import Modal from '../../components/Modal';
import warning_icon from '../../assets/images/risk_tolerance/unfinished-icon.png';
import { Contained as ContainedButton, Outlined as OutlinedButton } from '../../components/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { toggleUnfinishedModal } from '../../redux/actions/quiz.action';

const QuizModal = ({ open, handleClose, ...props }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const redirectToQuiz = () => {
    history.push('/app/risk-tolerance-quiz');
    setTimeout(() => {
      closeModal();
    }, 1000);
  };

  const closeModal = () => {
    dispatch(toggleUnfinishedModal(false));
  };

  return (
    <Modal open={open} handleClose={closeModal}>
      <Box className={classes.container}>
        <Box display="flex" justifyContent="center">
          <img src={warning_icon} alt="warning-icon" />
        </Box>
        <Box display="flex" justifyContent="center" paddingTop="1.5rem">
          <Typography variant="h5" className={classes.checkEmail}>
            It appears that you have not yet completed the quiz. Do you want to do it right now?
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          paddingTop="1.5rem"
        >
          <ContainedButton onClick={redirectToQuiz} rounded>
            Take the Quiz
          </ContainedButton>
          <OutlinedButton onClick={closeModal} rounded>
            Cancel
          </OutlinedButton>
        </Box>
        <Box display="flex" justifyContent="center" paddingTop="1rem" textAlign="center">
          <Typography variant="subtitle1">
            You must finish first answering the Risk Tolerance Quiz to be able to give an assessment
            to your Risk Appetite in terms of investing in the Stock Market or BlockChain.
          </Typography>
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
    textAlign: 'center',
  },
  tryOtherEmailLink: {
    color: theme.palette.peter_river,
  },

  textBlack: {
    color: theme.palette.common.black,
  },
}));
