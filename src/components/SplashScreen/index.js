import { Box, Container } from '@material-ui/core';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import logo_white from '../../assets/images/splash/logo_white.png';
import './styles.css';

const SplashScreen = (props) => {
  const show = useSelector((store) => store.app.get('showSplashScreen'));
  const [defaultShow, setDefaultShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setDefaultShow(false), 2000); // add default splash screen time (2 seconds).
  }, []);

  return (
    <Box className={clsx('splash-container', { 'splash-container-hidden': !show && !defaultShow })}>
      <img src={logo_white} />
    </Box>
  );
};

export default SplashScreen;
