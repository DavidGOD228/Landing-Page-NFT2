import React from 'react'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Phone from '../../common/Phone/Phone'

import ArrowLeft from '../../../assets/images/arrow-left.svg'
import ArrowRight from '../../../assets/images/arrow-right.svg'
import classes from './style.module.scss'

const Personalize = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.sliderNav}>
          <img src={ArrowLeft} alt=""/>
          <p className={classes.sliderCount}><span className={classes.activeSlide}>1 </span>of 4</p>
          <img src={ArrowRight} alt=""/>
        </div>
        <Title classname={classes.title}>Personalize <GreenText>and make it unique</GreenText></Title>
      </div>
      <div className={classes.slider}>
        <Phone/>
        <Phone/>
      </div>
      <div className={classes.personalizeContainer}>
        <Title classname={classes.title}>Personalize <GreenText>and make it unique</GreenText></Title>
      </div>
    </>
  )
}

export default Personalize
