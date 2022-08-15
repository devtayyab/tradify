import { makeStyles } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const Options = ({ choices = [], ...props }) => {
  const style = useStyles();

  const passOption = (option) => {
    const { onAnswerClick } = props;
    onAnswerClick(option);
  };

  const isChecked = (choice) => {
    const { answerList } = props;
    return answerList.find((item) => item.label === choice.label);
  };

  const isSelected = (choice) => {
    return isChecked(choice) ? style.isSelected : style.optionContainer;
  };

  return (
    <FormControl className={style.optionRoot} component="fieldset">
      <RadioGroup className={style.optionParent} name="radio-buttons-group">
        {choices.length
          ? choices.map((choice, index) => {
              return (
                <FormControlLabel
                  className={isSelected(choice)}
                  onClick={() => {
                    passOption(choice);
                  }}
                  key={`option-${props.id}-${choice.id}`}
                  value={choice.label}
                  control={
                    <Radio
                      checked={isChecked(choice)}
                      classes={{ root: style.radio, checked: style.checked }}
                    />
                  }
                  label={choice.label}
                />
              );
            })
          : ''}
      </RadioGroup>
    </FormControl>
  );
};

const useStyles = makeStyles((theme) => ({
  isSelected: {
    color: theme.palette.common.white,
    background: theme.palette.primary.mainGradient,
    padding: '0.5em 1em',
    borderRadius: '2em',
    width: '100%',
    marginBottom: '0.75em',
  },

  radio: {
    '&$checked': {
      color: `${theme.palette.common.white} !important`,
    },
  },
  checked: {
    color: 'red',
  },

  chartContainer: {
    display: 'flex',
  },

  optionRoot: {
    width: '100%',
  },

  optionParent: {
    maxWidth: '800px',
    minWidth: '600px',
    margin: '0 auto',
  },

  optionContainer: {
    padding: '0.5em 1em',
    backgroundColor: '#F0F0F0',
    borderRadius: '2em',
    marginBottom: '0.75em',
    width: '100%',
    color: theme.palette.common.black,
  },
}));

export default Options;
