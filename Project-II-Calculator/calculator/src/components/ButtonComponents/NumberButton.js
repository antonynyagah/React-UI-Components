import React from 'react';
import './Button.css';

onst NumberButton = props => {
    return (
        <button className={props.buttonStyle}>{props.text}</button>
    )
}

export default NumberButton;