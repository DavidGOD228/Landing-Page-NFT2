import React from 'react'

import classes from './style.module.scss'

export const GreenText = React.forwardRef(({children, classname, style}, ref) => {
  return (
    <span
      ref={ref}
      style={style}
      className={`${classes.greenText} ${classname}`}
    >
      {children}
    </span>
  )
})

export default GreenText
