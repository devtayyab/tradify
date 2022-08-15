import React from 'react';

import { Toolbar, Hidden } from '@material-ui/core';

import useStyles from './index.style';

import Desktop from './Desktop';
import Mobile from './Mobile';

const Header = (props) => {
  const styles = useStyles();
  return (
    <>
      <Desktop {...props} />
      <Hidden mdUp>
        <Mobile {...props} />
      </Hidden>
      <Toolbar className={styles.toolbar} />
    </>
  );
};

export default Header;
