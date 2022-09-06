import React from 'react'

import FooterLogo from '../../../assets/images/footer-logo.svg'
import Twitter from '../../../assets/images/twitter.svg'
import Telegram from '../../../assets/images/telegram.svg'
import Discord from '../../../assets/images/discord.svg'
import Dot from '../../common/Dot/Dot'

import classes from './style.module.scss'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerTopBlock}>
        <img src={FooterLogo} alt=""/>
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
        <img src={Telegram} alt=""/>
        <img src={Discord} alt=""/>
      </div>
      <p className={classes.copyright}>
        Copyright © 2022 Metamorph Inc<Dot/> <br/>
        All rights reserved<Dot/></p>
    </footer>
  )
}

export default Footer
