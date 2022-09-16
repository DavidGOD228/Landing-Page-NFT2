import React from 'react'

import classes from './style.module.scss'

const Column = ({data}) => {
  const {headerText, year, title, subtitle, borderColor, headerBackgroundColor, isComingSoon} = data
  return (
    <div style={{ borderLeft: `1px solid ${borderColor}`}}>
      <div style={{background: headerBackgroundColor}} className={classes.header}>
        <h3 className={classes.headerText}>{headerText}</h3>
        <span style={{color: headerBackgroundColor && '#0B0B0C'}} className={classes.year}>{year}</span>
      </div>
      <div className={classes.content}>
        <h4 className={classes.title}>{title}</h4>
        <div className={classes.subtitle}>{subtitle}</div>
        {
          isComingSoon && <p className={classes.comingSoon}>Coming soon...</p>
        }
      </div>
    </div>
  )
}

export default Column
