import React from 'react'

import FooterLogo from '../../../assets/images/footer-logo.svg'
import GradientLogo from '../../../assets/images/gradientLogo.svg'
import Twitter from '../../../assets/images/twitter.svg'
import Discord from '../../../assets/images/discord.svg'

import { useWindowWidth } from '../../../hooks/useWindowWidth'

import classes from './style.module.scss'

export const Footer = () => {
  const isDesktop = useWindowWidth(1024)
  return (
    <footer className={classes.footer}>
      <div className={classes.footerTopBlock}>
        <img src={isDesktop ? GradientLogo : FooterLogo} alt=""/>
        <hr className={classes.footerLine}/>
      </div>
      <div className={classes.linksContainer}>
        <div className={`${classes.linksBlock} ${classes.linksBlockLeftAlign}`}>
          <span>Terms</span>
          <span>Privacy</span>
        </div>
        <div className={`${classes.linksBlock} ${classes.linksBlockRightAlign}`}>
          <span>Whitepaper</span>
          <span>Litepaper</span>
        </div>
      </div>
      <div className={classes.socials}>
        <img src={Twitter} alt=""/>
        <img src={Discord} alt=""/>
      </div>
      <p className={classes.copyright}>
        Copyright © 2022 Metamorph Inc. All rights reserved.</p>
    </footer>
  )
}

export default Footer
