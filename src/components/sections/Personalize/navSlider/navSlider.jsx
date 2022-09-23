import classes from './style.module.scss';
import Arrow from 'assets/images/mobile-slider/arrow.svg';

const navSlider = ({ handlePrevSlide, handleNextSlide, activeSlide, className, ...props }) => {
  return (
    <div className={`${classes.sliderNav} ${className}`} {...props}>
      <div className={classes.arrowSlider} onClick={handlePrevSlide}>
        <img src={Arrow} alt="" />
      </div>
      
      <p className={classes.sliderCount}><span
        className={classes.activeSlide}>{activeSlide}</span>of 4</p>

      <div className={`${classes.arrowSlider} ${classes.flip}`} onClick={handleNextSlide}>
        <img src={Arrow} alt="" />
      </div>
    </div>
  )
}

export default navSlider;
