import React from 'react'

import TopLeft from 'assets/images/splashes/morphID/3.png'
import BottomLeft from 'assets/images/splashes/morphID/4.png'

import classes from './style.module.scss'

const MobileSplashes = () => {
  return (
    <div className={classes.container}>
      <img className={classes.topLeft} src={TopLeft} alt=""/>
      <img className={classes.bottomLeft} src={BottomLeft} alt=""/>
    </div>
  )
}

export default MobileSplashes
