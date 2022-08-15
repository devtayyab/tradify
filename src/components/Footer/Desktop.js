import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import React from 'react';

import ball from '../../assets/images/footer/ball.png';
import twitter from '../../assets/images/footer/twitter.png';
import insta from '../../assets/images/footer/insta.png';
import pinterest from '../../assets/images/footer/pinterest.png';
import github from '../../assets/images/footer/github.png';

import useStyles from './index.style';
import { Link } from 'react-router-dom';

const Footer = ({ ...props }) => {
  const styles = useStyles();
  return (
    <footer className={styles.footer}>
      <Box className={styles.navLinks} display="flex" flexDirection="row">
        <Box>
          <Link className={styles.link}>Company</Link>
        </Box>
        <Box>
          <Link className={styles.link}>About Us</Link>
        </Box>
        <Box>
          <Link className={styles.link}>Team</Link>
        </Box>
        <Box>
          <Link className={styles.link}>Products</Link>
        </Box>
        <Box>
          <Link className={styles.link}>Contact Us</Link>
        </Box>
      </Box>
      <Box className={styles.social}>
        <ListItem>
          <ListItemIcon>
            <Link>
              <img src={ball} />
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Link>
              <img src={twitter} />
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Link>
              <img src={insta} />
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Link>
              <img src={pinterest} />
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Link>
              <img src={github} />
            </Link>
          </ListItemIcon>
        </ListItem>
      </Box>
      <Box className={styles.copyright} paddingTop="2rem">
        <Typography>
          Copyright © {new Date().getFullYear()} Traidify. All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
