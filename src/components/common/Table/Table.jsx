import React from 'react'

import Column from './Column/Column'

import classes from './style.module.scss'

export const Table = ({data, style, isGrayTable}) => {
  return (
    <div style={style} className={`${classes.table} ${isGrayTable && classes.grayTable}`}>
      {data.map((columnData, idx) => <Column key={idx} data={columnData} isGrayTable={isGrayTable}/>)}
    </div>
  )
}

export default Table
