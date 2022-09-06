import React from 'react'

import classes from './style.module.scss'

const Title = ({children, style, classname}) => {
  return (
    <div style={style} className={classes.content}>
      <h2 className={`${classes.title} ${classname}`}>{children}</h2>
    </div>
  )
}

export default Title
