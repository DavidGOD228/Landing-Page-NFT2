import {useEffect, useState} from 'react';
import loaderTitle from 'assets/images/loader-title.png';
import classes from './style.module.scss';
import {motion} from 'framer-motion'

const outAnimation = {
  initial: {
    opacity: 1,
  },
  whileInView: {
    opacity: 0
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

const progress = [0, 4, 9, 14, 19]

const checkValue = (value) => value === 2 || value === 7 || value === 12 || value === 17 || value === 22
const LoaderText = ({
                      isBottomStatic,
                      isTopStatic,
                      isNewTopText,
                      isNewBottomText,
                      topText,
                      bottomText,
                      isTopOut,
                      isBottomOut,
                      bottomTextStyle
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
        }}
      >
        {bottomText}
      </motion.p>
    } else if (isBottomStatic) {
      return <p style={bottomTextStyle} className={`${classes.loaderText} ${classes.grayText}`}>
        {bottomText}
      </p>
    } else if (isBottomOut) {
      return <motion.p
        className={`${classes.loaderText} ${classes.grayText}`}
        key={bottomText}
        {...outAnimation}
        transition={{
          duration: .3,
          ease: 'easeOut',
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
    const time = checkValue(activeSlide) ? 1500 : 300
    const slideInterval = setInterval(() => {
      setActiveSlide(activeSlide + 1);
    }, time);

    if (activeSlide === 23) {
      clearInterval(slideInterval)
      setIsloading(false)
    }

    return () => {
      clearInterval(slideInterval)
    };
  }, [activeSlide]);


  const renderLine = (value) => {
    return <motion.span
      className={classes.bottomLine}
      initial={{
        backgroundColor: "#2F3339"
      }}
      animate={() => {
        if (value <= activeSlide)
          return {
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
      {renderWrapper(0, <LoaderText isNewTopText isBottomStatic topText="Watch your thoughts" bottomTextStyle={{visibility: 'hidden'}} bottomText="they become words."/>)}
      {renderWrapper(1, <LoaderText isTopStatic isNewBottomText topText="Watch your thoughts" bottomText="they become words."/>)}
      {renderWrapper(2, <LoaderText isTopStatic isBottomStatic topText="Watch your thoughts" bottomText="they become words."/>)}
      {renderWrapper(3, <LoaderText isTopOut isBottomStatic topText="Watch your thoughts" bottomText="they become words."/>)}
      {renderWrapper(4, <LoaderText isNewTopText isBottomStatic topText="Watch your words" bottomText="they become words."/>)}
      {renderWrapper(5, <LoaderText isTopStatic isBottomOut topText="Watch your words" bottomText="they become words."/>)}
      {renderWrapper(6, <LoaderText isTopStatic isNewBottomText topText="Watch your words" bottomText="they become actions."/>)}
      {renderWrapper(7, <LoaderText isTopStatic isBottomStatic topText="Watch your words" bottomText="they become actions."/>)}
      {renderWrapper(8, <LoaderText isTopOut isBottomStatic topText="Watch your words" bottomText="they become actions."/>)}
      {renderWrapper(9, <LoaderText isNewTopText isBottomStatic topText="Watch your actions" bottomText="they become actions."/>)}
      {renderWrapper(10, <LoaderText isTopStatic isBottomOut topText="Watch your actions" bottomText="they become actions."/>)}
      {renderWrapper(11, <LoaderText isTopStatic isNewBottomText topText="Watch your actions" bottomText="they become habits."/>)}
      {renderWrapper(12, <LoaderText isTopStatic isBottomStatic topText="Watch your actions" bottomText="they become habits."/>)}
      {renderWrapper(13, <LoaderText isTopOut isBottomStatic topText="Watch your actions" bottomText="they become habits."/>)}
      {renderWrapper(14, <LoaderText isNewTopText isBottomStatic topText="Watch your habits" bottomText="they become habits."/>)}
      {renderWrapper(15, <LoaderText isTopStatic isBottomOut topText="Watch your habits" bottomText="they become habits."/>)}
      {renderWrapper(16, <LoaderText isTopStatic isNewBottomText topText="Watch your habits" bottomText="they become character."/>)}
      {renderWrapper(17, <LoaderText isTopStatic isBottomStatic topText="Watch your habits" bottomText="they become character."/>)}
      {renderWrapper(18, <LoaderText isTopOut isBottomStatic topText="Watch your habits" bottomText="they become character."/>)}
      {renderWrapper(19, <LoaderText isNewTopText isBottomStatic topText="Watch your character" bottomText="they become character."/>)}
      {renderWrapper(20, <LoaderText isTopStatic isBottomOut topText="Watch your character" bottomText="they become character."/>)}
      {renderWrapper(21, <LoaderText isTopStatic isNewBottomText topText="Watch your character" bottomText="it becomes your destiny."/>)}
      {renderWrapper(22, <LoaderText isTopStatic isBottomStatic topText="Watch your character" bottomText="it becomes your destiny."/>)}
      <div className={classes.bottomContainer}>
        {progress.map((value) => renderLine(value))}
      </div>
    </div>
  </div>)
}
