import React from 'react'

import TopMorphDesktop from 'assets/images/topMorphDesktop.png'
import TopCardDesktop from 'assets/images/topCardDesktop.png'

import classes from './style.module.scss'

const MorphBlock = () => {
  return (
    <div className={classes.topBlockImages}>
      <img className={classes.morph} src={TopMorphDesktop} alt=""/>
      <img className={classes.morphCard} src={TopCardDesktop} alt=""/>
    </div>
  )
}

export default MorphBlock
