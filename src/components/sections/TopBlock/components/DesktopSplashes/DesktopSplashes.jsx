import React from 'react'

import TopLeftCorner from 'assets/images/splashes/topBlock/1.png'
import TopRightCorner from 'assets/images/splashes/topBlock/3.png'
import Background from 'assets/images/splashes/topBlock/4.png'
import BottomRightCorner from 'assets/images/splashes/topBlock/2.png'

import classes from './style.module.scss'

const DesktopSplashes = () => {
  return (
    <div className={classes.container}>
      <img className={classes.topLeftCorner} src={TopLeftCorner} alt=""/>
      <img className={classes.topRightCorner} src={TopRightCorner} alt=""/>
      <img className={classes.background} src={Background} alt=""/>
      <img className={classes.bottomRightCorner} src={BottomRightCorner} alt=""/>
      <div className={classes.centerEllipse}/>
      <div className={classes.topEllipse}/>
    </div>
  )
}

export default DesktopSplashes
