import React from 'react'
import LazyLoad from 'react-lazy-load';

import FooterLogo from 'assets/images/footer-logo.svg'
import GradientLogo from 'assets/images/gradientLogo.svg'
import Twitter from 'assets/images/twitter.svg'
import Discord from 'assets/images/discord.svg'

import { useWindowWidth } from 'hooks/useWindowWidth'

import classes from './style.module.scss'
import { offset } from 'utils/lazyload';

export const Footer = () => {
  const isDesktop = useWindowWidth(1024)
  return (
    <footer className={classes.footer}>
      <div className={classes.footerTopBlock}>
        <LazyLoad offset={offset}>
          <img src={isDesktop ? GradientLogo : FooterLogo} alt=""/>
        </LazyLoad>
        <hr className={classes.footerLine}/>
      </div>
      <div className={classes.linksContainer}>
        <div className={`${classes.linksBlock} ${classes.linksBlockLeftAlign}`}>
          <span>Terms</span>
          <span>Privacy</span>
        </div>
        <div className={`${classes.linksBlock} ${classes.linksBlockRightAlign}`}>
          <a href="https://metamorphbio.gitbook.io/metamorph/" target="_blank" rel="noreferrer">Whitepaper</a>
          <a href="https://docsend.com/view/vnrndawmaqbdamzh/" target="_blank" rel="noreferrer">Litepaper</a>
        </div>
      </div>
      <div className={classes.socials}>
        <LazyLoad offset={offset}>
          <a href="https://twitter.com/metamorphbio" target="_blank" rel="noreferrer">
            <img src={Twitter} alt=""/>
          </a>
        </LazyLoad>
        <LazyLoad offset={offset}>
          <a href="https://discord.gg/F8zDKSFrDJ" target="_blank" rel="noreferrer">
            <img src={Discord} alt=""/>
          </a>
        </LazyLoad>
      </div>
      <p className={classes.copyright}>
        Copyright © 2022 Metamorph Inc. All rights reserved.</p>
    </footer>
  )
}

export default Footer
