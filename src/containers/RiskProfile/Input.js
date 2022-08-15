import { InputBase } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

const Input = (props) => {
  const classes = useStyles();
  const { subTitle } = props;
  return (
    <div className={classes.inputContainer}>
      <span className={classes.inputTitle}>{subTitle}</span>
      <InputBase
        placeholder="Search e.g. card"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  );
};

export default Input;

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    position: 'relative',
  },
  inputRoot: {
    backgroundColor: 'white',
    padding: '1em',
    borderRadius: '12px',
  },

  inputTitle: {
    position: 'absolute',
    top: '-1em',
    left: '1em',
    backgroundColor: '#2C81FF',
    padding: '0.5em',
    borderRadius: '7px',
    zIndex: '100',
    fontSize: '10px',
    border: '1px solid white',
  },
}));
