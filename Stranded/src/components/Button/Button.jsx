import './Button.css'
import { useState } from 'react'

function Button({ children }) {
  function handleClick() {
    console.log('Resource increased!');
  }

  return <button className='button active' onClick={handleClick}>{ children }</button>
}

export default Button;
