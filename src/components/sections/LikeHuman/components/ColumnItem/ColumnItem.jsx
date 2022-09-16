import React from 'react'

import classes from './style.module.scss'

const ColumnItem = ({className, title, icon, subtitle, ...props}) => {
  return (
    <div className={`${classes.column} ${className}`} {...props}>
      <div className={classes.titleWrapper}>
        {icon}
        <h3 className={classes.title}>{title}</h3>
      </div>
      {subtitle}
    </div>
  )
}

export default ColumnItem
