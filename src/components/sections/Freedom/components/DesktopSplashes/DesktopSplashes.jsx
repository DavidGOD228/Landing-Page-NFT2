import React from 'react'

import Right from 'assets/images/splashes/freedom/1.png'

import classes from './style.module.scss'

const DesktopSplashes = () => {
  return (
    <div className={classes.container}>
      <img className={classes.right} src={Right} alt=""/>
      <div className={classes.ellipse}/>
    </div>
  )
}

export default DesktopSplashes
