import React from 'react'

import classes from './style.module.scss'

const ListItem = ({color, text}) => {
  return (
    <div className={classes.list}>
      <span className={classes.circle} style={{backgroundColor: color}}/>
      <p className={classes.paragraph}>{text}</p>
    </div>
  )
}

export default ListItem
