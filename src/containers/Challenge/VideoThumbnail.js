import { Card, CardContent } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

import UserIcon from './UserIcon';

const Input = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.thumbnailContainer}>
      <CardContent>
        <div>
          <UserIcon />
        </div>
      </CardContent>
    </Card>
  );
};

export default Input;

const useStyles = makeStyles((theme) => ({
  thumbnailContainer: {
    position: 'relative',
  },
  inputRoot: {
    backgroundColor: 'white',
    padding: '1em',
    borderRadius: '12px',
  },
}));
