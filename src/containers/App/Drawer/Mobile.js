import React from 'react';

import { Link } from 'react-router-dom';

import {
  Box,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import Close from '@material-ui/icons/Close';

import clsx from 'clsx';

import useStyles from './index.style';
import { ThemeSwitch } from '../ThemeSwitch';

const AppDrawer = ({ mobileDrawerOpen, setMobileDrawerOpen, drawer_items, ...props }) => {
  const styles = useStyles();

  return (
    <Hidden mdUp>
      <Drawer
        anchor="left"
        open={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        classes={{
          paper: styles.drawerMobile,
        }}
      >
        <Box display="flex" justifyContent="flex-end" padding="16px">
          <IconButton onClick={() => setMobileDrawerOpen(false)}>
            <Close htmlColor="white" />
          </IconButton>
        </Box>
        <List className={styles.drawerContent}>
          {drawer_items.map(({ key, name, icon, path }, index) => (
            <Link to={'#'} key={`d-${key}-${index}`}>
              <ListItem button className={clsx(styles.drawerItem, styles.mobileDrawerItem)}>
                <ListItemIcon>
                  <img src={icon} alt="trade" />
                </ListItemIcon>
                <ListItemText primary={name} className={styles.itemName} />
              </ListItem>
            </Link>
          ))}
        </List>
        <ThemeSwitch />
      </Drawer>
    </Hidden>
  );
};

export default AppDrawer;
