import React from 'react'

import classes from './style.module.scss'
import Circle from '../../../../../assets/images/circle.svg'

const ListItem = ({text}) => {
  return (
    <div className={classes.list}>
      <img className={classes.circle} src={Circle} alt=""/>
      {text}
    </div>
  )
}

export default ListItem
