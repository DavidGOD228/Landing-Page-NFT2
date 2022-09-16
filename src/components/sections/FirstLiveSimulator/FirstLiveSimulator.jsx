import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import { Title, GreenText, Paragraph } from 'components'

import morh from 'assets/images/morh-1.png'

import WhiteLine from 'assets/images/whiteLine.svg'
import toiletVideo from 'assets/video/toilet.video.mp4'
import Confidence from 'assets/images/confidence.png'
import SmileDesktop from 'assets/images/smileDesktop.svg'

import classes from './style.module.scss'

const FirstLiveSimulator = () => {
  return (
    <div className={classes.container}>
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
              creature collector and life simulator game built on the Polygon Blockchain, releasing on IOS and Android in
              2023. Play-to-earn in a graphically-rich sci-fi adventure and life builder that allows you to feel the life inside the game.
            </Paragraph>
          </ScrollAnimation>
        </div>
        <div className={classes.mobileContainer}>
          <div className={classes.imagesBlock}>
              <video className={classes.privacyImage} src={toiletVideo} autoPlay loop muted />
            <div className={classes.secondImage}>
              <img className={classes.privacyImage} src={Confidence} alt=""/>
            </div>
          </div>
        </div>
        <div className={classes.respect}>
          <p className={classes.privacyText}>Respect his Privacy!</p>
          <img className={classes.smile} src={SmileDesktop} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default FirstLiveSimulator

