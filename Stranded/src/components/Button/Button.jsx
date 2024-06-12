import './Button.css';
import { baseResources } from '../../resources/baseResources.js';
import { useState} from 'react';

function Button({ children, onClick, isActive }) {

  return <button className={isActive ? 'button active' : 'button'} onClick={onClick}>{ children }</button>
}

export default Button;
