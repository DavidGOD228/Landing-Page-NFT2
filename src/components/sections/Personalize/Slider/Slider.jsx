import {Phone} from 'components';
import classes from './style.module.scss';
import {AnimatePresence, motion} from 'framer-motion';

const Slider = ({activeSlide, className}) => {

  const renderSLide = (idx) => {
    return <motion.div
      key={idx}
      initial={{
        scale: 1,
        marginRight: 20,
        opacity: 1,
        zIndex: idx
      }}
      animate={() => {
        // if slide is leaving
        if (idx < activeSlide) return {
          width: 0,
          scale: 0.85,
          opacity: 0,
          marginRight: 0,
          zIndex: idx
        }

        // if slide is current or next
        if (idx === activeSlide) return {
          zIndex: 1000,
          opacity: 1,
          scale: 1,
          transitionEnd: {
            display: 'hidden'
          }
        }
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut'
      }}
      viewport={{once: true}}
    >
      <Phone isActive={activeSlide === idx} idx={idx}/>
    </motion.div>;
  }

  return (
    <div className={`${classes.slider} ${className}`}>
      <div className={classes.shadow}/>
      <AnimatePresence>
        {renderSLide(1)}
        {renderSLide(2)}
        {renderSLide(3)}
      </AnimatePresence>
    </div>
  )
}

export default Slider
