import React from 'react'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Paragraph from '../../common/Paragraph/Paragraph'
import Accordion from '../../common/Accordion/Accordion'

import Cards from '../../../assets/images/earn.png'
import Coin from '../../../assets/images/coin.png'

import classes from './style.module.scss'
import {useWindowWidth} from "../../../hooks/useWindowWidth";
import Column from "./components/Column/Column";

const data = [
  {
    title: 'Complete the task',
    subtitle: <p className={classes.subtitle}>By completing in-game tasks you are getting rewarded
      with our native token</p>
  },
  {
    title: 'Win the challenge',
    subtitle: <p className={classes.subtitle}>We have a lot of funny challenges between our
      players. winners will be rewarded</p>,
    borderColor: '#35736b'
  },
  {
    title: 'Sell your staff',
    subtitle: <p className={classes.subtitle}>You have a lot of opportunities of building something
      better than others. Be the best one and sell your assets</p>,
    borderColor: '#3f4c35'
  },
]

const Earn = () => {
  const isDesktop = useWindowWidth(1024)

  return (
    <>
      <div className={classes.container}>
        {!isDesktop && <img className={classes.coin} src={Coin} alt=""/>}
        <div className={classes.wrapper}>
          <div className={classes.contentWrapper}>
            <div>
              <Title classname={classes.title}>
                <GreenText>EARN</GreenText>
                {isDesktop && <span className={classes.chineseText}>賺 邊玩邊玩</span>}
                <br/> WHILE PLAY
              </Title>
              <Paragraph className={classes.paragraph}>Earn crypto in MM tokens as in-game rewards through
                playing, completing quests, performing special achievements, and win prizes in tournaments and events.</Paragraph>
            </div>
            {
              isDesktop && <img src={Coin} alt=""/>
            }
          </div>
          <div style={{marginTop: 40}}>
            {!isDesktop && data.map(({title, subtitle}, i) => 
                <Accordion key={i} title={title} subtitle={subtitle}/>)}
          </div>
          {!isDesktop && <img className={classes.cards} src={Cards} alt=""/>}
        </div>
      </div>
      {
        isDesktop &&
        <div className={classes.tableWrapper}>
          <div className={classes.container}>
            <div className={classes.table}>
              {data.map(({title, subtitle, borderColor}, i) => <Column key={i} title={title} subtitle={subtitle} borderColor={borderColor}/>)}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Earn
