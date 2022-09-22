import React from 'react'
import {motion} from "framer-motion"

import classes from './style.module.scss'

const SecondLine = () => {
  return (
    < >
      <motion.span
        key="firstLine"
        style={{ transform: "skew(-40deg)"}}
        className={classes.firstLine}
        initial={{ height: 0, width: 0, translateX: 35, skew: -40, }}
        whileInView={{  height: 79, width: 35, translateX: 0 }}
        transition={{
          delay: 3,
          duration: 1,
          ease: 'linear',
        }}
        viewport={{once: true}}
      >
      </motion.span>
      <motion.span
        key="secondLine"
        className={classes.secondLine}
        initial={{width: 0}}
        whileInView={{width: 150}}
        transition={{
          delay: 4,
          duration: 1,
          ease: 'linear'
        }}
        viewport={{once: true}}>
      </motion.span>
    </>
  )
}

export default SecondLine;
