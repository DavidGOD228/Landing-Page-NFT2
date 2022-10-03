import React, {useState} from 'react'
import {DefaultPlayer as Video} from 'react-html5video';

import Header from '../Header/Header'
import MetaMorphMobile from '../../../assets/images/metaMorphMobile.png'
import MetaMorphMain from 'assets/images/metaMorphMain.png'
import TeaserVideo from 'assets/video/teaser.video.mp4';
import Close from 'assets/images/close.svg'
import MorphBlock from "../Header/components/MorphBlock/MorphBlock";

import UnrealEngine from '../../icons/UnrealEngine'
import Polygon from '../../icons/Polygon'
import Play from '../../icons/Play'

import {useWindowWidth} from 'hooks/useWindowWidth'

import LazyLoad from 'react-lazy-load';

import classes from './style.module.scss'
import 'react-html5video/dist/styles.css'
import DesktopSplashes from "./components/DesktopSplashes/DesktopSplashes";
import { offset } from 'utils/lazyload';
import MobileSplashes from "./components/MobileSplashes/MobileSplashes";

import { Parallax } from 'react-scroll-parallax';
const speedParallax = 20;

export const TopBlock = () => {
  const isDesktop = useWindowWidth(1024)
  const [isVideoOpen, setVideoOpen] = useState(false)

  return (
    <div id="game">
      {isVideoOpen ? <div className={classes.videoBlock}>
          <button onClick={() => setVideoOpen(false)} className={classes.closeBtn}>
            <LazyLoad offset={offset}>
              <img src={Close} alt=""/>
            </LazyLoad>
          </button>
          <LazyLoad offset={offset}>
            <Video autoPlay loop muted controls={['PlayPause', 'Seek', 'Time', 'Volume']}>
              <source src={TeaserVideo}/>
            </Video>
          </LazyLoad>
        </div> :
        <div className={classes.topBlock}>
          <Header/>
          {isDesktop && <Parallax speed={-speedParallax / 1.5}>
             <DesktopSplashes/>
          </Parallax>}
          {!isDesktop && <Parallax speed={speedParallax * 4} translateY={0}>
            <MobileSplashes className={classes.topBlockMobileSplashes}/>
          </Parallax>}
          <Parallax speed={speedParallax} className={classes.container}>
            <div className={classes.mainBlock}>
              {
                isDesktop && <LazyLoad offset={offset}><img className={classes.metaMorphMain} src={MetaMorphMain} alt=""/></LazyLoad>
              }
              {
                isDesktop ? <div className={classes.playBtn} onClick={() => setVideoOpen(true)}>
                  <Play width={isDesktop ? 20 : 15} height={isDesktop ? 25 : 23} color='#fff'/>
                  <p className={classes.playText}>Watch Teaser</p>
                </div> : <LazyLoad offset={offset}><img className={classes.metaMorphMobile} src={MetaMorphMobile} alt=""/></LazyLoad>
              }
              {
                isDesktop && <div className={classes.builtOnContainer}>
                  <span className={classes.builtOn}>Built on</span>
                  <div className={classes.builtBy}>
                    <UnrealEngine color='#A7ACB0' width={70} height={78}/>
                    <span className={classes.builtOnLine}></span>
                    <Polygon color="#A7ACB0" width={65} height={76}/>
                  </div>
                </div>
              }
            </div>
            {
              !isDesktop && <MorphBlock/>
            }
            {
              !isDesktop && <div className={classes.builtOnContainer}>
                <span className={classes.builtOn}>Built on</span>
                <div className={classes.builtBy}>
                  <UnrealEngine color="#C1C0C0" width={54} height={60}/>
                  <span className={classes.builtOnLine}></span>
                  <Polygon color="#C1C0C0" width={50} height={59}/>
                </div>
              </div>
            }
            {
              isDesktop && <MorphBlock/>
            }
          </Parallax>
        </div>
      }

    </div>
  )
}

export default TopBlock;
