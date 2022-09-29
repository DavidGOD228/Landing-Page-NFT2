import cleaningPhone from 'assets/images/mobile-slider/cleaning-phone.png';
import eatPphone from 'assets/images/mobile-slider/eat-phone.png';
import playPhone from 'assets/images/mobile-slider/play-phone.png';
import restPhone from 'assets/images/mobile-slider/rest-phone.png';
import classes from './style.module.scss';

const imgs = [cleaningPhone, eatPphone, playPhone, restPhone];

export const Phone = ({ idx, classname, ...props }) => {
	return (
    <img className={classes.phoneItem} {...props} src={imgs[idx - 1]} alt='slide' />
  );
};

export default Phone;
