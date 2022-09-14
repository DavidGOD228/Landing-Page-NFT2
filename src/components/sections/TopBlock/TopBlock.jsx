import React from 'react'

import Header from '../Header/Header'

import TopBlockImage from '../../../assets/images/topBlockImage.png'
import MetaMorphMain from '../../../assets/images/metaMorphMain.svg'
import TopMorphDesktop from '../../../assets/images/topMorphDesktop.png'
import TopCardDesktop from '../../../assets/images/topCardDesktop.png'
import TopLeftCorner from '../../../assets/images/topBlock-leftCorner.png'
import TopRightCorner from '../../../assets/images/topBlock-rightCorner.png'
import BottomCorner from '../../../assets/images/topBlock-bottom.png'

import UnrealEngine from '../../icons/UnrealEngine'
import Polygon from '../../icons/Polygon'
import Play from '../../icons/Play'

import { useWindowWidth } from '../../../hooks/useWindowWidth'

import classes from './style.module.scss'


const TopBlock = () => {
  const isDesktop = useWindowWidth(1024)

  return (
    <div className={classes.topBlock}>
      <img className={classes.topLeftCorner} src={TopLeftCorner} alt=""/>
      <img className={classes.topRightCorner} src={TopRightCorner} alt=""/>
      <img className={classes.bottomCorner} src={BottomCorner} alt=""/>
      <Header/>
      <div className={classes.container}>
        <div className={classes.mainBlock}>
          {
            isDesktop && <img src={MetaMorphMain} alt=""/>
          }
          <div className={classes.playBtn}>
            <Play width={isDesktop ? 20 : 15} height={isDesktop ? 25 : 23} color='#fff'/>
            <p className={classes.playText}>Play teaser</p>
          </div>
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
          !isDesktop && <img className={classes.morphImage} src={TopBlockImage} alt=""/>
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
          isDesktop && <div className={classes.topBlockImages}>
            <img src={TopMorphDesktop} alt=""/>
            <img className={classes.morphDesktop} src={TopCardDesktop} alt=""/>
          </div>
        }
      </div>
    </div>
  )
}

export default TopBlock;
