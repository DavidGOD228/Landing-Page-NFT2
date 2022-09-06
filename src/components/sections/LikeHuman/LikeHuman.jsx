import React from 'react'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Paragraph from '../../common/Paragraph/Paragraph'
import AccordionWithIcon from '../../common/AccordionWithIcon/AccordionWithIcon'
import Dot from '../../common/Dot/Dot'

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
    subtitle: <Paragraph className={classes.subtitle}>Trace down unique items, obtain land, build, decorate residences and list them on the NFT marketplace<Dot/> Put your favorite NFTs on display through our seamless 3D mapping system<Dot/></Paragraph>,
  },
  {
    id: 2,
    icon: <Energy color='#fff'/>,
    title: 'ENERGY',
    subtitle: <Paragraph className={classes.subtitle}>Trace down unique items, obtain land, build, decorate residences and list them on the NFT marketplace<Dot/> Put your favorite NFTs on display through our seamless 3D mapping system<Dot/></Paragraph>
  },
  {
    id: 3,
    icon: <Mask color='#fff'/>,
    title: 'SPIRIT',
    subtitle: <Paragraph className={classes.subtitle}>Trace down unique items, obtain land, build, decorate residences and list them on the NFT marketplace<Dot/> Put your favorite NFTs on display through our seamless 3D mapping system<Dot/></Paragraph>
  },
  {
    id: 4,
    icon: <Communication color='#fff'/>,
    title: 'COMMUNICATION',
    subtitle: <Paragraph className={classes.subtitle}>Trace down unique items, obtain land, build, decorate residences and list them on the NFT marketplace<Dot/> Put your favorite NFTs on display through our seamless 3D mapping system<Dot/></Paragraph>
  },
  {
    id: 5,
    icon: <Eco color='#fff'/>,
    title: 'HUNGER',
    subtitle: <Paragraph className={classes.subtitle}>Trace down unique items, obtain land, build, decorate residences and list them on the NFT marketplace<Dot/> Put your favorite NFTs on display through our seamless 3D mapping system<Dot/></Paragraph>
  },
  {
    id: 6,
    icon: <Shower color='#fff'/>,
    title: 'hygiene',
    subtitle: <Paragraph className={classes.subtitle}>Trace down unique items, obtain land, build, decorate residences and list them on the NFT marketplace<Dot/> Put your favorite NFTs on display through our seamless 3D mapping system<Dot/></Paragraph>
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
          Android in 2023<Dot/> Play-to-earn in a graphically-rich sci-fi adventure and life builder that
          allows you to feel the life inside the game<Dot/>
        </Paragraph>
        <div className={classes.accordionContainer}>
          {
            accordionItems.map(({id, icon, title, subtitle}) => <AccordionWithIcon key={id} icon={icon} title={title} subtitle={subtitle}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default LikeHuman
