import React from 'react'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Paragraph from '../../common/Paragraph/Paragraph'
import AccordionWithIcon from '../../common/AccordionWithIcon/AccordionWithIcon'

import Cutlery from '../../icons/Cutlery'
import Energy from '../../icons/Energy'
import Mask from '../../icons/Mask'
import Communication from '../../icons/Communication'
import Eco from '../../icons/Eco'
import Shower from '../../icons/Shower'

import classes from './style.module.scss'

const accordionItems = [
  {
    id: 1,
    icon: <Cutlery color='#fff'/>,
    title: 'HUNGER',
    subtitle: 'Trace down unique items, obtain land, build, decorate residences and list them on the NFT marketplace. Put your favorite NFTs on display through our seamless 3D mapping system.',
  },
  {
    id: 2,
    icon: <Energy color='#fff'/>,
    title: 'ENERGY',
    subtitle: 'Trace down unique items, obtain land, build, decorate residences and list them on the NFT marketplace. Put your favorite NFTs on display through our seamless 3D mapping system.'
  },
  {
    id: 3,
    icon: <Mask color='#fff'/>,
    title: 'SPIRIT',
    subtitle: 'Trace down unique items, obtain land, build, decorate residences and list them on the NFT marketplace. Put your favorite NFTs on display through our seamless 3D mapping system.'
  },
  {
    id: 4,
    icon: <Communication color='#fff'/>,
    title: 'COMMUNICATION',
    subtitle: 'Trace down unique items, obtain land, build, decorate residences and list them on the NFT marketplace. Put your favorite NFTs on display through our seamless 3D mapping system.'
  },
  {
    id: 5,
    icon: <Eco color='#fff'/>,
    title: 'HUNGER',
    subtitle: 'Trace down unique items, obtain land, build, decorate residences and list them on the NFT marketplace. Put your favorite NFTs on display through our seamless 3D mapping system.'
  },
  {
    id: 6,
    icon: <Shower color='#fff'/>,
    title: 'hygiene',
    subtitle: 'Trace down unique items, obtain land, build, decorate residences and list them on the NFT marketplace. Put your favorite NFTs on display through our seamless 3D mapping system.'
  },
]

const LikeHuman = () => {

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Title>
          it’s just like a <GreenText>human</GreenText>
        </Title>
      </div>
      <div className={classes.content}>
        <Paragraph className={classes.paragraph}>Metamorph is an open-world exploration, NFT creature
          collector and life simulator game built on the Polygon Blockchain, releasing on IOS and
          Android in 2023. Play-to-earn in a graphically-rich sci-fi adventure and life builder that
          allows you to feel the life inside the game.
        </Paragraph>
        <div className={classes.accordionContainer}>
          {
            accordionItems.map(({id, icon, title, subtitle}) => <AccordionWithIcon key={id} icon={icon}
                                                                               title={title}
                                                                               subtitle={subtitle}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default LikeHuman
