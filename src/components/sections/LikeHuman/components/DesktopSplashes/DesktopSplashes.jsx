import React from 'react'

import Bottom from 'assets/images/splashes/likeHuman/1.png'
import Top from 'assets/images/splashes/firstLiveSimulator/3.png'

import classes from './style.module.scss'

const DesktopSplashes = () => {
  return (
    <div className={classes.container}>
      <img className={classes.bottom} src={Bottom} alt=""/>
      <img className={classes.top} src={Top} alt=""/>
    </div>
  )
}

export default DesktopSplashes
