import React from 'react'
import { motion } from 'framer-motion'

import PrivacyImage from '../../../assets/images/privacy.png'
import ConfidenceImage from '../../../assets/images/confidence.png'

import Smile from '../../icons/Smile'

import classes from './style.module.scss'

export const Privacy = () => {
  return (
    <div className={classes.container}>
      <motion.h3
        key="respectPrivacy"
        className={classes.title}
        initial={{x: 150}}
        whileInView={{x: 0}}
        transition={{
          duration: 1,
          ease: 'easeInOut'
        }}
        viewport={{once: true}}>
        RESPECT His PRIVACY!
      </motion.h3>
      <div className={classes.privacyContainer}>
        <img className={classes.privacyImage} src={PrivacyImage} alt=""/>
      </div>
      <div className={classes.confidenceContainer}>
        <motion.h3
          key="confidence"
          className={classes.title}
          initial={{x: -100}}
          whileInView={{x: 0}}
          transition={{
            duration: 1,
            ease: 'easeInOut'
          }}
          viewport={{once: true}}>
          But without too much confideNce
        </motion.h3>
        <motion.div
          key="smile"
          initial={{x: 100}}
          whileInView={{
            x: 0,
            position: "absolute",
            right: 35,
            top: 0
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut'
          }}
          viewport={{once: true}}>
          <Smile width={53} height={59}/>
        </motion.div>
        <img src={ConfidenceImage} alt=""/>
      </div>
    </div>
  )
}

export default Privacy
