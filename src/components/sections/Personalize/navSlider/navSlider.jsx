import classes from './style.module.scss';
import ArrowLeft from "../../../icons/ArrowLeft";
import ArrowRight from "../../../icons/ArrowRight";

const navSlider = ({ handlePrevSlide, handleNextSlide, activeSlide, className, ...props }) => {
  return (
    <div className={`${classes.sliderNav} ${className}`} {...props}>
      <div className={classes.arrowSlider} onClick={handlePrevSlide}>
        <ArrowLeft />
      </div>
      
      <p className={classes.sliderCount}><span
        className={classes.activeSlide}>{activeSlide}</span>of 4</p>

      <div className={classes.arrowSlider} onClick={handleNextSlide}>
        <ArrowRight  />
      </div>
    </div>
  )
}

export default navSlider;
