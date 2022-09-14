import React from 'react'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Paragraph from '../../common/Paragraph/Paragraph'
import Dot from '../../common/Dot/Dot'

import WhiteLine from '../../../assets/images/whiteLine.svg'
import PinkLine from '../../../assets/images/pinkLine.png'
import Privacy from '../../../assets/images/privacy.png'
import Confidence from '../../../assets/images/confidence.png'
import SmileDesktop from '../../../assets/images/smileDesktop.svg'

import { useWindowWidth } from '../../../hooks/useWindowWidth'

import classes from './style.module.scss'

const FirstLiveSimulator = () => {
  const isDesktop = useWindowWidth(1024)
  return (
    <div className={classes.container}>
      <p className={classes.backgroundText}>
        IMMERSE YOURSELF
        IN A BREATHING WORLD AND <GreenText>BECOME A LEGEND</GreenText>
      </p>
      <div className={classes.content}>
        <div>
          <Title classname={classes.title}>
            First <GreenText>live <span className={classes.grayLine}>simulator <img src={isDesktop ? WhiteLine : PinkLine} alt=""/></span> </GreenText>
            on web 3
          </Title>
          <Paragraph className={classes.paragraph}>Metamorph is an open-world exploration, NFT creature
            collector and life simulator
            game built on the Polygon Blockchain, releasing on IOS and Android in 2023<Dot/> Play-to-earn in
            a graphically-rich sci-fi adventure and life builder that allows you to feel the life inside
            the game<Dot/>
          </Paragraph>
        </div>
        <div className={classes.mobileContainer}>
          <p className={classes.privacyText}>Respect his Privacy!</p>
          <div className={classes.imagesBlock}>
            <div className={classes.imageWithBorder}>
              <img className={classes.privacyImage} src={Privacy} alt=""/>
            </div>
            <div className={`${classes.imageWithBorder} ${classes.secondImage}`}>
              <img className={classes.privacyImage} src={Confidence} alt=""/>
              <img className={classes.smile} src={SmileDesktop} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstLiveSimulator

