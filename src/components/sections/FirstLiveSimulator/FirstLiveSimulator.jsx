import React from 'react'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Paragraph from '../../common/Paragraph/Paragraph'

import GrayLine from '../../../assets/images/grayLine.png'

import classes from './style.module.scss'

const FirstLiveSimulator = () => {
  return (
    <div className={classes.container}>
      <Title classname={classes.title}>
        First <GreenText>live <span className={classes.grayLine}>simulator <img src={GrayLine} alt=""/></span> </GreenText>
        on web 3
      </Title>
      <Paragraph className={classes.paragraph}>Metamorph is an open-world exploration, NFT creature
        collector and life simulator
        game built on the Polygon Blockchain, releasing on IOS and Android in 2023. Play-to-earn in
        a graphically-rich sci-fi adventure and life builder that allows you to feel the life inside
        the game.
      </Paragraph>
      <p className={classes.backgroundText}>
        IMMERSE YOURSELF
        IN A BREATHING WORLD AND <GreenText>BECOME A LEGEND</GreenText>
      </p>
    </div>
  )
}

export default FirstLiveSimulator

