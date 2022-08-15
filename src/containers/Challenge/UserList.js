import { Card, CardContent, Avatar, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

import UserIcon from './UserIcon';

import user1 from '../../assets/images/challenge/user1.png';

const Input = (props) => {
  const classes = useStyles();
  const userList = [user1, user1, user1, user1, user1, user1, user1];

  return (
    <Card className={classes.thumbnailContainer}>
      <Grid container>
        <Grid xs={6} sm={6} md={8} lg={9} xl={9}>
          {userList.map((user, index) => {
            return <UserIcon className={classes.userIcon} />;
          })}
        </Grid>
      </Grid>
    </Card>
  );
};

export default Input;

const useStyles = makeStyles((theme) => ({
  thumbnailContainer: {
    maxWidth: '1200px',
    position: 'relative',
    padding: '1em',
    borderRadius: '2em',
    margin: '1em 0',
    background: theme.palette.gradients.blue_linear,
  },
  userIcon: {
    border: '2px solid red',
    marginLeft: '-1em',
  },
}));
