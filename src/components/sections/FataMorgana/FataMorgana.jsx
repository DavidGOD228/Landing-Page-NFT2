import React from 'react'

import Title from '../../common/Title/Title'

import GreenText from '../../common/GreenText/GreenText'
import Paragraph from '../../common/Paragraph/Paragraph'

import City from '../../../assets/images/city-circle.png'
import GreenCity from '../../../assets/images/greenCity.png'

import classes from './style.module.scss'

export const FataMorgana = () => {
  return (
    <div className={classes.container}>
      <div className={classes.topContainer}>
        <Title classname={classes.title}>
          <p className={classes.chineseText}>全部的 自由 行動的</p>
          <p className={classes.welcome}>WELCOME TO..</p>
          <GreenText>FATA MORGANA</GreenText>
        </Title>
        <span className={classes.code}>D2128NDJK376LAZXWM3NK7</span>
        <Paragraph>
          Metamorph is built on putting the power of choice into the hands of players All in game
          actions are governed by you, with no artificial barriers. We empower you to create your
          unique story by participating in a world where we expect the unexpected. From moral
          actions to investments, crusades, businesses operations and gambling – you have the choice
          play and earn in a style you enjoy.
        </Paragraph>
      </div>
      <table>
        <tbody>
        <tr>
          <td><span className={classes.amount}>15k</span>HOUSES</td>
          <td><span className={classes.amount}>200k</span>APARTMENTS</td>
          <td><span className={classes.amount}>15k</span>HOUSES</td>
        </tr>
        </tbody>
      </table>
      <div className={classes.cityContainer}>
        <p className={classes.cityText}>
          an adventure that will take your breath away
        </p>
        <span className={classes.light}/>
        <img className={classes.greenCity} src={GreenCity} alt=""/>
        <img className={classes.cityCircle} src={City} alt=""/>
      </div>
    </div>
  )
}

export default FataMorgana
