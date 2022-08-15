import { Box, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { INPUT_STATUS } from '../../constants/input';
import { INFO, SUCCESS, ERROR, WARNING } from '../../constants';

const TextInput2 = ({
  containerProps,
  conditions = [],
  label,
  placeholder,
  className,
  size = 'small',
  variant = 'outlined',
  inputState = INFO,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Box width="100%" {...containerProps}>
      <TextField
        variant={variant}
        size={size}
        placeholder={placeholder}
        label={placeholder}
        className={clsx(classes.textInput, className)}
        classes={{
          root: clsx(classes.root, {
            [classes.info]: inputState === INFO,
            [classes.success]: inputState === SUCCESS,
            [classes.error]: inputState === ERROR,
            [classes.warning]: inputState === WARNING,
          }),
        }}
        InputLabelProps={{
          className: classes.rootLabel,
        }}
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

export default TextInput2;

const useStyles = makeStyles((theme) => ({
  root: {
    '& fieldset': {
      border: 'none',
      color: 'red',
      borderRadius: '16px',
      fontWeight: 'bold',
      color: theme.palette.peter_river,
    },

    '& .MuiInputBase-root': {
      fontSize: theme.typography.fontSize,
    },

    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'unset',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'transparent',
        borderColor: 'unset',
      },
    },
  },
  rootLabel: {
    '&.MuiInputLabel-root': {
      transform: 'translate(14px, 16px) scale(1)',
    },

    '&.MuiInputLabel-shrink': {
      fontWeight: 'bold',
      backgroundColor: '#2C81FF',
      border: 'solid white 2px',
      color: 'white',
      borderRadius: '16px',
      fontSize: '.875rem',
      padding: '5px 8px',
      transform: 'translate(14px, -6px) scale(0.75)',
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
    textAlign: 'center',
    width: 'inherit',
    borderRadius: '12px',
    backgroundColor: 'white',
    fontWeight: 'bold',

    '& .MuiInputBase-root': {
      color: theme.palette.peter_river,
    },

    '& input': {
      fontWeight: 'bold',
      padding: '1rem 1rem 1rem 1rem',
    },
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
}));
