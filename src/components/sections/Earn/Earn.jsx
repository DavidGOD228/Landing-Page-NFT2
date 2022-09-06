import React from 'react'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Paragraph from '../../common/Paragraph/Paragraph'
import Accordion from '../../common/Accordion/Accordion'

import Cards from '../../../assets/images/earn.png'

import classes from './style.module.scss'

const Earn = () => {
  return (
    <div className={classes.container}>
      <Title>
        <GreenText>EARN</GreenText> WHILE PLAY
      </Title>
      <Paragraph style={{marginTop: 28}}>Earn crypto in MM tokens as in-game rewards through playing, completing quests,
        performing special achievements, and win prizes in tournaments and events.</Paragraph>
      <div style={{marginTop: 40}}>
        <Accordion title="Complete the task" subtitle="By completing in-game tasks you are getting rewarded with our native token"/>
        <Accordion title="Win the challenge" subtitle="We have a lot of funny challenges between our players. winners will be rewarded"/>
        <Accordion title="Sell your staff" subtitle="You have a lot of opportunities of building something better than others. Be the best one and sell your assets"/>
      </div>
      <img className={classes.cards} src={Cards} alt=""/>
    </div>
  )
}

export default Earn
