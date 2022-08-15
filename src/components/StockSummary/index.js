import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Avatar,
  Box,
  Typography,
} from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import expand_icon from '../../assets/images/icons/expand.png';
import colors from '../../styles/colors';
import ProgressLinear from '../ProgressLinear';

import useStyles from './style';

const StockSummary = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{
          root: classes.header,
          avatar: classes.avatar,
          title: classes.title,
          subheader: classes.subheader,
        }}
        avatar={<Avatar alt="Stock Summary" src={expand_icon} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon htmlColor="#FFF" />
          </IconButton>
        }
        title="Stock Summary"
        subheader="Time-Frame Activity"
      />
      <CardContent>
        <Box>
          <Rating color={colors.gradients.quince_jelly} value={35} label="Momentum" />
          <Rating color={colors.gradients.gradient_1} value={88} label="Mean Reversion" />
          <Rating color={colors.gradients.cpanel_green} value={55} label="Volatility" />
          <Rating color={colors.gradients.cpanel_green} value={65} label="Volume" />
          <Rating color={colors.gradients.gradient_1} value={100} label="Fundamentals" />
          <Rating color={colors.gradients.gradient_5} value={19} label="Economy" />
          <Rating color={colors.gradients.quince_jelly} value={24} label="Overall" />
        </Box>
      </CardContent>
    </Card>
  );
};

const Rating = (props) => {
  return (
    <Box width="100%">
      <Box>
        <Typography>{props.label}</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Box flex="1">
          <ProgressLinear color={props.color} value={props.value} />
        </Box>
        <Box pl="1rem">
          <Typography variant="subtitle1">
            <strong>{props.value}%</strong>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StockSummary;
