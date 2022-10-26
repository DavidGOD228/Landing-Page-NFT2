import React, {useEffect, useState} from 'react'

import Logo from 'assets/images/logo.webp'
import Hamburger from 'assets/images/hamburger.svg'
import Close from 'assets/images/close.svg'
import Twitter from 'assets/images/twitter.svg'
import Discord from 'assets/images/discord.svg'

import {useWindowWidth} from 'hooks/useWindowWidth'
import usePickSection from "./hooks/usePickSection"
import classes from './style.module.scss'
import {menuData} from "./data/menu";
import NavItem from "./components/NavItem/NavItem";
import {Link} from "react-router-dom";

export const Header = () => {
  const [isVisibleMenu, setVisibleMenu] = useState(false)
  const isDesktop = useWindowWidth(1024)

  const { activeSection } = usePickSection();

  useEffect(() => {
    if (isVisibleMenu) {
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.touchAction = 'auto'
    }
  }, [isVisibleMenu])

  const handleMobileMenuClick = () => {
    setVisibleMenu(false)
  }

  const mappingMenu = menuData.map(({ id, title }, index) => {
		const item = (
			<NavItem
				key={title}
				title={title}
				link={id}
				activeSection={activeSection}
			/>
		);
		return index === 3 ? (
			<React.Fragment key={title}>
				<div
					className={`${classes.logoContainer} ${
						!activeSection && classes.activeLogo
					}`}
				>
					<img className={classes.logo} src={Logo} alt='' />
				</div>
				{item}
			</React.Fragment>
		) : (
			item
		);
	});

  return (
    <header className={classes.header}>
      {
        isDesktop ? <nav className={classes.nav}>
          {mappingMenu}
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
                    <Link to={{pathname: '/', hash: `${menuItem.id}`}}
                          className={classes.menuItem}
                          onClick={handleMobileMenuClick}
                          key={idx}
                    >
                      {menuItem.title}
                    </Link>
                  )
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

