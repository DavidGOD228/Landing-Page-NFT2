import React from 'react'

import {isWebpSupported} from 'react-image-webp/dist/utils';

import TopCardJpg from 'assets/images/topCardDesktop.jpg'
import TopCardWebp from 'assets/images/topCardDesktop.webp'

import TopMorpDesktopJpg from 'assets/images/topMorphDesktop.jpg'
import TopMorpDesktopWebp from 'assets/images/topMorphDesktop.webp'
import TopMorphMobile from 'assets/images/topBlockMobile.png'

import classes from './style.module.scss'
import {useWindowWidth} from "../../../../../hooks/useWindowWidth";

const MorphBlock = () => {
  const isDesktop = useWindowWidth(1024)

  const isWebpCard = isWebpSupported() ? TopCardWebp : TopCardJpg;
  const isWebpMorp = isWebpSupported() ? TopMorpDesktopWebp : TopMorpDesktopJpg;

  return (
    <div className={classes.topBlockImages}>
      {
        isDesktop ? <>
          <img className={classes.morph} src={isWebpMorp} alt=""/>
          <img className={classes.morphCard} src={isWebpCard} alt=""/>
        </> : <img className={classes.morphMobile} src={TopMorphMobile} alt=""/>
      }
    </div>
  )
}

export default MorphBlock
