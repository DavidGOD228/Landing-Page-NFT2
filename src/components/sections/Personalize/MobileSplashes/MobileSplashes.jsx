import React from 'react'

import Background from 'assets/images/splashes/personalize/3.png'

import classes from './style.module.scss'

const MobileSplashes = () => {
  return (
    <div className={classes.container}>
      <img className={classes.background} src={Background} alt=""/>
    </div>
  )
}

export default MobileSplashes
