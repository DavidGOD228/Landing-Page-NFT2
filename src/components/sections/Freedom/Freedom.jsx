import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Paragraph from '../../common/Paragraph/Paragraph'
import ListItem from './components/ListItem/ListItem'

import classes from './style.module.scss'
import {useWindowWidth} from "../../../hooks/useWindowWidth";

const list = [
  {
    id: 1,
    color: '#ACE402',
    text: <p className={classes.listParagraph}>Enter the world of the future</p>
  },
  {
    id: 2,
    color: '#959AA3',
    text: <p className={classes.listParagraph}>Build your dream life</p>
  },
  {
    id: 3,
    color: '#FFF',
    text: <p className={classes.listParagraph}>Forge your path, whatever it may be. Make it big
      in METAMORPH and see your success transferred to the real world.></p>
  },
]

const Freedom = () => {
  const isDesktop = useWindowWidth(1024)

  return (
    <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
      <div className={classes.container}>
        <div className={classes.topContent}>
          <div className={classes.content}>
            {
              isDesktop && <Paragraph className={classes.paragraph}>
                MM is built on putting the power of choice into the hands of players.All in-game
                actions are governed by you, with no artificial barriers. We empower you to
                create your unique story by participating in a world where we expect the unexpected. From moral
                actions to investments, socialize, business operations, and gambling you have the
                choice to play and earn in a style you enjoy.
              </Paragraph>
            }
            <Title classname={classes.title}>
              <p className={classes.chineseText}>全部的 自由 行動的</p>
              <p className={classes.total}>TOTAL <GreenText classname={classes.greenText}>FREEDOM
                of ACTION </GreenText></p>
            </Title>
          </div>
          {
            !isDesktop && <Paragraph className={classes.paragraph}>
              MM is built on putting the power of choice into the hands of players. All in-game
              actions are governed by you, with no artificial barriers. We empower you to create
              your unique story by participating in a world where we expect the unexpected. From moral
              actions to investments, socialize, business operations, and gambling you have the choice
              to play and earn in a style you enjoy.
            </Paragraph>
          }
        </div>
        {
          !isDesktop && <div className={classes.listContainer}>
            {
              list.map(({id, color, text}) => <ListItem key={id} color={color} text={text}/>)
            }
          </div>
        }
      </div>
    </ScrollAnimation>

  )
}

export default Freedom
