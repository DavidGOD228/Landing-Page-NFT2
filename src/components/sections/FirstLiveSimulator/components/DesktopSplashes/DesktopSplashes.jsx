import React from 'react'

import Right from 'assets/images/splashes/firstLiveSimulator/1.png'
import Left from 'assets/images/splashes/firstLiveSimulator/2.png'

import classes from './style.module.scss'
import LazyLoad from 'react-lazy-load'
import { offset } from 'utils/lazyload';

const DesktopSplashes = () => {
  return (
    <div className={classes.container}>
      <LazyLoad offset={offset}>
        <img className={classes.right} src={Right} alt=""/>
      </LazyLoad>
      <LazyLoad offset={offset}>
        <img className={classes.left} src={Left} alt=""/>
      </LazyLoad>
      <div className={classes.leftEllipse}/>
      <div className={classes.rightEllipse}/>
    </div>
  )
}

export default DesktopSplashes
