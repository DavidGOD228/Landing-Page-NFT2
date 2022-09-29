import React from 'react'

import LeftCorner from 'assets/images/splashes/unique/1.png'
import BottomRightCorner from 'assets/images/splashes/unique/2.png'
import BottomLeftCorner from 'assets/images/splashes/unique/3.png'

import classes from './style.module.scss'

const DesktopSplashes = () => {
  return (
    <div className={classes.container}>
      <img className={classes.leftCorner} src={LeftCorner} alt=""/>
      <img className={classes.bottomRightCorner} src={BottomRightCorner} alt=""/>
      <img className={classes.bottomLeftCorner} src={BottomLeftCorner} alt=""/>
      <div className={classes.ellipse}/>
      <div className={classes.bottomEllipse}/>
    </div>
  )
}

export default DesktopSplashes
