import React from 'react'
import LazyLoad from 'react-lazy-load'
import { offset } from 'utils/lazyload'
import classes from './style.module.scss'


const Member = ({image, name, position, text, style}) => {
  return (
    <div style={{marginTop: style}}>
      <LazyLoad offset={offset}>
        <img src={image} alt=""/>
      </LazyLoad>
      <h3 className={classes.name}>{name}</h3>
      <h4 className={classes.position}>{position}</h4>
      {text}
    </div>
  )
}

export default Member
