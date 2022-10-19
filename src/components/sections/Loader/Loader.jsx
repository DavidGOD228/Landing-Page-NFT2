import { useEffect, useState } from 'react';
import loaderTitle from 'assets/images/loader-title.png';
import classes from './style.module.scss';
import {motion} from 'framer-motion'

const maxCount = 100;
const duration = 5; // sec

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function Loader({ setIsloading }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 100) setIsloading(false);

    if (count < 100) {
      setTimeout(() => {
        if (maxCount - count <= maxCount / duration) return setCount(100);

        setCount(s => {
          const addNumLoadCount = randomIntFromInterval(1, maxCount / duration);
          return s + addNumLoadCount;
        });
      }, 1000);
    }
  }, [count, setIsloading]);

  return (
    <motion.div
      className={classes.loaderWrapper}
      initial={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
    >
      <div className={classes.loaderTitleBlock}>
        <div className={classes.shadow} />
        <img className={classes.loaderTitleImg} src={loaderTitle} alt="" />
      </div>
      <div
        className={classes.counterLoader}
      >
        {count}%
      </div>
    </motion.div>
  )
}
