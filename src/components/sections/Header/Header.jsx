import React from 'react'

import Logo from '../../../assets/images/logo-icon.svg'
import Hamburger from '../../../assets/images/hamburger.svg'
import LogoIcon from '../../../assets/images/logo-icon.svg'

import { useWindowWidth } from '../../../hooks/useWindowWidth'

import classes from './style.module.scss'

export const Header = () => {
  const isDesktop = useWindowWidth(1024)
  return (
    <header className={classes.header}>
      {
        isDesktop ? <div className={classes.container}>
          <span>Gameplay</span>
          <span>Morph ID</span>
          <span>Marketplace</span>
          <div className={classes.logoContainer}>
            <img className={classes.logoIcon} src={LogoIcon} alt=""/>
          </div>
          <span>Gameplay</span>
          <span>Morph ID</span>
          <span>Marketplace</span>
        </div> : <>
          <img className={classes.logo} src={Logo} alt=""/>
          <img className={classes.hamburger} src={Hamburger} alt=""/>
        </>
      }
    </header>
  )
}

export default Header
