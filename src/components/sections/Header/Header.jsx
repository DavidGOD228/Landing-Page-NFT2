import React, {useEffect, useState} from 'react'

import Logo from '../../../assets/images/logo-icon.png'
import Hamburger from '../../../assets/images/hamburger.svg'
import Close from '../../../assets/images/close.svg'
import Twitter from '../../../assets/images/twitter.svg'
import Discord from '../../../assets/images/discord.svg'

import { useWindowWidth } from '../../../hooks/useWindowWidth'

import classes from './style.module.scss'
import {menuData} from "./data/menu";

export const Header = () => {
  const [isVisibleMenu, setVisibleMenu] = useState(false)

  const isDesktop = useWindowWidth(1024)

  useEffect(() => {
    if(isVisibleMenu) {
     document.body.style.overflowY = 'hidden'
    }
    else {
      document.body.style.overflowY = 'unset'
    }
  }, [isVisibleMenu])

  return (
    <header className={classes.header}>
      {
        isDesktop ? <div className={classes.container}>
          <span>Gameplay</span>
          <span>Morph ID</span>
          <span>Marketplace</span>
          <div className={classes.logoContainer}>
            <img className={classes.logoIcon} src={Logo} alt=""/>
          </div>
          <span>Gameplay</span>
          <span>Morph ID</span>
          <span>Marketplace</span>
        </div> : <>
          <img className={classes.logo} src={Logo} alt=""/>
          <img className={classes.hamburger} src={Hamburger} onClick={() => setVisibleMenu(true)} alt=""/>
          <div className={`${classes.menu} ${isVisibleMenu ? classes.active: ''}`}>
            <div className={classes.menuHeader}>
              <img src={Logo} alt=""/>
              <img className={classes.close} src={Close} onClick={() => setVisibleMenu(false)} alt=""/>
            </div>
           <div className={classes.menuContent}>
             <div className={classes.menuItems}>
               {
                 menuData.map((menuItem, idx) => <h4 key={idx} className={classes.menuItem}>{menuItem}</h4>)
               }
             </div>
             <div className={classes.socials}>
               <img src={Twitter} alt=""/>
               <img src={Discord} alt=""/>
             </div>
           </div>
          </div>
        </>
      }
    </header>
  )
}

export default Header
