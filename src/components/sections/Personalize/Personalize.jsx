import React, {useState} from 'react'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Table from "../../common/Table/Table"

import classes from './style.module.scss'
import Slider from "./Slider/Slider";
import Items from "./Items/Items";
import {useWindowWidth} from "../../../hooks/useWindowWidth";
import Paragraph from "../../common/Paragraph/Paragraph";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";

const data = [
  {
    end: 25,
    text: 'Lands \n appartments',
    suffix: 'k',
    prefix: '＞',
  },
  {
    end: 35,
    text: 'Clothing',
    suffix: 'k',
    prefix: '＞',
  },
  {
    end: 20,
    text: 'Furniture',
    suffix: 'k',
    prefix: '＞',
  },
]

const sliderData = [
  {
    title: <> Personalize <GreenText>and make it unique</GreenText></>
  }, {

    title: <> Personalize <GreenText>and make it unique</GreenText></>
  },
  {
    title: <> Personalize <GreenText>and make it unique</GreenText></>
  },
  {
    title: <> Personalize <GreenText>and make it unique</GreenText></>
  },
]

const Personalize = () => {
  const isDesktop = useWindowWidth(1024)

  const [activeSlide, setActiveSlide] = useState(1)

  const handleNextSlide = () => {
    if (activeSlide === 4) return
    setActiveSlide((prevSlide) => prevSlide + 1)
  }

  const handlePrevSlide = () => {
    if (activeSlide === 1) return
    setActiveSlide((prevSlide) => prevSlide - 1)
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.personalizeContent}>
          <Title classname={classes.personalizeTitle}>
            Personalize <GreenText>and make it unique</GreenText>
          </Title>
          <p className={classes.personalizeParagraph}>
            Costruisci comunità per vivere le tue idee più sfrenate con soldi veri sul tavolo.
          </p>
          <div className={classes.sliderNav}>
            <ArrowLeft onClick={handlePrevSlide} width={isDesktop ? 60 : 42} height={isDesktop ? 60 : 42}/>
            <p className={classes.sliderCount}><span
              className={classes.activeSlide}>{activeSlide} </span>of 4</p>
            <ArrowRight onClick={handleNextSlide} width={isDesktop ? 60 : 42} height={isDesktop ? 60 : 42}/>
          </div>
        </div>
        <Slider sliderData={sliderData}/>
      </div>
      <div className={classes.personalizeContainer}>
        <Title classname={classes.marketplaceTitle}>The <br/>
          <GreenText>MARKETPLACE</GreenText></Title>
        <div className={classes.content}>
          {
            isDesktop && <Paragraph className={classes.paragraph}>
              Buy and sell your assets and services on the METAMORPH Marketplace, both in and outside the game.
            </Paragraph>
          }
          <Table style={{
            marginTop: 35,
            width: 400,
            height: isDesktop ? 114 : 89,
            textTransform: isDesktop ? 'initial' : 'uppercase'
          }} data={data}/>
        </div>
        <Items/>
      </div>
    </>
  )
}

export default Personalize
