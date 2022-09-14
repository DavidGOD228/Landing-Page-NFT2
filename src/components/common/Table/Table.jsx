import React from 'react'

import Column from './Column/Column'

import classes from './style.module.scss'

const Table = ({data, style}) => {
  return (
    <div style={style} className={classes.table}>
      {data.map(columnData => <Column data={columnData}/>)}
    </div>
  )
}

export default Table
