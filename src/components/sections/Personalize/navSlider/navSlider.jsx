import { useState } from 'react';
import classes from './style.module.scss';
import Arrow from 'assets/images/mobile-slider/arrow.svg';

const NavSlider = ({
	handlePrevSlide,
	handleNextSlide,
	activeSlide,
	className,
	...props
}) => {
	const [isClickLeftBtn, setIsClickLeftBtn] = useState(false);
	const [isClickRightBtn, setIsClickRightBtn] = useState(false);

	const pressLeftBtn = () => {
    setIsClickLeftBtn(true);
    setTimeout(() => setIsClickLeftBtn(false), 250);
    handlePrevSlide();
  };
	const pressRightBtn = () => {
    setIsClickRightBtn(true);
    setTimeout(() => setIsClickRightBtn(false), 250);
    handleNextSlide();
  };

	return (
		<div className={`${classes.sliderNav} ${className}`} {...props}>
			<div
				onClick={pressLeftBtn}
				className={`${classes.arrowSlider} ${isClickLeftBtn && classes.animateByClick}`}
			>
				<img src={Arrow} alt='' />
			</div>

			<p className={classes.sliderCount}>
				<span className={classes.activeSlide}>{activeSlide}</span>of 3
			</p>

			<div
				className={`${classes.arrowSlider} ${classes.flip}  ${isClickRightBtn && classes.animateByClick}`}
				onClick={pressRightBtn}
			>
				<img src={Arrow} alt='' />
			</div>
		</div>
	);
};

export default NavSlider;
