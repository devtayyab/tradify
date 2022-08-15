import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import clsx from 'clsx';

import useStyles from './index.style';
import { ThemeSwitch } from '../ThemeSwitch';

const AppDrawer = ({ mobileDrawerOpen, setMobileDrawerOpen, drawer_items, logout, ...props }) => {
  const appStore = useSelector((store) => store.app.toJS());
  const styles = useStyles();
  const { open } = appStore;

  return (
    <Hidden smDown>
      <Drawer
        variant="permanent"
        className={clsx(styles.drawer, {
          [styles.drawerOpen]: open,
          [styles.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(styles.drawer, {
            [styles.drawerOpen]: open,
            [styles.drawerClose]: !open,
          }),
        }}
      >
        <List className={styles.drawerContent}>
          {drawer_items.map(({ key, name, icon_active, icon, path }, index) => {
            const is_active = path === props.active_route;
            let handleClick = () => {};

            if (name === 'logout') handleClick = logout;

            return (
              <Link to={path} key={`d-${key}-${index}`} onClick={handleClick}>
                <ListItem
                  button
                  key={path + name + index}
                  className={clsx(styles.drawerItem, {
                    [styles.miniDrawerItem]: !open,
                    [styles.activeDrawerItem]: is_active,
                  })}
                >
                  <ListItemIcon>
                    <img src={is_active ? icon_active : icon} alt="name" />
                  </ListItemIcon>
                  {open && <ListItemText primary={name} className={styles.itemName} />}
                </ListItem>
              </Link>
            );
          })}
        </List>
        <ThemeSwitch />
      </Drawer>
    </Hidden>
  );
};

export default AppDrawer;
