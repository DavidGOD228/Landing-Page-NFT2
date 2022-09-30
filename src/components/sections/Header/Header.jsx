import React, {useEffect, useState} from 'react'

import Logo from '../../../assets/images/logo.png'
import Hamburger from '../../../assets/images/hamburger.svg'
import Close from '../../../assets/images/close.svg'
import Twitter from '../../../assets/images/twitter.svg'
import Discord from '../../../assets/images/discord.svg'

import {useWindowWidth} from '../../../hooks/useWindowWidth'

import classes from './style.module.scss'
import {menuData} from "./data/menu";
import NavItem from "./components/NavItem/NavItem";

export const Header = () => {
  const [isVisibleMenu, setVisibleMenu] = useState(false)
  const [activeLink, setActiveLink] = useState(0)
  const isDesktop = useWindowWidth(1024)

  useEffect(() => {
    if (isVisibleMenu) {
      document.body.style.overflowY = 'hidden'
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.height = 'auto';
    }
  }, [isVisibleMenu])

  const handleMobileMenuClick = (activeLink) => {
    setVisibleMenu(false)
    setActiveLink(activeLink)
  }

  return (
    <header className={classes.header}>
      {
        isDesktop ? <nav className={classes.nav}>
          {
            menuData.map(({id, title}, index) => {
              return index === 3 ? <React.Fragment key={title}>
                <div className={classes.logoContainer}>
                  <img className={classes.logo} src={Logo} alt=""/>
                </div>
                <NavItem key={title} onClick={() => setActiveLink(index)}
                         isActive={activeLink === index} title={title} link={id}/>
              </React.Fragment> : <NavItem key={title} onClick={() => setActiveLink(index)}
                                           isActive={activeLink === index} title={title} link={id}/>
            })
          }
        </nav> : <>
          <img className={classes.logo} src={Logo} alt=""/>
          <img className={classes.hamburger} src={Hamburger} onClick={() => setVisibleMenu(true)}
               alt=""/>
          <div className={`${classes.menu} ${isVisibleMenu ? classes.active : ''}`}>
            <div className={classes.menuHeader}>
              <img className={`${classes.logo} ${classes.logoMenu}`} src={Logo} alt="Logo"/>
              <img className={classes.close} src={Close} onClick={() => setVisibleMenu(false)}
                   alt=""/>
            </div>
            <div className={classes.menuContent}>
              <div className={classes.menuItems}>
                {
                  menuData.map((menuItem, idx) =>
                    <a href={menuItem.id} onClick={() => handleMobileMenuClick(idx)} key={idx}
                       className={classes.menuItem}>{menuItem.title}</a>)
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
