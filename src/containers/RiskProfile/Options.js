import Box from '@mui/material/Box';

import { ButtonContainer } from '../../components/Button';
import { makeStyles } from '@material-ui/core';

import Icon1 from '../../assets/images/icons/risk_profile/Cardio.svg';
import Icon2 from '../../assets/images/icons/risk_profile/Cycling.svg';
import Icon3 from '../../assets/images/icons/risk_profile/Meditation.svg';
import Icon4 from '../../assets/images/icons/risk_profile/Yoga.svg';

const iconList = [Icon1, Icon2, Icon3, Icon4];

const Options = ({ choices = [], ...props }) => {
  const styles = useStyles();

  function passOption(option) {
    const { onAnswerClick, id } = props;
    onAnswerClick({ ...option, id });
  }

  const isOptionSelected = (choice) => {
    const { answerList } = props;
    return answerList.find((item) => item.label === choice.label)
      ? styles.isSelected
      : styles.optionContainer;
  };

  return (
    <Box>
      {choices.map((choice, index) => (
        <ButtonContainer
          className={isOptionSelected(choice)}
          onClick={() => passOption(choice)}
          leftAlign
          fullWidth
        >
          <Box className={styles.optionIcon}>
            <img src={iconList[index]} alt="icon" />
          </Box>
          <span className={styles.optionText}> {choice.label}</span>
        </ButtonContainer>
      ))}
    </Box>
  );
};

export default Options;

const useStyles = makeStyles((theme) => ({
  optionContainer: {
    marginBottom: '1em',
    minWidth: '450px',
    maxWidth: '450px',
  },

  isSelected: {
    marginBottom: '1em',
    minWidth: '450px',
    maxWidth: '450px',
    background: '#d5d5d5',
  },

  optionIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.primary.mainGradient,
    borderRadius: '7px',
    width: '40px',
    height: '40px',
    padding: '0.5em',
  },

  optionText: {
    background: theme.palette.gradients.blue_linear,
    fontWeight: 'bold',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
    marginLeft: '1em',
    fontSize: '1.25em',
  },
}));
