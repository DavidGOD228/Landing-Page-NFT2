import React from 'react'

import classes from './style.module.scss'

const ColumnItem = ({title, icon, subtitle}) => {
  return (
    <div className={classes.column}>
      <div className={classes.titleWrapper}>
        {icon}
        <h3 className={classes.title}>{title}</h3>
      </div>
      {subtitle}
    </div>
  )
}

export default ColumnItem
