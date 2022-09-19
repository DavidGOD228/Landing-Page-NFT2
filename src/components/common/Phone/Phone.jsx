
import Slide from 'assets/images/mobile-slider/mobile-slider-1.png';
import classes from './style.module.scss'

export const Phone = ({classname, ...props}) => {
  return (
   <div className={classes.video} {...props}>
     <img src={Slide} alt="slide" />
   </div>
  )
}

export default Phone
