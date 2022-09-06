import React from 'react'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Paragraph from '../../common/Paragraph/Paragraph'
import ListItem from './components/ListItem/ListItem'

import classes from './style.module.scss'

const list = [
  {
    id: 1,
    color: '#ACE402',
    text: 'Costruisci comunità per vivere le tue idee più sfrenate con soldi veri sul tavolo.'
  },
  {
    id: 2,
    color: '#959AA3',
    text: 'Costruisci comunità per vivere le tue idee più sfrenate con soldi veri sul tavolo.'
  },
  {
    id: 3,
    color: '#FFF',
    text: 'Costruisci comunità per vivere le tue idee più sfrenate con soldi veri sul tavolo.'
  },
]

const Freedom = () => {
  return (
    <div className={classes.container}>
      <div className={classes.topContent}>
        <Title classname={classes.title}>
          <p className={classes.chineseText}>全部的 自由 行動的</p>
          <p className={classes.total}>TOTAL <GreenText classname={classes.greenText}>FREEDOM
            of ACTION </GreenText></p>
        </Title>
        <Paragraph className={classes.paragraph}>
          Metamorph is built on putting the power of choice into the hands of players. All in game
          actions are governed by you, with no artificial barriers. We empower you to create your
          unique story by participating in a world where we expect the unexpected. From moral
          actions
          to investments, crusades, businesses operations and gambling – you have the choice play
          and
          earn in a style you enjoy.
        </Paragraph>
      </div>
      <div className={classes.listContainer}>
        {
          list.map(({id, color, text}) => <ListItem key={id} color={color} text={text}/>)
        }
      </div>
    </div>
  )
}

export default Freedom
