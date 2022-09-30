import React from 'react'

import classes from './style.module.scss'
import Paragraph from "../../../../common/Paragraph/Paragraph";
import {motion} from "framer-motion";

const ColumnItem = ({className, title, icon, subtitle, ...props}) => {
  return (
    <div className={`${classes.column} ${className}`} {...props}>
      <motion.div
        className={classes.titleWrapper}
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{
          duration: 1,
          ease: 'easeInOut'
        }}
        viewport={{once: true}}
      >
        {icon}
        <h3 className={classes.title}>{title}</h3>
      </motion.div>
      <Paragraph className={classes.columnSubtitle}>
        {subtitle.split(' ').map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              initial={{y: 50, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{
                duration: 1,
                ease: 'easeInOut'
              }}
              viewport={{once: true}}
            >
              {word}
              {idx + 1 !== subtitle.split(' ').length && '\u00A0'}
            </motion.span>
          );
        })}
      </Paragraph>
    </div>
  )
}

export default ColumnItem
