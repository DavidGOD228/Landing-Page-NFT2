import React from 'react'

import PrivacyImage from '../../../assets/images/privacy.png'
import Smile from '../../../assets/images/smile.svg'
import ConfidenceImage from '../../../assets/images/confidence.png'

import classes from './style.module.scss'

const Privacy = () => {
  return (
    <div>
      <h3 className={classes.title}>RESPECT His PRIVACY!</h3>
      <div className={classes.privacyContainer}>
        <img className={classes.privacyImage} src={PrivacyImage} alt=""/>
      </div>
      <div className={classes.confidenceContainer}>
        <h3 className={classes.title}>But without too much confideNce</h3>
        <img className={classes.smile} src={Smile} alt=""/>
        <img src={ConfidenceImage} alt=""/>
      </div>
    </div>
  )
}

export default Privacy
