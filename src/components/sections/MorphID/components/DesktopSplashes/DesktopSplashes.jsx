import React from 'react'

import RightCorner from 'assets/images/splashes/morphID/1.png'
import LeftCorner from 'assets/images/splashes/morphID/2.png'

import classes from './style.module.scss'

const DesktopSplashes = () => {
  return (
    <div className={classes.container}>
      <img className={classes.rightCorner} src={RightCorner} alt=""/>
      <img className={classes.leftCorner} src={LeftCorner} alt=""/>
    </div>
  )
}

export default DesktopSplashes
