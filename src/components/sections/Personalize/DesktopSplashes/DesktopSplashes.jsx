import React from 'react'

import Left from 'assets/images/splashes/personalize/1.png'
import Right from 'assets/images/splashes/personalize/2.png'

import classes from './style.module.scss'

const DesktopSplashes = () => {
  return (
    <div className={classes.container}>
      <img className={classes.left} src={Left} alt=""/>
      <img className={classes.right} src={Right} alt=""/>
      <div className={classes.leftEllipse}/>
      <div className={classes.rightEllipse}/>
    </div>
  )
}

export default DesktopSplashes
