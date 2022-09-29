import loaderTitle from 'assets/images/loader-title.png';
import CountUp from 'react-countup';
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
          <div className={classes.blik} />
          <img className={classes.loaderTitleImg} src={loaderTitle} alt="" />
        </div>
        <CountUp
          className={classes.counterLoader}
          duration={5}
          start={0}
          end={100}
          suffix={'%'}
          onEnd={() => setIsloading(false)}
        />
      </motion.div>
  )
}
