import React from 'react'

import classes from './style.module.scss'

const WhiteTitle = ({style, classname, children, title}) => {
  return (
    <div className={classes.content}>
      <h2 style={style} className={`${classname} ${classes.title}`}>{title}</h2>
      {
        children ? children : null
      }
    </div>
  )
}

export default WhiteTitle
