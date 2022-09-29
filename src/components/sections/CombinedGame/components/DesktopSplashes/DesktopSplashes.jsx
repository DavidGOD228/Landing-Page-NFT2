import React from 'react'

import Background from 'assets/images/splashes/footer/1.png'

import classes from './style.module.scss'

const DesktopSplashes = () => {
  return (
    <div className={classes.container}>
      <img className={classes.background} src={Background} alt=""/>
      <div className={classes.ellipse}/>
    </div>
  )
}

export default DesktopSplashes
