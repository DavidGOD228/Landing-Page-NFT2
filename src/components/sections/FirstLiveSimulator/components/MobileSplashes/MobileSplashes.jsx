import React from 'react'

import Top from 'assets/images/splashes/firstLiveSimulator/4.png'

import classes from './style.module.scss'

const MobileSplashes = () => {
  return (
    <div className={classes.container}>
      <img className={classes.top} src={Top} alt=""/>
      <div className={classes.ellipse}/>
    </div>
  )
}

export default MobileSplashes
