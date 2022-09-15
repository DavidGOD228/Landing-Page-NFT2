import React from 'react'

import classes from './style.module.scss'

export const Paragraph = ({children, style, className}) => {
  return (
    <p style={style} className={`${classes.paragraph} ${className}`}>{children}</p>
  )
}

export default Paragraph
