import React from 'react'

import Jabbi from 'assets/images/morphs/jabbi/jabbi-card.png'
import Camila from 'assets/images/morphs/camila/camila-card.png'
import Jack from 'assets/images/morphs/jack/jack-card.png'

import classes from './style.module.scss'

const HiddenCards = () => {
  return (
    <div className={classes.container}>
      <img src={Jabbi} alt=""/>
      <img src={Camila} alt=""/>
      <img src={Jack} alt=""/>
    </div>
  )
}

export default HiddenCards
