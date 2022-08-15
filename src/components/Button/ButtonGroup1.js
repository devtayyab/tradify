import React, { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';

export default function TabGroups(props) {
  const style = useStyles();

  const { currentTab, buttons, onClick } = props;

  const [currTab, setCurrentTab] = useState(currentTab);

  const getCurrentTab = (button) => {
    return currTab === button ? style.selectedButton : style.notSelectedButton;
  };

  const onButtonClick = (button) => {
    setCurrentTab(button);
  };

  return (
    <ButtonGroup className={style.buttonContainer}>
      {buttons.map((button, index) => {
        return (
          <Button className={getCurrentTab(button)} onClick={() => onClick(button)}>
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

    // background: '#F0F0F0',
    // borderRadius: '0.5em',
    '& button': {
      borderLeft: 'none !important',
      borderRight: 'none !important',
      borderTop: 'none !important',
      borderBottom: 'none !important',

      borderRadius: '0.1em !important',
      borderColor: '#100010 !important',
    },
  },
  selectedButton: {
    color: '#00f0d1 !important',
    background: '#ffff !important',
    // borderRadius: '0.5em !important',
    fontWeight: '600 !important',
    padding: '4px 12px',
    width: 'auto',
    minWidth: '64px',
    fontSize: '.675rem',
    borderRight: '1px solid #000000 !important',
  },

  notSelectedButton: {
    backgroundColor: '#ffff !important',
    color: '#000000 !important',
    fontWeight: '600 !important',
    padding: '4px 12px',
    width: 'auto',
    minWidth: '64px',
    fontSize: '.675rem',
  },
}));
