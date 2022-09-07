import React from 'react'

import Column from './Column/Column'

import classes from "./style.module.scss"

const Table = ({data, style}) => {
  return (
    <div style={style} className={classes.table}>
      {
        data.map(({amount, text}) => <Column amount={amount} text={text}/>)
      }
    </div>
  )
}

export default Table
