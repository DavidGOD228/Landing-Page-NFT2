import React from 'react'

import classes from './style.module.scss'

const Title = ({children, style, classname}) => {
  return (
    <div className={classes.content}>
      <h2 style={style} className={`${classes.title} ${classname}`}>{children}</h2>
    </div>
  )
}

export default Title
