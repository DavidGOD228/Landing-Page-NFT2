import React from 'react'

import Left from 'assets/images/splashes/fataMorgana/1.png'

import classes from './style.module.scss'

const MobileSplashes = () => {
  return (
    <div className={classes.container}>
      <img className={classes.right} src={Left} alt=""/>
    </div>
  )
}

export default MobileSplashes
