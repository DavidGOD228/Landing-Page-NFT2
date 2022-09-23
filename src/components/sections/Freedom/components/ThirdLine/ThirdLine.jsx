import React from 'react'
import {motion} from "framer-motion"

import classes from './style.module.scss'

const ThirdLine = () => {
  return (
    < >
      <motion.span
        key="TD_firstLine"
        style={{ transform: "skew(-40deg)"}}
        className={classes.firstLine}
        initial={{ height: 0, width: 0, translateX: 27, skew: -40, }}
        whileInView={{  height: 65, width: 27, translateX: 0 }}
        transition={{
          delay: 5,
          duration: .5,
          ease: 'linear',
        }}
        viewport={{once: true}}
      >
      </motion.span>
      <motion.span
        key="TD_secondLine"
        className={classes.secondLine}
        initial={{width: 0}}
        whileInView={{width: 200}}
        transition={{
          delay: 5.5,
          duration: .5,
          ease: 'linear'
        }}
        viewport={{once: true}}>
      </motion.span>
    </>
  )
}

export default ThirdLine;
