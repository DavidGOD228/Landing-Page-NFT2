import React from 'react'

import CDProjectRed from "../../icons/CDProjectRed";

import EA from "../../icons/EA";
import { useWindowWidth } from "../../../hooks/useWindowWidth"
import Ubisoft from "../../icons/Ubisoft";
import LKWD from "../../icons/LKWD";
import Garena from "../../icons/Garena";
import Valve from "../../icons/Valve";
import SuperCell from "../../icons/SuperCell";

import classes from './style.module.scss'
import DesktopSplashes from "./components/DesktopSplashes/DesktopSplashes";
import MobileSplashes from "./components/MobileSplashes/MobileSplashes";

import { Parallax } from 'react-scroll-parallax';
const speedParallax = 20;

export const CombinedGame = () => {
  const isDesktop = useWindowWidth(1024)
  return (
    <div className={classes.container}>
      {isDesktop && 
      // <Parallax speed={-speedParallax / 2}>
        <DesktopSplashes/>
      // </Parallax>
      }
      {!isDesktop && 
      // <Parallax speed={50} translateY={10}>
        <MobileSplashes />
      // </Parallax>
      }
      {/* <Parallax speed={isDesktop ? 1 : -1}> */}
        <h4 className={classes.title}>Combined game experience</h4>
        <div className={classes.companies}>
          <EA width={isDesktop ? 143: 80} height={isDesktop ? 70 : 40}/>
          <CDProjectRed width={isDesktop ? 88: 49} height={isDesktop ? 140 : 78}/>
          <Ubisoft width={isDesktop ? 147: 82} height={isDesktop ? 108 : 60}/>
          <LKWD width={isDesktop ? 67: 39} height={isDesktop ? 140 : 78}/>
          <Garena width={isDesktop ? 106: 55} height={isDesktop ? 82 : 43}/>
          <Valve width={isDesktop ? 197: 110} height={isDesktop ? 55 : 31}/>
          <SuperCell width={isDesktop ? 86: 49} height={isDesktop ? 77 : 44}/>
        </div>
      {/* </Parallax> */}
    </div>
  )
}

export default CombinedGame
