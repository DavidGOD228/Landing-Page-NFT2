import React from 'react'

import Column from './Column/Column'

import classes from './style.module.scss'

export const Table = ({data, style}) => {
  return (
    <div style={style} className={classes.table}>
      {data.map((columnData, idx) => <Column key={idx} data={columnData}/>)}
    </div>
  )
}

export default Table
