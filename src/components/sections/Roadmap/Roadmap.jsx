import React from 'react'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Paragraph from '../../common/Paragraph/Paragraph'
import Dot from '../../common/Dot/Dot'

import classes from './style.module.scss'

const Roadmap = () => {
  return (
    <div className={classes.wrapper}>
      <Title style={{textTransform: 'initial'}}>
        <GreenText style={{textTransform: 'initial'}}>We are </GreenText>running!
      </Title>
      <Paragraph className={classes.paragraph}>
        The game offers 2 experience scenarios based on the starting Morph ID card a player chooses<Dot/>
        Each scenario satisfies different game modes<Dot/> Classique card is more suitable for explorers
        and the Eternal one for true competition lovers<Dot/>
      </Paragraph>
    </div>
  )
}

export default Roadmap
