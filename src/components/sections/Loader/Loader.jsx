import {useEffect, useState} from 'react';
import loaderTitle from 'assets/images/loader-title.png';
import classes from './style.module.scss';
import {motion} from 'framer-motion'


const LoaderText = ({activeSlide}) => {
  const topText = ['Watch your thoughts', 'Watch your words', 'Watch your actions', 'Watch your habits', 'Watch your character']
  const bottomText = ['they become words.', 'they become actions.', 'they become habits.', 'they become character.', 'it becomes your destiny.']

  const [isVisible, setVisible] = useState(false)
  const [isVisibleBottomText, setVisibleBottomText] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
    }, 600);

    return () => clearInterval(interval);
  }, [activeSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleBottomText(true)
    }, 1000);

    return () => clearInterval(interval);
  }, [activeSlide]);


  const renderTopText = () => {
    return <motion.p
      className={classes.loaderText}
      key={topText[activeSlide]}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut'
      }}
    >
      {topText[activeSlide]}
    </motion.p>
  }

  const renderBottomText = () => {
    return <motion.p
      className={`${classes.loaderText} ${classes.grayText}`}
      key={bottomText[activeSlide]}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 4,
        ease: 'easeInOut',
        delay: 1,
      }}
    >
      {bottomText[activeSlide]}
    </motion.p>
  }

  return (
    <> {
      <div style={{visibility: isVisible ? 'visible' : 'hidden'}}>
        {renderTopText()}
        {isVisibleBottomText ? renderBottomText() : null}
      </div>
    }
    </>
  )
}

export function Loader({setIsloading}) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide(activeSlide + 1);
    }, 2000);


    if (activeSlide === 4) {
      clearInterval(slideInterval)
      return;
    }

    return () =>
      clearInterval(slideInterval);
  }, [activeSlide]);

  const renderLine = (idx) => {
    return <motion.span
      className={classes.bottomLine}
      key={idx}
      initial={{
        backgroundColor: "#2F3339"
      }}
      animate={() => {
        if (idx <= activeSlide) return {
          backgroundColor: "#fff",
        }
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut'
      }}
    />
  }

  return (
    <div className={classes.loaderWrapper}>
      <LoaderText activeSlide={activeSlide}/>
      <div className={classes.bottomContainer}>
        {Array.from({length: 5}).map((line, index) =>
          renderLine(index))}
      </div>
    </div>
  )
}
