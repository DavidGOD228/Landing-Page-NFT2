import React from 'react'

import Right from 'assets/images/splashes/earn/1.png'

import classes from './style.module.scss'

const MobileSplashes = () => {
  return (
    <div className={classes.container}>
      <img className={classes.right} src={Right} alt=""/>
    </div>
  )
}

export default MobileSplashes
