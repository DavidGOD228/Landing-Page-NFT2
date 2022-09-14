import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Paragraph from '../../common/Paragraph/Paragraph'
import Dot from '../../common/Dot/Dot'

import morh from '../../../assets/images/morh-1.png'

import WhiteLine from '../../../assets/images/whiteLine.svg'
import Privacy from '../../../assets/images/privacy.png'
import Confidence from '../../../assets/images/confidence.png'
import SmileDesktop from '../../../assets/images/smileDesktop.svg'

import classes from './style.module.scss'

const FirstLiveSimulator = () => {
  return (
    <div className={classes.container}>
      <p className={classes.backgroundText}>
        IMMERSE YOURSELF
        IN A BREATHING WORLD AND <GreenText>BECOME A LEGEND</GreenText>
      </p>
      <div className={classes.textSection}>
        <p className={classes.backgroundText}>
          IMMERSE YOURSELF
          IN A BREATHING WORLD AND <GreenText>BECOME A LEGEND</GreenText>
        </p>

        <div className={classes.triangle} />
        <img className={classes.morh} src={morh} alt="morh" />
      </div>
      <div className={classes.content}>
        <div>
          <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
            <Title classname={classes.title}>
              First <GreenText>live <span className={classes.grayLine}>simulator <img
              src={WhiteLine} alt=""/></span> </GreenText>
              on web 3
            </Title>
            </ScrollAnimation>
          <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
            <Paragraph className={classes.paragraph}>Metamorph is an open-world exploration, NFT
              creature
              collector and life simulator
              game built on the Polygon Blockchain, releasing on IOS and Android in
              2023<Dot/> Play-to-earn in
              a graphically-rich sci-fi adventure and life builder that allows you to feel the life
              inside
              the game<Dot/>
            </Paragraph>
          </ScrollAnimation>
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

