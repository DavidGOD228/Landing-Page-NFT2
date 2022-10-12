import { Phone } from 'components';
import classes from './style.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const Slider = ({ activeSlide, className }) => {

  const renderSLide = (idx) => {
    return <motion.div
      key={idx}
      initial={{
        scale: 1,
        marginRight: 20,
        opacity: 1,
      }}
      animate={() => {
        // if slide is leaving
        if(idx < activeSlide) return {
          transform: 'matrix(0.9, 0, 0, 0.9, 0, 0)',
          width: 0,
          opacity: 0,
          marginRight: 0,
        }

        // if slide is current or next
        if(idx === activeSlide) return {
          transform: 'matrix(1, 0, 0, 1, 0, 0)',
          zIndex: 1000,
          opacity: 1,
        }
      }}
      transition={{
        duration: .7,
        ease: 'easeInOut'
      }}
      viewport={{ once: true }}
    >
      <Phone isActive={activeSlide === idx} idx={idx} />
    </motion.div>;
  }

  return (
    <div className={`${classes.slider} ${className}`}>
       {activeSlide !== 4 ? <div className={classes.shadow} /> : null}
      <AnimatePresence>
        {renderSLide(1)}
        {renderSLide(2)}
        {renderSLide(3)}
      </AnimatePresence>
    </div>
  )
}

export default Slider
