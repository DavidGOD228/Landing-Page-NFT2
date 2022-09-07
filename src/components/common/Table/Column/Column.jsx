import React from 'react'

import classes from "./style.module.scss"

const Column = ({amount, text}) => {
  return (
    <div className={classes.column}>
      <span className={classes.amount}>{amount}</span>
      <p className={classes.text}>{text}</p>
    </div>
  )
}

export default Column
