import React from 'react'

import Phone from '../../../common/Phone/Phone'

import classes from './style.module.scss'

const Slider = ({sliderData}) => {
  return (
    <div className={classes.slider}>
        {sliderData.map((_, idx) => (
          <Phone key={idx} classname={classes.sliderItem} />
        ))}
    </div>
  )
}

export default Slider
