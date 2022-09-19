import Phone from '../../../common/Phone/Phone'

import classes from './style.module.scss'

const videos = [
  "name video from asset",
  "name video from asset",
  "name video from asset",
  "name video from asset",
]

const Slider = ({ activeSlide, className }) => {

  return (
    <div className={`${classes.slider} ${className}`}>
      <div className={classes.shadow} />
      {videos.map((item, idx) => {
        if(idx + 1 < activeSlide) return <></>;

        return <Phone key={idx} classname={classes.sliderItem} />
      })}
    </div>
  )
}

export default Slider
