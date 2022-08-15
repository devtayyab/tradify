import { Checkbox, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import Conviction from './Conviction';
import useStyles from './styles';
import right_arrow_white from '../../../assets/images/icons/right_arrow_white.svg';
import ProgressLinear from '../../../components/ProgressLinear';
import colors from '../../../styles/colors';
import Rating from './Rating';

const Table = ({ data, ...props }) => {
  const classes = useStyles();

  const getRatingColor = (value) => {
    let ratingColor = colors.gradients.cpanel_green;
    if (value < 70) ratingColor = colors.gradients.quince_jelly;
    if (value < 30) ratingColor = colors.gradients.prunus_avium;

    return ratingColor;
  };

  const _renderRows = (items) => {
    const rows = items.map((item) => (
      <Grid container className={classes.tb}>
        <Grid item xs={3}>
          <Checkbox
            color="primary"
            classes={{
              root: classes.cbRoot,
            }}
          />
          <Typography>{item.name}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>{item.status}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Box width="80%">
            <Rating value={item.uw_ow} />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Conviction value={Math.abs(item.conviction)} up={item.conviction > 0} />
        </Grid>
      </Grid>
    ));

    return rows;
  };

  return (
    <Box py="5px">
      <Grid container className={classes.th}>
        <Grid item xs={6}>
          <Typography>{data.title}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>UW</Typography>
          <Box className={classes.arrowIcon}>
            <img src={right_arrow_white} />
            <img src={right_arrow_white} />
          </Box>
          <Typography>OW</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Conviction</Typography>
        </Grid>
      </Grid>
      {_renderRows(data.items)}
      {/* <Grid container className={classes.tb}>
        <Grid item xs={3}>
          <Checkbox
            color="primary"
            classes={{
              root: classes.cbRoot,
            }}
          />
          <Typography>U.S. Equities</Typography>
        </Grid>
        <Grid item xs={3}><Typography>SELL INTO STRENGTH</Typography></Grid>
        <Grid item xs={3}>
          <Box width="80%">
            <Rating value={28} />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Conviction value={3} />
        </Grid>
      </Grid>
      <Grid container className={classes.tb}>
        <Grid item xs={3}>
          <Checkbox
            color="primary"
            classes={{
              root: classes.cbRoot,
            }}
          />
          <Typography>U.S. Equities</Typography>
        </Grid>
        <Grid item xs={3}><Typography>SELL INTO STRENGTH</Typography></Grid>
        <Grid item xs={3}>
          <Box width="80%">
            <Rating value={28} />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Conviction value={3} />
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default Table;
