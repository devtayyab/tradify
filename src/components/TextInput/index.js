import { Box, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import TextInput2 from './TextInput2';

import { INPUT_STATUS } from '../../constants/input';
import { INFO, SUCCESS, ERROR, WARNING } from '../../constants';

const TextInput = ({
  conditions = [],
  label,
  placeholder,
  className,
  size = 'small',
  variant = 'outlined',
  inputState = INFO,
  inputMode,
  fullWidth,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Box className={clsx({ [classes.fullWidth]: fullWidth })}>
      {label && (
        <Typography className={classes.label} variant="body2">
          {label}
        </Typography>
      )}
      <TextField
        variant={variant}
        size={size}
        placeholder={placeholder}
        className={clsx(classes.textInput, className)}
        classes={{
          root: clsx(classes.root, {
            [classes.info]: inputState === INFO,
            [classes.success]: inputState === SUCCESS,
            [classes.error]: inputState === ERROR,
            [classes.warning]: inputState === WARNING,
          }),
        }}
        inputMode={inputMode}
        {...props}
      />
      {conditions.map((c, i) => {
        if (typeof c === 'string') {
          return (
            <Typography
              key={`${c}${i}`}
              variant="caption"
              className={clsx(classes.condition, {
                [classes.conditionError]: inputState === ERROR,
                [classes.conditionSuccess]: inputState === SUCCESS,
                [classes.conditionWarning]: inputState === WARNING,
              })}
            >
              {c}
            </Typography>
          );
        }

        return (
          <Typography
            key={`${c.label}${i}`}
            variant="caption"
            className={clsx(classes.condition, {
              [classes.conditionValid]: c.isValid === INPUT_STATUS.VALID,
              [classes.conditionError]: c.error === INPUT_STATUS.INVALID,
              [classes.conditionError]: inputState === ERROR,
              [classes.conditionWarning]: inputState === WARNING,
            })}
            variant="body1"
          >
            {c.label}
          </Typography>
        );
      })}
    </Box>
  );
};

export default TextInput;
export { TextInput2 };

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-root': {
      fontSize: theme.typography.fontSize,
    },

    '& label.Mui-focused': {
      border: `solid 2px ${theme.palette.peter_river}`,
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: theme.palette.peter_river,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.peter_river,
        borderShadow: '0px 0px 0px 2px rgba(167, 209, 233, 0.45)',
      },
    },
  },
  error: {
    '& fieldset': {
      borderColor: theme.palette.error.main,
    },
  },
  success: {
    '& fieldset': {
      borderColor: theme.palette.success.main,
    },
  },
  warning: {
    '& fieldset': {
      borderColor: theme.palette.warning.main,
    },
  },
  textInput: {
    marginTop: '3px',
    marginBottom: '5px',
    minWidth: '275px',
    width: '100%',
  },
  label: {
    fontWeight: 500,
  },
  condition: {
    fontWeight: 500,
    color: theme.palette.grey.grey_3,
    opacity: 0.67,
    display: 'block',
  },
  conditionValid: {
    color: theme.palette.green_1,
  },
  conditionError: {
    color: theme.palette.error.main,
  },
  conditionSuccess: {
    color: theme.palette.success.main,
  },
  conditionWarning: {
    color: theme.palette.warning.main,
  },
  fullWidth: {
    width: '100%',
  },
}));
