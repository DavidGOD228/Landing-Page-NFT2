import React from 'react'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Phone from '../../common/Phone/Phone'
import Table from "../../common/Table/Table"

import ArrowLeft from '../../../assets/images/arrow-left.svg'
import ArrowRight from '../../../assets/images/arrow-right.svg'

import classes from './style.module.scss'

const data = [
  {
    amount: '＞25k',
    text: 'Lands \n appartments',
  },
  {
    amount: '＞35k',
    text: 'Clothing',
  },
  {
    amount: '＞20k',
    text: 'Furniture',
  },
]

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
        <Table style={{marginTop: 35}} data={data}/>
      </div>
    </>
  )
}

export default Personalize
