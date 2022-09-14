import React from 'react'

import Header from '../Header/Header'

import TopBlockImage from '../../../assets/images/topBlockImage.png'
import MetaMorphMain from '../../../assets/images/metaMorphMain.svg'
import TopBlockDesktop from '../../../assets/images/topBlockDesktop.png'
import TopMorphDesktop from '../../../assets/images/topMorphDesktop.png'
import TopCardDesktop from '../../../assets/images/topCardDesktop.png'

import UnrealEngine from '../../icons/UnrealEngine'
import Polygon from '../../icons/Polygon'
import Play from '../../icons/Play'

import { useWindowWidth } from '../../../hooks/useWindowWidth'

import classes from './style.module.scss'


const TopBlock = () => {
  const isDesktop = useWindowWidth(1024)

  return (
    <div className={classes.topBlock}>
      <Header/>
      <div className={classes.container}>
        <div className={classes.mainBlock}>
          {
            isDesktop ? <img src={MetaMorphMain} alt=""/> :
              <h1 className={classes.mainText}>it’s like sims, but better.</h1>
          }
          <div className={classes.playBtn}>
            <Play width={isDesktop ? 20 : 13} height={isDesktop ? 25 : 19} color='#fff'/>
            <p className={classes.playText}>Watch Teaser</p>
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
              <UnrealEngine color="#737373" width={47} height={49}/>
              <span className={classes.builtOnLine}></span>
              <Polygon color="#737373" width={43} height={49}/>
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
