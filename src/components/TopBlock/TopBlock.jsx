import React from 'react'

import Header from '../Header/Header'

import topBlockImage from '../../assets/images/topBlockImage.png'

import classes from './style.module.scss'

const TopBlock = () => {
  return (
    <div className={classes.topBlock}>
      <Header/>
      <h1 className={classes.mainText}>it’s like sims, but better.</h1>
      <img className={classes.morphImage} src={topBlockImage} alt=""/>
    </div>
  )
}

export default TopBlock;
