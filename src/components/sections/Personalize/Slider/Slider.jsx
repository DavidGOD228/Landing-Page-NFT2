import { Phone } from 'components';
import classes from './style.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const Slider = ({ activeSlide, className }) => {

  const renderSLide = (idx) => {
    return <motion.div
      key={idx}
      initial={{
        opacity: 1, 
        scale: 1, 
        marginRight: 20,
        zIndex: idx
      }}
      animate={() => {
        // if slide is leaving
        if(idx < activeSlide) return {
          opacity: 0, 
          scale: 0.85,
          width: 0,
          marginRight: 0
        }

        // if slide is current or next
        if(idx === activeSlide) return {
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
    >
      <Phone classname={classes.sliderItem} />
    </motion.div>;
  }

  return (
    <div className={`${classes.slider} ${className}`}>
      {activeSlide !== 4 ? <div className={classes.shadow} /> : null}
        <AnimatePresence>
          {renderSLide(1)}
          {renderSLide(2)}
          {renderSLide(3)}
          {renderSLide(4)}
        </AnimatePresence>
    </div>
  )
}

export default Slider
