import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import {
  AppBar,
  Box,
  ListItem,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Hidden,
  Button,
  ListItemText,
  ListItemIcon,
  withStyles,
  withTheme,
} from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

import styles from './index.style';

import img_logo from '../../assets/images/header/mini_logo.png';
import img_logo_white from '../../assets/images/header/mini_logo_white.png';
import icon_template from '../../assets/images/header/template.png';
import icon_user_circle from '../../assets/images/header/user_circle.png';
import icon_duplicate from '../../assets/images/header/duplicate.png';
import icon_calendar from '../../assets/images/header/calendar.png';

import icon_template_white from '../../assets/images/header/template_white.png';
import icon_user_circle_white from '../../assets/images/header/user_circle_white.png';
import icon_duplicate_white from '../../assets/images/header/duplicate_white.png';
import icon_calendar_white from '../../assets/images/header/calendar_white.png';

import sample_profile from '../../assets/images/header/sample_profile.png';
import { TYPE_1, TYPE_2 } from './constants';
import clsx from 'clsx';
import { Contained } from '../Button';

class Header extends Component {
  render() {
    const { classes, type } = this.props;
    const isWhite = type === TYPE_2;
    const logo = !isWhite ? img_logo : img_logo_white;
    const template = isWhite ? icon_template_white : icon_template;
    const user_circle = isWhite ? icon_user_circle_white : icon_user_circle;
    const duplicate = isWhite ? icon_duplicate_white : icon_duplicate;
    const calendar = isWhite ? icon_calendar_white : icon_calendar;
    return (
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={clsx(classes.toolbar, { [classes.whiteToolbar]: isWhite })}>
          <Box display="flex" justifyContent="flex-start">
            <Link to="/app">
              <img src={logo} width={50} height={50} alt="Traidify" />
            </Link>
          </Box>
          <Box
            flex="1"
            flexDirection="row"
            display="flex"
            justifyContent="center"
            height="100%"
            className={classes.navContainer}
          >
            <ListItem
              button
              className={clsx(classes.linkItem, { [classes.whiteLinkItem]: isWhite })}
              title="Overview"
            >
              <ListItemIcon>
                <img src={template} alt="navigation link overvieew" />
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItem>
            <ListItem
              button
              className={clsx(classes.linkItem, { [classes.whiteLinkItem]: isWhite })}
              title="Profile"
            >
              <ListItemIcon>
                <img src={user_circle} alt="navigation link profile" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem
              button
              className={clsx(classes.linkItem, { [classes.whiteLinkItem]: isWhite })}
              title="Sign Up"
            >
              <ListItemIcon>
                <img src={duplicate} alt="navigation link sign up" />
              </ListItemIcon>
              <ListItemText primary="Sign Up" />
            </ListItem>
            <ListItem
              button
              className={clsx(classes.linkItem, { [classes.whiteLinkItem]: isWhite })}
              title="Sign In"
            >
              <ListItemIcon>
                <img src={calendar} alt="navigation link sign in" />
              </ListItemIcon>
              <ListItemText primary="Sign In" />
            </ListItem>
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Contained white={isWhite} variant="contained" color="primary" rounded>
              INVEST TODAY
            </Contained>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
