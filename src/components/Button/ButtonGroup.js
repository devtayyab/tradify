import React, { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';

export default function TabGroup(props) {
  const style = useStyles();

  const { currentTab, buttons } = props;

  const [currTab, setCurrentTab] = useState(currentTab);

  const getCurrentTab = (button) => {
    return currTab === button ? style.selectedButton : style.notSelectedButton;
  };

  const onButtonClick = (button) => {
    setCurrentTab(button);
  };

  return (
    <ButtonGroup className={style.buttonContainer} variant="contained">
      {buttons.map((button, index) => {
        return (
          <Button className={getCurrentTab(button)} onClick={() => onButtonClick(button)}>
            {button}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    padding: '2px',
    borderRadius: '0.5em',
    background: '#F0F0F0',

    '& button': {
      borderRight: 'none !important',
      borderLeft: 'none !important',

      [theme.breakpoints.down('sm')]: {
        padding: '4px 12px',
        width: 'auto',
        minWidth: '64px',
        fontSize: '.675rem',
      },
    },
  },
  selectedButton: {
    color: theme.palette.common.white,
    background: theme.palette.primary.mainGradient,
    borderRadius: '0.5em !important',
    width: '100px',
    fontWeight: '800 !important',
    padding: '4px',
  },

  notSelectedButton: {
    width: '100px',
    backgroundColor: 'transparent !important',
    color: 'rgb(24, 27, 33, 0.25) !important',
    fontWeight: '800 !important',
    padding: '4px',
  },
}));
