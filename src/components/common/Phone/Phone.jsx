import cleaningPhone from 'assets/images/mobile-slider/cleaning-phone.png';
import eatPphone from 'assets/images/mobile-slider/eat-phone.png';
import playPhone from 'assets/images/mobile-slider/play-phone.png';
import restPhone from 'assets/images/mobile-slider/rest-phone.png';

import jobVideoMp4 from 'assets/video/job-clothes-furniture/Job.mp4';
import jobVideoWebm from 'assets/video/job-clothes-furniture/Job.webm';

import clothesVideoMp4 from 'assets/video/job-clothes-furniture/Clothes.mp4';
import clothesVideoWebm from 'assets/video/job-clothes-furniture/Clothes.webm';

import furnitureVideoMp4 from 'assets/video/job-clothes-furniture/Furniture.mp4';
import furnitureVideoWebm from 'assets/video/job-clothes-furniture/Furniture.webm';


import classes from './style.module.scss';

// const imgs = [cleaningPhone, eatPphone, playPhone, restPhone];
const videos = [
  {
    mp4: clothesVideoMp4,
    webm: clothesVideoWebm,
  },
  {
    mp4: furnitureVideoMp4,
    webm: furnitureVideoWebm,
  },
  {
    mp4: jobVideoMp4,
    webm: jobVideoWebm,
  },
];

export const Phone = ({ idx, classname, ...props }) => {
	return (
    // <img className={classes.phoneItem} {...props} src={imgs[idx - 1]} alt='slide' />
    <video
      className={classes.phoneItem}
      {...props}
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={videos[idx - 1].webm} type="video/webm" />
      <source src={videos[idx - 1].mp4} type="video/mp4" />
    </video>
  );
};

export default Phone;
