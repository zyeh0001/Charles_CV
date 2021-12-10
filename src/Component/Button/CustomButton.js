import React from 'react';
import { Button } from '@material-ui/core';
import './CustomButton.css';

function CustomButton(props) {
  const { text, icon, onClick, color, ...other } = props;

  return (
    <Button
      onClick={onClick}
      className='custom_btn'
      endIcon={icon ? <div className='btn_icon_container'>{icon}</div> : null}
      color={color}
      {...other}
    >
      <span className='btn_text'>{text}</span>
    </Button>
  );
}

export default CustomButton;
