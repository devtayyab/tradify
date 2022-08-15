import { Card, CardContent, makeStyles } from '@material-ui/core';

import mini_logo_1 from '../assets/images/header/mini_logo_1.png';

const RoundLogo = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <img src={mini_logo_1} width="60px" height="60px" />
      </CardContent>
    </Card>
  );
};

export default RoundLogo;

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: '50%',
    width: '90px',
    height: '90px',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
}));
