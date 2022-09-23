import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'

import ArrowUp from '../../../assets/images/arrow-up.svg'
import ArrowDown from '../../../assets/images/arrow-down.svg'

import classes from './style.module.scss'

const AccordionWithIcon = ({icon, title, subtitle}) => {
  const [isOpen, setOpen] = useState(false)

  const handleAccordionClick = () => {
    setOpen(!isOpen)
  }

  return (
    <div className={classes.content}>
      <div className={classes.accordion} onClick={handleAccordionClick}>
        {icon}
        <h3 style={{color: isOpen ? "#fff" : "#BEBEBE"}} className={classes.title}>{title}</h3>
        {
          isOpen ? <img className={classes.arrow} src={ArrowUp} alt="Arrow Up"/> :
            <img className={classes.arrow} src={ArrowDown} alt="Arrow Down"/>
        }
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="AccordionWithIcon"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginTop: 15 },
              collapsed: { opacity: 0, height: 0, marginTop: 0 }
            }}
            transition={{ duration: .8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {subtitle}
          </motion.div>

        )}
      </AnimatePresence>
    </div>
  )
}

export default AccordionWithIcon
