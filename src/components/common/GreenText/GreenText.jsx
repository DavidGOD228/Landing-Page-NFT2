import React from 'react'

import classes from './style.module.scss'

export const GreenText = ({children, classname, style}) => {
  return (
    <span style={style} className={`${classes.greenText} ${classname}`}>{children}</span>
  )
}

export default GreenText
