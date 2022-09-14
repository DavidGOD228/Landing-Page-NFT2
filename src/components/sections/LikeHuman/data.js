import React from 'react'

import Paragraph from '../../common/Paragraph/Paragraph'
import Dot from '../../common/Dot/Dot'

import Cutlery from '../../icons/Cutlery'
import Energy from '../../icons/Energy'
import Mask from '../../icons/Mask'
import Communication from '../../icons/Communication'
import Eco from '../../icons/Eco'
import Shower from '../../icons/Shower'

import classes from './style.module.scss'

export const accordionData = [
  {
    id: 1,
    icon: <Cutlery width={20} height={28} color='#fff'/>,
    title: 'HUNGER',
    subtitle: <Paragraph className={classes.accordionSubtitle}>Hunger indicates that Morph is full<Dot/> To
      feed
      Morph, it must interact with refrigerators, food markets, bars, restaurants, or anything else
      that can allow you to feed yourself in real life<Dot/></Paragraph>,
  },
  {
    id: 2,
    icon: <Energy width={14} height={28} color='#fff'/>,
    title: 'ENERGY',
    subtitle: <Paragraph className={classes.accordionSubtitle}>Indicates that Morph is tired, if it reaches
      zero, Morph can sleep<Dot/> To meet this need, Morph must rest on the sofa or
      bed<Dot/></Paragraph>
  },
  {
    id: 3,
    icon: <Mask width={25} height={28} color='#fff'/>,
    title: 'SPIRIT',
    subtitle: <Paragraph className={classes.accordionSubtitle}>Morph may like different activities, depending
      on their nature: watching TV, playing a console, reading a book, listening to
      music<Dot/></Paragraph>
  },
  {
    id: 4,
    icon: <Communication width={30} height={28} color='#fff'/>,
    title: 'COMMUNICATION',
    subtitle: <Paragraph className={classes.accordionSubtitle}>Social relations and any interaction with
      other Morphs increases the level of this indicator, while it will decrease in case of betrayal
      or quarrels<Dot/></Paragraph>
  },
  {
    id: 5,
    icon: <Eco width={34} height={23} color='#fff'/>,
    title: 'HUNGER',
    subtitle: <Paragraph className={classes.accordionSubtitle}>Indicates anything related to the hygiene of a
      Morph<Dot/> A low value leads to difficulties in social relationships. To meet this need,
      Morph must interact with the sink, tub or shower<Dot/></Paragraph>
  },
  {
    id: 6,
    icon: <Shower width={23} height={28} color='#fff'/>,
    title: 'hygiene',
    subtitle: <Paragraph className={classes.accordionSubtitle}>A well-kept and clean home increases this
      indicator, while accumulated waste, moldy foods, and faulty appliances reduce it<Dot/> Some
      furniture and items (usually more expensive) can increase this indicator<Dot/></Paragraph>
  },
]

export const tableData = [
  {
    id: 1,
    icon: <Cutlery width={26} height={36} color='#fff'/>,
    title: 'HUNGER',
    subtitle: <Paragraph className={classes.columnSubtitle}>Hunger indicates that Morph is full<Dot/> To
      feed
      Morph, it must interact with refrigerators, food markets, bars, restaurants, or anything else
      that can allow you to feed yourself in real life<Dot/></Paragraph>,
  },
  {
    id: 2,
    icon: <Communication width={36.43} height={34} color='#fff'/>,
    title: 'COMMUNICATION',
    subtitle: <Paragraph className={classes.columnSubtitle}>Social relations and any interaction with
      other Morphs increases the level of this indicator, while it will decrease in case of betrayal
      or quarrels<Dot/></Paragraph>
  },
  {
    id: 3,
    icon: <Energy width={18} height={36} color='#fff'/>,
    title: 'ENERGY',
    subtitle: <Paragraph className={classes.columnSubtitle}>Indicates that Morph is tired, if it reaches
      zero, Morph can sleep<Dot/> To meet this need, Morph must rest on the sofa or
      bed<Dot/></Paragraph>
  },
  {
    id: 4,
    icon: <Eco width={40} height={27} color='#fff'/>,
    title: 'HUNGER',
    subtitle: <Paragraph className={classes.columnSubtitle}>Indicates anything related to the hygiene of a
      Morph<Dot/> A low value leads to difficulties in social relationships. To meet this need,
      Morph must interact with the sink, tub or shower<Dot/></Paragraph>
  },
  {
    id: 5,
    icon: <Mask width={32} height={36} color='#fff'/>,
    title: 'SPIRIT',
    subtitle: <Paragraph className={classes.columnSubtitle}>Morph may like different activities, depending
      on their nature: watching TV, playing a console, reading a book, listening to
      music<Dot/></Paragraph>
  },
  {
    id: 6,
    icon: <Shower width={31} height={38} color='#fff'/>,
    title: 'hygiene',
    subtitle: <Paragraph className={classes.columnSubtitle}>A well-kept and clean home increases this
      indicator, while accumulated waste, moldy foods, and faulty appliances reduce it<Dot/> Some
      furniture and items (usually more expensive) can increase this indicator<Dot/></Paragraph>
  },
]
