import React, {useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import ArrowUp from 'assets/images/arrow-up.svg'
import ArrowDown from 'assets/images/arrow-down.svg'

import classes from './style.module.scss'

export const Accordion = ({title, subtitle}) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className={classes.content}>
      <div className={classes.accordion} onClick={() => setOpen(!isOpen)}>
        <h3 style={{color: isOpen ? "#fff" : "#BEBEBE"}} className={classes.title}>{title}</h3>
        {
          isOpen ? <img src={ArrowUp} alt="Arrow Up"/> :
            <img src={ArrowDown} alt="Arrow Down"/>
        }
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="Accordion"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {opacity: 1, height: "auto", marginTop: 20},
              collapsed: {opacity: 0, height: 0, marginTop: 0}
            }}
            transition={{duration: .8, ease: [0.04, 0.62, 0.23, 0.98]}}
          >
            {subtitle}
          </motion.div>

        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordion
