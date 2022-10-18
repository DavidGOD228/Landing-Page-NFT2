import React  from 'react';
import CountUp from "react-countup";
import loaderTitle from 'assets/images/loader-title.png';
import classes from './style.module.scss';
import {motion} from 'framer-motion'

export function Loader({ setIsloading }) {

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
        <CountUp
          start={0}
          useEasing
          end={100}
          onEnd={() => setIsloading(false)}
          duration={5}
          suffix="%"
        >
          {({countUpRef}) => (
            <span className={classes.counterLoader} ref={countUpRef} />
          )}
        </CountUp>
      </motion.div>
  )
}
