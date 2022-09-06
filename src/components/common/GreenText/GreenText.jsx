import React from 'react'

import classes from './style.module.scss'

const GreenText = ({children, classname}) => {
  return (
    <span className={`${classes.greenText} ${classname}`}>{children}</span>
  )
}

export default GreenText
