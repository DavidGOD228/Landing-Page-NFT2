import React, { useState } from 'react'

import ArrowUp from 'assets/images/arrow-up.svg'
import ArrowDown from 'assets/images/arrow-down.svg'

import classes from './style.module.scss'

const Accordion = ({title, subtitle}) => {
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
      {isOpen && subtitle}
    </div>
  )
}

export default Accordion
