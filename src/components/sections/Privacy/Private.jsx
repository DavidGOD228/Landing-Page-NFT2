import React from 'react'
import { motion } from 'framer-motion'

import Smile from '../../icons/Smile'

import classes from './style.module.scss'

import LazyLoad from 'react-lazy-load';
import { offset } from 'utils/lazyload'

export const Private = () => {
  return (
    <div className={classes.container}>
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
          a private life is a happy life
        </motion.h3>
        <motion.div
          key="smile"
          initial={{x: 100}}
          whileInView={{
            x: 0,
            position: "absolute",
            right: 20,
            top: 30
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut'
          }}
          viewport={{once: true}}>
          <Smile width={53} height={59}/>
        </motion.div>
        <div className={`${classes.videoWrapper} ${classes.confidenceContainer}`}>
          <LazyLoad offset={offset}>
            <video
              className={classes.privacyVideo}
              src="https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082157/videos/bed.video_vfxjeb.mp4"
              autoPlay
              loop
              playsInline
              muted
            />
          </LazyLoad>
        </div>
      </div>
    </div>
  )
}
