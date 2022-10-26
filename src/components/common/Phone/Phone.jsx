import {useEffect, useRef} from "react";

import classes from './style.module.scss';

const videos = [
  {
    mp4: "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666084837/slider/Clothes_trzkil.mp4",
    webm: "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666084831/slider/Clothes_glxf1j.webm",
  },
  {
    mp4: "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666084836/slider/Furniture_r9g2t4.mp4",
    webm: "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666084828/slider/Furniture_m2jqbw.webm",
  },
  {
    mp4: "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666084839/slider/Job_nkdesb.mp4",
    webm: "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666084832/slider/Job_lkw0ak.webm",
  },
];
const isSafari = window.safari !== undefined;
export const Phone = ({ idx, classname, isActive, ...props }) => {

  const videoRef = useRef()
  useEffect(() => {
    if(isActive) {
      videoRef.current.play()
    }
    else videoRef.current.pause()

  }, [isActive])

  const srcVideo = isSafari
    ? videos[idx - 1].mp4
    : videos[idx - 1].webm

	return (
    <video
      ref={videoRef}
      className={classes.phoneItem}
      {...props}
      loop
      muted
      playsInline
      src={srcVideo}
    />
  );
};

export default Phone;
