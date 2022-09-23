import React from 'react'
import CountUp from 'react-countup'

import classes from './style.module.scss'

const Column = ({data, isGrayTable}) => {
  const {end, text, suffix, prefix} = data
  return (
    <CountUp
      delay={5}
      enableScrollSpy
      scrollSpyOnce
      end={end}
      duration={1}
      suffix={suffix ?? ''}
      prefix={prefix ?? ''}
    >
      {({countUpRef}) => (
        <div className={`${classes.column} ${isGrayTable && classes.grayColumn}`}>
          <span className={classes.amount} ref={countUpRef} />
          <p className={classes.text}>{text}</p>
        </div>
      )}
    </CountUp>
  )
}

export default Column
