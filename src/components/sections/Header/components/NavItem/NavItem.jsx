import React from 'react'
import {Link, useLocation} from "react-router-dom";

import classes from "./style.module.scss"

const NavItem = ({link, title}) => {
  const { hash } = useLocation();

  return (
    <Link to={{pathname: '/', hash: `${link}`}} className={`${classes.navItem} ${hash === link && classes.active}`}>
      {title}
    </Link>
  )
}

export default NavItem
