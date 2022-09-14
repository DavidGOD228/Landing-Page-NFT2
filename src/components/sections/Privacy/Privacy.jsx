import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import PrivacyImage from '../../../assets/images/privacy.png'
import ConfidenceImage from '../../../assets/images/confidence.png'

import classes from './style.module.scss'
import Smile from "../../icons/Smile";

const Privacy = () => {
  return (
    <div>
      <ScrollAnimation animateIn="animate__slideInLeft" animateOnce>
        <h3 className={classes.title}>RESPECT His PRIVACY!</h3>
      </ScrollAnimation>
      <div className={classes.privacyContainer}>
        <img className={classes.privacyImage} src={PrivacyImage} alt=""/>
      </div>
      <div className={classes.confidenceContainer}>
        <ScrollAnimation animateIn="animate__slideInLeft" animateOnce>
          <h3 className={classes.title}>But without too much confideNce</h3>
        </ScrollAnimation>
        <ScrollAnimation className={classes.smile} animateIn="animate__slideInRight" animateOnce>
          <Smile width={53} height={59}/>
        </ScrollAnimation>
        <img src={ConfidenceImage} alt=""/>
      </div>
    </div>
  )
}

export default Privacy
