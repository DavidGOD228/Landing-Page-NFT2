import React from 'react'
import {motion} from 'framer-motion';

import Circle from '../../../../../assets/images/circle.svg'

import {useWindowWidth} from '../../../../../hooks/useWindowWidth'

import classes from './style.module.scss'

const ListItem = ({text, line, delay}) => {
  const isDesktop = useWindowWidth(1024)
  return (
    <div className={classes.container}>
      {isDesktop && line}
      <div className={classes.list}>
        <motion.img
          className={classes.circle}
          src={Circle}
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            delay: delay,
            duration: .5  ,
            ease: 'linear'
          }}
          viewport={{once: true}}>
        </motion.img>
        {text}
      </div>
    </div>

  )
}

export default ListItem
