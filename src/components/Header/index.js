import { Hidden, Slide, Toolbar, useScrollTrigger } from '@material-ui/core';
import Desktop from './Desktop';
import useStyles from './index.style';

import { TYPE_1 } from './constants';
import { HEADER_HEIGHT, HEADER_HEIGHT_NUMBER } from '../../constants/reponsive';

const Header = ({ type = TYPE_1, disableHysteresis = true, props }) => {
  const trigger = useScrollTrigger({
    threshold: HEADER_HEIGHT_NUMBER,
    disableHysteresis: disableHysteresis,
  });

  return (
    <Hidden smDown>
      <Slide appear={false} direction="down" in={!trigger}>
        <Desktop type={type} />
      </Slide>
    </Hidden>
  );
};

export default Header;
