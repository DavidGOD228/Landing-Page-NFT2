import React from 'react'

import classes from './style.module.scss'

const Column = ({title, subtitle}) => {
  return (
    <div className={classes.column}>
      <h4 className={classes.title}>{title}</h4>
      {subtitle}
    </div>
  )
}

export default Column
