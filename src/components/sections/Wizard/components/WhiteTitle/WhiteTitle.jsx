import React from 'react'

import classes from './style.module.scss'

const WhiteTitle = ({style, classname}) => {
  return (
    <div className={classes.content}>
      <h2 style={style} className={`${classes.title} ${classname}`}>wizard team</h2>
      <p className={classes.members}>21<span className={classes.membersText}>members</span></p>
    </div>
  )
}

export default WhiteTitle
