import { InputBase } from '@material-ui/core';

import email_icon from '../../../assets/images/coming_soon/email_gradient.png';
import { Contained } from '../../../components/Button';

import useStyles from './styles';

const EmailAddInput = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <img src={email_icon} alt="search icon" />
      </div>
      <InputBase
        placeholder="Search e.g. card"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
      <div className={classes.searchButton}>
        <Contained>Notify Me</Contained>
      </div>
    </div>
  );
};

export default EmailAddInput;
