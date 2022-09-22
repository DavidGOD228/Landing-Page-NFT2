import React from 'react'
import {motion} from 'framer-motion';

import Circle from '../../../../../assets/images/circle.svg'

import {useWindowWidth} from '../../../../../hooks/useWindowWidth'

import classes from './style.module.scss'

const ListItem = ({text, line, position}) => {
  const isDesktop = useWindowWidth(1024)
  return (
    <div className={classes.container}>
      {isDesktop && <motion.img
        src={line}
        className={classes.line}
        initial={{width: 0}}
        whileInView={{width: 'auto'}}
        transition={{
          delay: position,
          duration: 1,
          ease: 'linear'
        }}
        viewport={{once: true}}>
      </motion.img>
      }
      <div className={classes.list}>
        <motion.img
          className={classes.circle}
          src={Circle}
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            delay: position + 1,
            duration: 1,
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
