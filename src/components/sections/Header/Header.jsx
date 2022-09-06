import React from 'react'

import Logo from '../../../assets/images/logo.svg'
import Hamburger from '../../../assets/images/hamburger.svg'

import classes from './style.module.scss'

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={Logo} alt=""/>
      <img src={Hamburger} alt=""/>
    </header>
  )
}

export default Header
