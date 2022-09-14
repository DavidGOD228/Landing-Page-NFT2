import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import Title from '../../common/Title/Title'

import GreenText from '../../common/GreenText/GreenText'
import Paragraph from '../../common/Paragraph/Paragraph'
import Dot from '../../common/Dot/Dot'
import Table from '../../common/Table/Table'

import City from '../../../assets/images/city-circle.png'
import GreenCity from '../../../assets/images/greenCity.png'
import Quotes from '../../../assets/images/quotes.svg'

import classes from './style.module.scss'
import {useWindowWidth} from "../../../hooks/useWindowWidth";

const data = [
  {
    end: 15,
    text: 'HOUSES',
    suffix: 'k',
  },
  {
    end: 200,
    text: 'APARTMENTS',
    suffix: 'k',
  },
  {
    end: 15,
    text: 'HOUSES',
    suffix: 'k',
  },
]

export const FataMorgana = () => {
  const isDesktop = useWindowWidth(1024)

  return (
    <div className={classes.container}>
      <div className={classes.topContainer}>
        <div className={classes.content}>
          <div>
            <Title classname={classes.title}>
              {
                !isDesktop && <p className={classes.chineseText}>全部的 自由 行動的</p>
              }
              <p className={classes.welcome}>WELCOME TO..</p>
              <GreenText classname={classes.greenText}>FATA <br/> MORGANA</GreenText>
            </Title>
            <span className={classes.code}>D2128NDJK376LAZXWM3NK7</span>
          </div>
          {
            isDesktop && <Table style={{margin: "69px 56px 0px auto", width: 400, height: 114}} data={data}/>
          }
        </div>
        <Paragraph className={classes.paragraph}>
          Metamorph is built on putting the power of choice into the hands of players All in game
          actions are governed by you, with no artificial barriers<Dot/> We empower you to create
          your unique story by participating in a world where we expect the unexpected<Dot/> From moral
          actions to investments, crusades, businesses operations and gambling – you have the choice
          play and earn in a style you enjoy<Dot/>
        </Paragraph>
      </div>
      {
        !isDesktop && <Table style={{margin: "36px auto 0", width: 335, height: 89}} data={data}/>
      }
      <div className={classes.cityContainer}>
        <ScrollAnimation className={classes.cityText} animateIn="animate__slideInRight" animateOnce>
          <p>
            {isDesktop && <img className={classes.quotes} src={Quotes} alt=""/>}  an adventure that will take your breath away
          </p>
        </ScrollAnimation>
        <span className={classes.light}/>
        <img className={classes.greenCity} src={GreenCity} alt=""/>
        <img className={classes.cityCircle} src={City} alt=""/>
      </div>
    </div>
  )
}

export default FataMorgana
