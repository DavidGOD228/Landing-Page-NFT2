import React from 'react'

import Background from 'assets/images/splashes/unique/4.png'

import classes from './style.module.scss'

const MobileSplashes = () => {
  return (
    <div className={classes.container}>
      <img className={classes.background} src={Background} alt=""/>
    </div>
  )
}

export default MobileSplashes
