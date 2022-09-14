import React from 'react'

import classes from '../style.module.scss'

const Card = ({image, onClick, isActive}) => {
  return (
    <img className={`${isActive && classes.activeCard} ${classes.card}`} onClick={onClick} src={image} alt=""/>
  )
}

export default Card
