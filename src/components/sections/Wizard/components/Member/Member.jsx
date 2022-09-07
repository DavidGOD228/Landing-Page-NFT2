import React from 'react'

import classes from './style.module.scss'

const Member = ({image, name, position, text, style}) => {
  return (
    <div style={{marginTop: style}}>
      <img src={image} alt=""/>
      <h3 className={classes.name}>{name}</h3>
      <h4 className={classes.position}>{position}</h4>
      {text}
    </div>
  )
}

export default Member
