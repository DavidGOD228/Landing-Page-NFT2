import React from 'react'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Paragraph from '../../common/Paragraph/Paragraph'
import Dot from '../../common/Dot/Dot'
import Column from './components/Column/Column'

import {useWindowWidth} from '../../../hooks/useWindowWidth'
import {roadmapTableData} from './data/running'

import AppStore from '../../../assets/images/appStore.svg'
import GooglePlay from '../../../assets/images/googlePlay.png'

import classes from './style.module.scss'

const Roadmap = () => {
  const iSDesktop = useWindowWidth(1024)
  return (
    <>
      <div className={classes.wrapper}>
        <Title classname={classes.title} style={{textTransform: !iSDesktop && 'initial'}}>
          <GreenText style={{textTransform: !iSDesktop && 'initial'}}>We are </GreenText>running!
        </Title>
        <Paragraph className={classes.paragraph}>
          A dreamer is one who can find his way in the moonlight and see the sunrise before the rest of the world<Dot/>
        </Paragraph>
      </div>
      {
        iSDesktop && <div className={classes.table}>
          {
            roadmapTableData.map((data) => <Column key={data.title} data={data}/>)
          }
          <div className={classes.appColumn}>
            <div className={classes.header}/>
            <div className={classes.appContent}>
              <p className={classes.playGameOn}>Play game on:</p>
              <div className={classes.appBtnContainer}>
                <div className={classes.appBtn}>
                  <img src={AppStore} alt=""/>
                  <span className={classes.appText}>App Store</span>
                </div>
                <div className={classes.appBtn}>
                  <img src={GooglePlay} alt=""/>
                  <span className={classes.appText}>Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Roadmap
