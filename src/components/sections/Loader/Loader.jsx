import {useEffect, useState} from 'react';
import loaderTitle from 'assets/images/loader-title.png';
import classes from './style.module.scss';
import {motion} from 'framer-motion'

const outAnimation = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1
  },
}

const inAnimation = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1
  },
}

const LoaderText = ({
                      isBottomStatic,
                      isTopStatic,
                      isNewTopText,
                      isNewBottomText,
                      topText,
                      bottomText,
                      isTopOut,
                      isBottomOut
                    }) => {

  const renderTopText = () => {
    if (isNewTopText) {
      return <motion.p
        className={classes.loaderText}
        key={topText}
        {...inAnimation}
        transition={{
          duration: .3,
          ease: 'easeOut',
        }}
      >
        {topText}
      </motion.p>
    } else if (isTopStatic) {
      return <p className={classes.loaderText}>
        {topText}
      </p>
    } else if (isTopOut) {
      return <motion.p
        className={classes.loaderText}
        key={topText}
        {...outAnimation}
        transition={{
          duration: .3,
          ease: 'easeOut'
        }}
      >
        {topText}
      </motion.p>
    }
  }

  const renderBottomText = () => {
    if (isNewBottomText) {
      return <motion.p
        className={`${classes.loaderText} ${classes.grayText}`}
        key={bottomText}
        {...inAnimation}
        transition={{
          duration: .3,
          ease: 'easeOut',
          delay: .3,
        }}
      >
        {bottomText}
      </motion.p>
    } else if (isBottomStatic) {
      return <p className={`${classes.loaderText} ${classes.grayText}`}>
        {bottomText}
      </p>
    } else if(isBottomOut) {
      return <motion.p
        className={`${classes.loaderText} ${classes.grayText}`}
        key={bottomText}
        {...outAnimation}
        transition={{
          duration: .3,
          ease: 'easeOut'
        }}
      >
        {bottomText}
      </motion.p>
    }
  }

  return (<>
      {renderTopText()}
      {renderBottomText()}
    </>
  )
}


export function Loader({setIsloading}) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {

    const time = activeSlide % 2 === 0 ? 300 : 1500
    const slideInterval = setInterval(() => {
      setActiveSlide(activeSlide + 1);
    }, time);

    if (activeSlide === 10) {
      clearInterval(slideInterval)
      setIsloading(false)
    }

    return () => {
      clearInterval(slideInterval)
    };
  }, [activeSlide]);


  const renderLine = (idx) => {
    return <motion.span
      className={classes.bottomLine}
      key={idx}
      initial={{
        backgroundColor: "#2F3339"
      }}
      animate={() => {
        if (idx * 2 <= activeSlide) return {
          backgroundColor: "#fff",
        }
      }}
      transition={{
        duration: 1, ease: 'easeOut'
      }}
    />
  }

  const renderWrapper = (idx, children) => {
    return <motion.div
      initial={{
        display: "none"
      }}
      animate={() => {
        if (idx === activeSlide) return {
          display: "block"
        }
      }}
    >
      {children}
    </motion.div>
  }

  return (<div className={classes.loaderWrapper}>
    <div className={classes.loaderContainer}>
      {renderWrapper(0, <LoaderText isNewTopText isNewBottomText topText="Watch your thoughts" bottomText="they become words."/>)}
      {renderWrapper(1, <LoaderText isTopStatic isBottomStatic topText="Watch your thoughts" bottomText="they become words."/>)}
      {renderWrapper(2, <LoaderText isTopOut isBottomStatic topText="Watch your words" bottomText="they become words."/>)}
      {renderWrapper(3, <LoaderText isTopStatic isBottomOut topText="Watch your words" bottomText="they become actions."/>)}
      {renderWrapper(4, <LoaderText isTopOut isBottomStatic topText="Watch your actions" bottomText="they become actions."/>)}
      {renderWrapper(5, <LoaderText isTopStatic isBottomOut topText="Watch your actions" bottomText="they become habits."/>)}
      {renderWrapper(6, <LoaderText isTopOut isBottomStatic topText="Watch your habits" bottomText="they become habits."/>)}
      {renderWrapper(7, <LoaderText isTopStatic isBottomOut topText="Watch your habits" bottomText="they become character."/>)}
      {renderWrapper(8, <LoaderText isTopOut isBottomStatic topText="Watch your character" bottomText="they become character."/>)}
      {renderWrapper(9, <LoaderText isTopStatic isBottomOut topText="Watch your character" bottomText="it becomes your destiny."/>)}
      {renderWrapper(10, <LoaderText isTopStatic isBottomStatic topText="Watch your character" bottomText="it becomes your destiny."/>)}
      <div className={classes.bottomContainer}>
        {Array.from({length: 5}).map((line, index) => renderLine(index))}
      </div>
    </div>
  </div>)
}
