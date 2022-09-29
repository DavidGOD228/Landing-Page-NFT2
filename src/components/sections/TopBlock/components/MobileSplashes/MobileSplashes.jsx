import React from 'react'

import TopLeftCorner from 'assets/images/splashes/topBlock/6.png'
import TopRightCorner from 'assets/images/splashes/topBlock/7.png'
import BottomCorner from 'assets/images/splashes/topBlock/5.png'

import classes from './style.module.scss'

const MobileSplashes = () => {
  return (
    <div className={classes.container}>
      <img className={classes.topLeftCorner} src={TopLeftCorner} alt=""/>
      <img className={classes.topRightCorner} src={TopRightCorner} alt=""/>
      <img className={classes.bottomCorner} src={BottomCorner} alt=""/>
    </div>
  )
}

export default MobileSplashes
