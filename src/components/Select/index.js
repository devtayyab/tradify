import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select as MuiSelect,
  Typography,
} from '@material-ui/core';

const Select = ({ id, labelId, value, placeholder, options, ...props }) => {
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      {/* {<InputLabel labelId={labelId || `${id}Label`}>{placeholder}</InputLabel>} */}
      <MuiSelect
        // labelId={labelId || `${id}Label`}
        id={id}
        value={value}
        displayEmpty
        {...props}
      >
        <MenuItem value="" disabled>
          <Typography variant="subtitle1">{placeholder}</Typography>
        </MenuItem>
        {options.map(({ label, value }) => (
          <MenuItem value={value}>{label}</MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: '3px',
    marginBottom: '5px',
    minWidth: '275px',
    width: '100%',
  },
}));
