import React from 'react'

import classes from './style.module.scss'

const Title = ({isAfterBorder = false, children, style, classname, classnameWrapper}) => {
  const isAfterBrd = isAfterBorder ? classes.isAfter : classes.isBefore;

  return (
    <div className={`${classes.content} ${isAfterBrd} ${classnameWrapper}`}>
      <h2 style={style} className={`${classes.title} ${classname}`}>{children}</h2>
    </div>
  )
}

export default Title
