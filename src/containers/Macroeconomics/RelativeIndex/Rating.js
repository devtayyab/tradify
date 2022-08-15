import ProgressLinear from '../../../components/ProgressLinear';
import colors from '../../../styles/colors';
import useStyles from './styles';

export const Rating = ({ value, ...props }) => {
  const classes = useStyles();

  const getRatingColor = (value) => {
    let ratingColor = colors.gradients.cpanel_green;
    if (value < 70) ratingColor = colors.gradients.quince_jelly;
    if (value < 30) ratingColor = colors.gradients.prunus_avium;

    return ratingColor;
  };

  return <ProgressLinear className={classes.rating} value={value} color={getRatingColor(value)} />;
};

export default Rating;
