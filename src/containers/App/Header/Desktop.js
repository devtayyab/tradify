import React from 'react';

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
} from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

import SearchBar from './SearchBar';

import useStyles from './index.style';

import img_logo from '../../../assets/images/header/logo.png';
import img_logo_white from '../../../assets/images/splash/logo_white.png';
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
import sample_profile from '../../../assets/images/header/sample_profile.png';
import { useSelector } from 'react-redux';
import { THEME_DARK_MODE } from '../../../constants';

const Header = ({ mobileDrawerOpen, setMobileDrawerOpen, ...props }) => {
  const styles = useStyles();
  const theme = useSelector((store) => store.app.get('theme'));
  const isDarkMode = theme === THEME_DARK_MODE;

  return (
    <Hidden smDown>
      <AppBar className={styles.appBar} position="fixed">
        <Toolbar className={styles.toolbar}>
          <Grid container spacing={0} alignItems="center" justifyContent="space-between">
            <Grid item md={2} lg={2} className={styles.logoContainer}>
              <Box>
                <Link to="/app">
                  <img
                    src={isDarkMode ? img_logo : img_logo_white}
                    width={130}
                    height={50}
                    alt="Traidify"
                  />
                </Link>
              </Box>
            </Grid>
            <Grid item md={5} lg={5} className={styles.searchBarWrapper}>
              <SearchBar />
            </Grid>
            <Grid item md={3} lg={3}>
              <Box flexDirection="row" display="flex">
                <ListItem button className={styles.linkItem} title="Home">
                  <img
                    src={isDarkMode ? icon_house : icon_house_white}
                    alt="navigation link home"
                  />
                </ListItem>
                <ListItem button className={styles.linkItem} title="Technicals">
                  <img
                    src={isDarkMode ? icon_pie : icon_pie_white}
                    alt="navigation link technicals"
                  />
                </ListItem>
                <ListItem button className={styles.linkItem} title="Sentiment">
                  <img
                    src={isDarkMode ? icon_gift : icon_gift_white}
                    alt="navigation link sentiments"
                  />
                </ListItem>
                <ListItem button className={styles.linkItem} title="Relative">
                  <img
                    src={isDarkMode ? icon_chart : icon_chart_white}
                    alt="navigation link relative"
                  />
                </ListItem>
              </Box>
            </Grid>
            <Grid item md={2} lg={2}>
              <Box paddingLeft="11px">
                <Box paddingX="3px">
                  <ListItem className={styles.profileContainer}>
                    <Box>
                      <img src={sample_profile} alt="user profile" />
                    </Box>
                    <Typography variant="body2">Ronna Ridwan</Typography>
                    <IconButton aria-label="account" edge="end">
                      <ArrowDropDown htmlColor="white" />
                    </IconButton>
                  </ListItem>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Hidden>
  );
};

export default Header;
