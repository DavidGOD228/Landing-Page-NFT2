import React from 'react'
import {motion} from 'framer-motion';

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Paragraph from '../../common/Paragraph/Paragraph'
import ListItem from './components/ListItem/ListItem'

import classes from './style.module.scss'
import {useWindowWidth} from "hooks/useWindowWidth";

import AnimatedTextCharacter from "../../common/AnimatedTextCharacter/AnimatedTextCharacter";
import FirstLine from "./components/FirstLine/FirstLine";
import SecondLine from "./components/SecondLine/SecondLine";
import ThirdLine from "./components/ThirdLine/ThirdLine";

const list = [
  {
    id: 1,
    delay: 0,
    text: <AnimatedTextCharacter delay={2} className={classes.listParagraph} text="Enter the world of the future"/>,
    line: <FirstLine/>,
  },
  {
    id: 2,
    delay: 3,
    text: <AnimatedTextCharacter delay={4} className={classes.listParagraph} text="Build your dream life"/>,
    line: <SecondLine/>
  },
  {
    id: 3,
    delay: 5,
    text: <AnimatedTextCharacter delay={6} className={classes.listParagraph} text="Forge your path, whatever it may be. Make it big in METAMORPH and see your success transferred to the real world."/>,
    line: <ThirdLine/>

  },
]

export const Freedom = () => {
  const isDesktop = useWindowWidth(1024)

  return (
    <div className={classes.container}>
      <div className={classes.topContent}>
        <div className={classes.content}>
          {
            isDesktop && <motion.div
              initial={{x: -500}}
              whileInView={{x: 0}}
              transition={{
                duration: 1,
                ease: 'easeInOut'
              }}
              viewport={{once: true}}>
              <Paragraph className={classes.paragraph}>
                MM is built on putting the power of choice into the hands of players.All in-game
                actions are governed by you, with no artificial barriers. We empower you to
                create your unique story by participating in a world where we expect the unexpected.
                From moral
                actions to investments, socialize, business operations, and gambling you have the
                choice to play and earn in a style you enjoy.
              </Paragraph>
            </motion.div>
          }
          <motion.div
            initial={{x: 500}}
            whileInView={{x: 0}}
            transition={{
              duration: 1,
              ease: 'easeInOut'
            }}
            viewport={{once: true}}>
          <Title classname={classes.title}>
            <p className={classes.chineseText}>全部的 自由 行動的</p>
            <p className={classes.total}>TOTAL <GreenText classname={classes.greenText}>FREEDOM
              of ACTION </GreenText></p>
          </Title>
          </motion.div>
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
      <div className={classes.listContainer}>
        {
          list.map(({id, line, text, delay}) => <ListItem delay={delay} key={id} line={line} text={text}/>)
        }
      </div>
    </div>
  )
}

export default Freedom
