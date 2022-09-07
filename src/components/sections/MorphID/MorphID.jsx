import React from 'react'

import Title from "../../common/Title/Title"
import GreenText from "../../common/GreenText/GreenText"
import Paragraph from "../../common/Paragraph/Paragraph"
import Dot from "../../common/Dot/Dot"

import One from '../../../assets/images/one.svg'
import Two from '../../../assets/images/two.svg'
import MihoMorph from '../../../assets/images/miho-morph.png'
import MihoID from '../../../assets/images/miho-id.png'
import HenriMorph from '../../../assets/images/henri-morph.png'
import HenriID from '../../../assets/images/henri-id.png'

import classes from './style.module.scss'

const MorphId = () => {
  return (
    <div>
      <div className={classes.titleWrapper}>
        <Title classname={classes.title}>
          Morph <br/> <GreenText>id </GreenText>
          <span className={classes.chineseText}>變形 </span>
          <span className={classes.chineseText}>相同的代碼 </span>
        </Title>
      </div>
      <Paragraph className={classes.paragraph}>
        Buy and sell your assets and services on the METAMORPH Marketplace, both in and outside the
        game<Dot/>
      </Paragraph>
      <p className={`${classes.chineseText} ${classes.waysToStartChinese}`}>2 種 方式開始</p>
      <p className={classes.waysToStartEnglish}>2 ways to start</p>
      <Paragraph className={classes.italianBigText}>
        Metamorph è un avventura dinamica giocabile in terza persona di genere life simulator
        ambientato nel mondo virtuale Fata Morgana<Dot/> Il personaggio giocabile chiamatosi
        Surrogate è
        ampliamente personalizzabile con atributi
      </Paragraph>
      <hr className={classes.line}/>
      <div className={classes.classiqueBlock}>
        <div className={classes.classiqueContent}>
          <p className={classes.classiqueParagraph}>
            <img className={classes.classiqueBorder} src={One} alt=""/>
            <h4 className={classes.classiqueTitle}>CLASSIQUE</h4>
          </p>
          <Paragraph className={classes.mihoText}>
            Metamorph è un avventura dinamica giocabile in terza persona di genere life simulator
            ambientato nel mondo virtuale Fata Morgana<Dot/>
          </Paragraph>
          <img className={classes.mihoIDImage} src={MihoID} alt=""/>
        </div>
        <img className={classes.mihoMainImage} src={MihoMorph} alt=""/>
      </div>
      <div className={classes.eternalBlock}>
        <img src={HenriMorph} alt=""/>
        <div className={classes.eternalContent}>
          <p className={classes.eternalParagraph}>
            <img className={classes.eternalBorder} src={Two} alt=""/>
            <h4 style={{color: "#B7F201"}} className={classes.eternalTitle}>ETERNAL</h4>
          </p>
          <Paragraph className={classes.henriText}>
            Metamorph è un avventura dinamica giocabile in terza persona di genere life simulator
            ambientato nel mondo virtuale Fata Morgana<Dot/>
          </Paragraph>
          <img className={classes.henriIDImage} src={HenriID} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default MorphId
