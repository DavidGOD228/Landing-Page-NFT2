
import Slide from 'assets/images/mobile-slider/mobile-slider-1.png';
import classes from './style.module.scss'

export const Phone = ({classname, ...props}) => {
  return <img className={classes.phoneItem} {...props} src={Slide} alt="slide" />
}

export default Phone
