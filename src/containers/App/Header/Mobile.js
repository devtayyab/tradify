import React from 'react';

import { Link } from 'react-router-dom';

import { AppBar, Box, ListItem, Toolbar, IconButton, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';

import SearchBar from './SearchBar';

import useStyles from './index.style';

import img_logo from '../../../assets/images/header/logo_small.png';
import img_logo_white from '../../../assets/images/header/logo_white.png';
import icon_house from '../../../assets/images/header/header_house.png';
import icon_pie from '../../../assets/images/header/header_pie.png';
import icon_gift from '../../../assets/images/header/header_gift.png';
import icon_chart from '../../../assets/images/header/header_chart.png';
import icon_profile from '../../../assets/images/header/profile.png';
import icon_house_white from '../../../assets/images/header/header_house_white.png';
import icon_pie_white from '../../../assets/images/header/header_pie_white.png';
import icon_gift_white from '../../../assets/images/header/header_gift_white.png';
import icon_chart_white from '../../../assets/images/header/header_chart_white.png';
import icon_profile_white from '../../../assets/images/header/profile_white.png';
import { THEME_DARK_MODE } from '../../../constants';
import { useSelector } from 'react-redux';

const MobileHeader = ({ mobileDrawerOpen, setMobileDrawerOpen, ...props }) => {
  const styles = useStyles();
  const theme = useSelector((store) => store.app.get('theme'));
  const isDarkMode = theme === THEME_DARK_MODE;

  return (
    <>
      <AppBar className={styles.appBar} position="fixed">
        <Toolbar className={styles.toolbar}>
          <Box display="flex" flexDirection="row" width="100%">
            <Box>
              <Link to="/app">
                {isDarkMode ? (
                  <img src={img_logo} width={50} height={50} alt="Traidify" />
                ) : (
                  <img src={img_logo_white} width={50} height={50} alt="Traidify" />
                )}
              </Link>
            </Box>
            <Box
              display="flex"
              flex="1"
              justifyContent="center"
              alignItems="center"
              paddingX="16px"
            >
              <Box width="100%" maxWidth="400px">
                <SearchBar />
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="flex-end">
              <Box display="flex">
                <IconButton onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}>
                  <MenuIcon htmlColor="white" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar className={styles.bottomAppBar} position="fixed">
        <Toolbar className={styles.toolbar}>
          <ListItem button className={clsx(styles.linkItem, styles.bottomLinkItem)}>
            <img src={isDarkMode ? icon_house : icon_house_white} alt="navigation link home" />
          </ListItem>
          <ListItem button className={clsx(styles.linkItem, styles.bottomLinkItem)}>
            <img src={isDarkMode ? icon_pie : icon_pie_white} alt="navigation link technicals" />
          </ListItem>
          <ListItem button className={clsx(styles.linkItem, styles.bottomLinkItem)}>
            <img src={isDarkMode ? icon_gift : icon_gift_white} alt="navigation link sentiments" />
          </ListItem>
          <ListItem button className={clsx(styles.linkItem, styles.bottomLinkItem)}>
            <img src={isDarkMode ? icon_chart : icon_chart_white} alt="navigation link relative" />
          </ListItem>
          <ListItem button className={clsx(styles.linkItem, styles.bottomLinkItem)}>
            <img
              src={isDarkMode ? icon_profile : icon_profile_white}
              alt="navigation link relative"
            />
          </ListItem>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MobileHeader;
