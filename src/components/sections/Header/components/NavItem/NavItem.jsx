import React from 'react'
import {Link} from "react-router-dom";

import classes from "./style.module.scss"

const NavItem = ({onClick, isActive, link, title}) => {
  return (
    <Link to={{pathname: '/', hash: `${link}`}}
             onClick={onClick}
             preventScrollReset
             className={`${classes.navItem} ${isActive && classes.active}`}>
      {title}
    </Link>
  )
}

export default NavItem
