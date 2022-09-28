import React from 'react'

import Right from 'assets/images/splashes/firstLiveSimulator/1.png'
import Left from 'assets/images/splashes/firstLiveSimulator/2.png'
import Bottom from 'assets/images/splashes/firstLiveSimulator/3.png'

import classes from './style.module.scss'

const DesktopSplashes = () => {
  return (
    <div className={classes.container}>
      <img className={classes.right} src={Right} alt=""/>
      <img className={classes.left} src={Left} alt=""/>
      <img className={classes.bottom} src={Bottom} alt=""/>
      <div className={classes.leftEllipse}/>
      <div className={classes.rightEllipse}/>
    </div>
  )
}

export default DesktopSplashes
