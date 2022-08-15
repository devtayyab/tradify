import { Hidden, Toolbar, useTheme } from '@material-ui/core';
import Desktop from './Desktop';
import useStyles from './index.style';

const Footer = (props) => {
  const styles = useStyles();
  const theme = useTheme();

  console.log({ theme }, theme.text[2]);

  return (
    <Hidden smDown>
      <Desktop />
    </Hidden>
  );
};

export default Footer;
