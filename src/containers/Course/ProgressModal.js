import { Box, Typography, makeStyles } from '@material-ui/core';
import Modal from '../../components/Modal';
import warning_icon from '../../assets/images/risk_tolerance/unfinished-icon.png';
import { Contained as ContainedButton, Outlined as OutlinedButton } from '../../components/Button';
import ProgressLinear from '../../components/ProgressLinear';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { toggleProgressModal } from '../../redux/actions/training.action';

const QuizModal = ({ open, handleClose, ...props }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const closeModal = () => {
    dispatch(toggleProgressModal(false));
  };

  return (
    <Modal open={open} handleClose={closeModal}>
      <Box className={classes.container}>
        <Box display="flex" justifyContent="center">
          <img src={warning_icon} alt="warning-icon" />
        </Box>
        <Box display="flex" justifyContent="center" paddingTop="1.5rem">
          <Typography variant="h5" className={classes.checkEmail}>
            Here's your current progress, you're almost there!
          </Typography>
        </Box>

        <ProgressLinear height={20} value={50} />

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          paddingTop="1.5rem"
        >
          <ContainedButton onClick={closeModal} rounded>
            OKAY
          </ContainedButton>
        </Box>
        <Box display="flex" justifyContent="center" paddingTop="1rem" textAlign="center">
          <Typography variant="subtitle1">
            There's a lot to learn in terms of Investment. It is best to enter the field of
            Invesment with knowdlege. Therefore, be sure to finish the training Videos!
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
    maxWidth: '550px',

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
