import { motion } from "framer-motion";
import classes from './style.module.scss';

export const Title = ({isAfterBorder = false, children, style, classname, classnameWrapper}) => {
  const isAfterBrd = isAfterBorder ? classes.isAfter : classes.isBefore;

  
  return (
    <div className={`${classes.content} ${isAfterBrd} ${classnameWrapper}`}>
      <motion.div 
        className={classes.line}
        initial={{
          height: 0,
          width: 0,
        }}
        whileInView={{
          height: '95%',
          width: 3,
        }}
        transition={{
          duration: 1,
          delay: 0.25,
          origin: 1,
          ease: 'easeOut'
        }}
      />
      <div className={classes.shadowUnderLine} />
      <h2 style={style} className={`${classes.title} ${classname}`}>
        {children}
      </h2>
    </div>
  )
}

export default Title
