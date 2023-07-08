
'use client'
import classes from './button.module.scss';


export default function Button({text, handleClick, styling = {}}) {
  return (
  <button
   className={`${classes.btn} ${styling}`}
   onClick={handleClick}
  >
    {text}
  </button>)
}
  