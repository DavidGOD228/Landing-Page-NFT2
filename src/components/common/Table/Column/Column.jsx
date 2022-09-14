import React from 'react'
import CountUp from 'react-countup'

import classes from './style.module.scss'

const Column = ({data}) => {
  const {end, text, suffix, prefix} = data
  return (
    <CountUp
      enableScrollSpy
      scrollSpyOnce
      end={end}
      duration={1}
      suffix={suffix ?? ''}
      prefix={prefix ?? ''}
    >
      {({countUpRef}) => (
        <div className={classes.column}>
          <span className={classes.amount} ref={countUpRef} />
          <p className={classes.text}>{text}</p>
        </div>
      )}
    </CountUp>
  )
}

export default Column
