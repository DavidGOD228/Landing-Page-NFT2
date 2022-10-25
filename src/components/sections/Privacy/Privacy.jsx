import React from 'react'
import { motion } from 'framer-motion'

import ToiletPoster from 'assets/images/posters/toitet.webp'
import BedPoster from 'assets/images/posters/bed.webp'

import Smile from '../../icons/Smile'

import classes from './style.module.scss'
import MobileSplashes from "./components/MobileSplashes/MobileSplashes";

import LazyLoad from 'react-lazy-load';
import { offset } from 'utils/lazyload'

export const Privacy = () => {
  return (
    <div className={classes.container}>
      {/*<MobileSplashes/>*/}
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
            poster={ToiletPoster}
            loop
            playsInline
            muted
          />
        </LazyLoad>
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
          <LazyLoad offset={offset}>
            <video
              className={classes.privacyVideo}
              src="https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082157/videos/bed.video_vfxjeb.mp4"
              autoPlay
              loop
              poster={BedPoster}
              playsInline
              muted
            />
          </LazyLoad>
        </div>
      </div>
    </div>
  )
}

export default Privacy
