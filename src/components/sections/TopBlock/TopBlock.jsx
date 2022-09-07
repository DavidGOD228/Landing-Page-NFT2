import React from 'react'

import Header from '../Header/Header'

import TopBlockImage from '../../../assets/images/topBlockImage.png'
import UnrealEngine from '../../../assets/images/unreal-engine.svg'
import Polygon from '../../../assets/images/polygon.svg'
import Play from '../../../assets/images/play.svg'

import classes from './style.module.scss'

const TopBlock = () => {
  return (
    <div className={classes.topBlock}>
      <Header/>
      <div className={classes.mainBlock}>
        <h1 className={classes.mainText}>it’s like sims, but better.</h1>
        <div className={classes.playBtn}>
          <img src={Play} alt=""/>
          <p className={classes.playText}>Watch Teaser</p>
        </div>
      </div>
      <img className={classes.morphImage} src={TopBlockImage} alt=""/>
      <div className={classes.builtOnContainer}>
        <span className={classes.builtOn}>Built on</span>
        <div className={classes.builtBy}>
          <img src={UnrealEngine} alt=""/>
          <span className={classes.builtOnLine}></span>
          <img src={Polygon} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default TopBlock;
