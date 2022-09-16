import React from 'react'

import { useWindowWidth } from "hooks/useWindowWidth"

import classes from './style.module.scss'

const WhiteTitle = ({style, classname}) => {
  const isDesktop = useWindowWidth(1024)
  return (
    <div className={classes.content}>
      <h2 style={style} className={`${classes.title} ${classname}`}>wizard team</h2>
      {
        !isDesktop &&  <p className={classes.members}>21<span className={classes.membersText}>members</span></p>
      }
    </div>
  )
}

export default WhiteTitle
