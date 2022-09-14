import React, {useState} from 'react'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import MorphInfo from './MorphInfo/MorphInfo'

import Card1 from '../../../assets/images/unique-card1.png'
import Card2 from '../../../assets/images/unique-card2.png'
import Card3 from '../../../assets/images/unique-card3.png'
import Card4 from '../../../assets/images/unique-card4.png'
import Card5 from '../../../assets/images/unique-card5.png'
import Card6 from '../../../assets/images/unique-card6.png'

import classes from './style.module.scss'
import {morphsData} from "./morphData";
import Card from "./Card/Card";


const cards = [Card2, Card3, Card4, Card5]
const YourMorph = () => {
  const [activeMorph, setActiveMorph] = useState(1)
  return (
    <div className={classes.container}>
      <div style={{padding: "0 20px"}}>
        <Title>
          <GreenText>Unique CyberDNA </GreenText>
          of your Morph
        </Title>
      </div>
      <div className={classes.cards}>
        <img src={Card1} alt=""/>
        {
          cards.map((card, index) => <Card isActive={activeMorph === index} image={card} onClick={() => setActiveMorph(index)}/>)
        }
        <img src={Card6} alt=""/>
      </div>
      <MorphInfo info={morphsData[activeMorph]}/>
    </div>
  )
}

export default YourMorph

