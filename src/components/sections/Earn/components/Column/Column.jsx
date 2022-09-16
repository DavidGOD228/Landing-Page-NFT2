import React from 'react'

import classes from './style.module.scss'

const Column = ({title, subtitle, borderColor}) => {
  return (
    <div style={{borderLeft: `1px solid ${borderColor}`}} className={classes.column}>
      <h4 className={classes.title}>{title}</h4>
      {subtitle}
    </div>
  )
}

export default Column
