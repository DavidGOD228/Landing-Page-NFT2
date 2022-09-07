import React from 'react'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Paragraph from '../../common/Paragraph/Paragraph'
import Accordion from '../../common/Accordion/Accordion'
import Dot from '../../common/Dot/Dot'

import Cards from '../../../assets/images/earn.png'
import Coin from '../../../assets/images/coin.png'

import classes from './style.module.scss'

const data = [
  {
    title: 'Complete the task',
    subtitle: <p className={classes.subtitle}>By completing in-game tasks you are getting rewarded with our native token</p>
  },
  {
    title: 'Win the challenge',
    subtitle: <p className={classes.subtitle}>We have a lot of funny challenges between our players<Dot/> winners will be rewarded</p>
  },
  {
    title: 'Sell your staff',
    subtitle: <p className={classes.subtitle}>You have a lot of opportunities of building something better than others<Dot/> Be the best one and sell your assets</p>
  },
]

const Earn = () => {
  return (
    <div className={classes.container}>
      <img className={classes.coin} src={Coin} alt=""/>
      <div className={classes.wrapper}>
        <Title classname={classes.title}>
          <GreenText>EARN</GreenText> WHILE PLAY
        </Title>
        <Paragraph style={{marginTop: 28}}>Earn crypto in MM tokens as in-game rewards through playing, completing quests,
          performing special achievements, and win prizes in tournaments and events<Dot/></Paragraph>
        <div style={{marginTop: 40}}>
          {
            data.map(({title, subtitle}) => <Accordion title={title} subtitle={subtitle}/>)
          }
        </div>
        <img className={classes.cards} src={Cards} alt=""/>
      </div>
    </div>
  )
}

export default Earn
