import React from 'react'

import classes from "./style.module.scss"

const NavItem = ({onClick, isActive, link, title}) => {
  return (
    <a onClick={onClick} href={link} className={`${classes.navItem} ${isActive && classes.active}`}>{title} </a>
  )
}

export default NavItem
