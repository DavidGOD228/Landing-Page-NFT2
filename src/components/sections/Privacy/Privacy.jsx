import React from 'react'
import { motion } from 'framer-motion'

import classes from './style.module.scss'

import LazyLoad from 'react-lazy-load';
import { offset } from 'utils/lazyload'

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
        RESPECT<br />
        His PRIVACY!
      </motion.h3>
      <div className={`${classes.videoWrapper} ${classes.privacyContainer}`}>
        <LazyLoad offset={offset}>
          <video
            className={classes.privacyVideo}
            src="https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082186/videos/toilet.video_gh1gng.mp4"
            autoPlay
            loop
            playsInline
            muted
          />
        </LazyLoad>
      </div>
    </div>
  )
}

export default Privacy
