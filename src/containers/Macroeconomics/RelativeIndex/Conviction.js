import { Box } from '@mui/system';
import colors from '../../../styles/colors';

import upIcon from '../../../assets/images/macroeconomics/conviction_up.png';
import downIcon from '../../../assets/images/macroeconomics/conviction_down.png';

const Conviction = (props) => {
  const color = props.up ? colors.green_1 : colors.red1;
  const ImgIcon = props.up ? upIcon : downIcon;
  const icons = [];

  for (let i = 0; i < props.value; i++) {
    icons.push(<img src={ImgIcon} />);
  }

  return <Box display="flex">{icons}</Box>;
};

export default Conviction;
