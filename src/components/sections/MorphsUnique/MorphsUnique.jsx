import React from 'react'

import Title from "../../common/Title/Title"

import Skull from '../../../assets/images/skull.svg'
import Slime from '../../../assets/images/slime.svg'
import Bricks from '../../../assets/images/bricks.svg'
import Fish from '../../../assets/images/fish.svg'
import Chain from '../../../assets/images/chain.svg'
import Morph from '../../../assets/images/unique-morphs.png'

import classes from './style.module.scss'

const MorphsUnique = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Title classname={classes.title}>
          ALL MORPHS ARE UNIQUE
        </Title>
        <p className={classes.paragraph}>
          MM takes you back to what makes a truly exciting MMORPG. You make the rules. Buy yourself
          a house, furnish it, dress up your Morph, find them a job and make them earn. Invest in
          its growth or make a fortune. Everything is alright.
        </p>
      </div>
      <div className={classes.icons}>
        <img className={classes.inactiveImage} src={Skull} alt=""/>
        <img className={classes.inactiveImage} src={Slime} alt=""/>
        <img className={classes.inactiveImage} src={Bricks} alt=""/>
        <img src={Fish} alt=""/>
        <img className={classes.inactiveImage} src={Chain} alt=""/>
      </div>
      <img className={classes.morphImage} src={Morph} alt=""/>
    </div>
  )
}

export default MorphsUnique
