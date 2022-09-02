import React from 'react'

import classes from './style.module.scss'

import Logo from '../../assets/images/logo.svg'
import Hamburger from '../../assets/images/hamburger.svg'

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={Logo} alt=""/>
      <img src={Hamburger} alt=""/>
    </header>
  )
}

export default Header
