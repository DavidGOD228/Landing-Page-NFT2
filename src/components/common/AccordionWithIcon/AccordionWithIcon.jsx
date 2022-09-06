import React, { useState } from 'react'

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
      {isOpen && subtitle}
    </div>
  )
}

export default AccordionWithIcon
