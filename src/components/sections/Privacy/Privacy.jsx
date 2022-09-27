import React from 'react'
import { motion } from 'framer-motion'

import ToiletVideo from 'assets/video/toilet.video.mp4'
import BedVideo from 'assets/video/bed.video.mp4'

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
      <div className={`${classes.videoWrapper} ${classes.privacyContainer}`}>
        <video
          className={classes.privacyVideo}
          src={ToiletVideo}
          autoPlay
          loop
          playsInline
          muted
        />
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
        <div className={`${classes.videoWrapper} ${classes.confidenceContainer}`}>
          <video
            className={classes.privacyVideo}
            src={BedVideo}
            autoPlay
            loop
            playsInline
            muted
          />
        </div>
      </div>
    </div>
  )
}

export default Privacy
