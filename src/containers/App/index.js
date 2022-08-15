import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs, Toolbar, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import clsx from 'clsx';

import Header from './Header';
import Drawer from './Drawer';
import useStyles from './index.style';

const App = (props) => {
  const appStore = useSelector((store) => store.app.toJS());
  const dispatch = useDispatch();
  const styles = useStyles();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <Typography component="div" style={{ height: '100vh', width: '100vw' }}>
      <Header mobileDrawerOpen={mobileDrawerOpen} setMobileDrawerOpen={setMobileDrawerOpen} />
      <Drawer
        mobileDrawerOpen={mobileDrawerOpen}
        setMobileDrawerOpen={setMobileDrawerOpen}
        {...props}
      />
      <main className={clsx(styles.content, { [styles.contentShift]: appStore.open })}>
        <Toolbar className={styles.toolbar}>
          <Breadcrumbs
            className={styles.breadcrumb}
            aria-label="breadcrumb"
            separator={<NavigateNextIcon htmlColor="#ababab" fontSize="small" />}
          >
            <Link href="#" to="#">
              Admin Management
            </Link>
            <Typography color="textPrimary">System Overview</Typography>
          </Breadcrumbs>
        </Toolbar>
        {React.Children.toArray(props.children)}
      </main>
    </Typography>
  );
};

export default App;
