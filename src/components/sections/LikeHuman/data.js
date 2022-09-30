import React from 'react'

import Paragraph from '../../common/Paragraph/Paragraph'

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
    subtitle: <Paragraph>Hunger indicates that Morph is full. To
      feed
      Morph, it must interact with refrigerators, food markets, bars, restaurants, or anything else
      that can allow you to feed yourself in real life.</Paragraph>,
  },
  {
    id: 2,
    icon: <Energy width={14} height={28} color='#fff'/>,
    title: 'ENERGY',
    subtitle: <Paragraph>Indicates that Morph is tired, if it reaches
      zero, Morph can sleep. To meet this need, Morph must rest on the sofa or
      bed.</Paragraph>
  },
  {
    id: 3,
    icon: <Mask width={25} height={28} color='#fff'/>,
    title: 'SPIRIT',
    subtitle: <Paragraph>Morph may like different activities, depending
      on their nature: watching TV, playing a console, reading a book, listening to
      music.</Paragraph>
  },
  {
    id: 4,
    icon: <Communication width={30} height={28} color='#fff'/>,
    title: 'COMMUNICATION',
    subtitle: <Paragraph>Social relations and any interaction with
      other Morphs increases the level of this indicator, while it will decrease in case of betrayal
      or quarrels.</Paragraph>
  },
  {
    id: 5,
    icon: <Eco width={34} height={23} color='#fff'/>,
    title: 'HUNGER',
    subtitle: <Paragraph>Indicates anything related to the hygiene of a
      Morph. A low value leads to difficulties in social relationships. To meet this need,
      Morph must interact with the sink, tub or shower.</Paragraph>
  },
  {
    id: 6,
    icon: <Shower width={23} height={28} color='#fff'/>,
    title: 'hygiene',
    subtitle: <Paragraph>A well-kept and clean home increases this
      indicator, while accumulated waste, moldy foods, and faulty appliances reduce it. Some
      furniture and items (usually more expensive) can increase this indicator.</Paragraph>
  },
]

export const tableData = [
  {
    id: 1,
    icon: <Cutlery width={26} height={36} color='#fff'/>,
    title: 'HUNGER',
    subtitle: 'Hunger indicates that Morph is full. To feed Morph, it must interact with refrigerators, food markets, bars, restaurants, or anything elsethat can allow you to feed yourself in real life.',
  },
  {
    id: 2,
    icon: <Communication width={36.43} height={34} color='#fff'/>,
    title: 'COMMUNICATION',
    subtitle: 'Social relations and any interaction with other Morphs increases the level of this indicator, while it will decrease in case of betrayal or quarrels.'
  },
  {
    id: 3,
    icon: <Energy width={18} height={36} color='#fff'/>,
    title: 'ENERGY',
    subtitle: 'Indicates that Morph is tired, if it reaches zero, Morph can sleep. To meet this need, Morph must rest on the sofa or bed.'
  },
  {
    id: 4,
    icon: <Eco width={40} height={27} color='#fff'/>,
    title: 'HUNGER',
    subtitle: 'Indicates anything related to the hygiene of a Morph. A low value leads to difficulties in social relationships. To meet this need, Morph must interact with the sink, tub or shower.'
  },
  {
    id: 5,
    icon: <Mask width={32} height={36} color='#fff'/>,
    title: 'SPIRIT',
    subtitle: 'Morph may like different activities, depending on their nature: watching TV, playing a console, reading a book, listening to music.'
  },
  {
    id: 6,
    icon: <Shower width={31} height={38} color='#fff'/>,
    title: 'hygiene',
    subtitle: 'A well-kept and clean home increases this indicator, while accumulated waste, moldy foods, and faulty appliances reduce it. Some furniture and items (usually more expensive) can increase this indicator.'
  },
]
