import {useEffect, useState} from 'react';
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

const progress = [1, 5, 10, 15, 20]

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
                      topTextStyle,
                      bottomTextStyle
                    }) => {

  const renderTopText = () => {
    if (isNewTopText) {
      return <motion.p
        className={classes.loaderText}
        key={topText}
        {...inAnimation}
        transition={{
          duration: .850,
          ease: 'easeOut',
        }}
      >
        {topText}
      </motion.p>
    } else if (isTopStatic) {
      return <p style={topTextStyle} className={classes.loaderText}>
        {topText}
      </p>
    } else if (isTopOut) {
      return <motion.p
        className={classes.loaderText}
        key={topText}
        {...outAnimation}
        transition={{
          duration: .850,
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
          duration: .850,
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
          duration: .850,
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
    const time = checkValue(activeSlide) ? 1500 : 850
    const slideInterval = setInterval(() => {
      setActiveSlide(activeSlide + 1);
    }, time);

    if (activeSlide === 24) {
      clearInterval(slideInterval)
      setIsloading(false)
    }

    return () => {
      clearInterval(slideInterval)
    };
  }, [activeSlide]);


  const renderLine = (value) => {
    return <motion.span
      key={value}
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
      {renderWrapper(0, <LoaderText isTopStatic isBottomStatic topText="Watch your thoughts" bottomTextStyle={{visibility: 'hidden'}} topTextStyle={{visibility: 'hidden'}} bottomText="they become words."/>)}
      {renderWrapper(1, <LoaderText isNewTopText isBottomStatic topText="Watch your thoughts" bottomTextStyle={{visibility: 'hidden'}} bottomText="they become words."/>)}
      {renderWrapper(2, <LoaderText isTopStatic isNewBottomText topText="Watch your thoughts" bottomText="they become words."/>)}
      {renderWrapper(3, <LoaderText isTopStatic isBottomStatic topText="Watch your thoughts" bottomText="they become words."/>)}
      {renderWrapper(4, <LoaderText isTopOut isBottomStatic topText="Watch your thoughts" bottomText="they become words."/>)}
      {renderWrapper(5, <LoaderText isNewTopText isBottomStatic topText="Watch your words" bottomText="they become words."/>)}
      {renderWrapper(6, <LoaderText isTopStatic isBottomOut topText="Watch your words" bottomText="they become words."/>)}
      {renderWrapper(7, <LoaderText isTopStatic isNewBottomText topText="Watch your words" bottomText="they become actions."/>)}
      {renderWrapper(8, <LoaderText isTopStatic isBottomStatic topText="Watch your words" bottomText="they become actions."/>)}
      {renderWrapper(9, <LoaderText isTopOut isBottomStatic topText="Watch your words" bottomText="they become actions."/>)}
      {renderWrapper(10, <LoaderText isNewTopText isBottomStatic topText="Watch your actions" bottomText="they become actions."/>)}
      {renderWrapper(11, <LoaderText isTopStatic isBottomOut topText="Watch your actions" bottomText="they become actions."/>)}
      {renderWrapper(12, <LoaderText isTopStatic isNewBottomText topText="Watch your actions" bottomText="they become habits."/>)}
      {renderWrapper(13, <LoaderText isTopStatic isBottomStatic topText="Watch your actions" bottomText="they become habits."/>)}
      {renderWrapper(14, <LoaderText isTopOut isBottomStatic topText="Watch your actions" bottomText="they become habits."/>)}
      {renderWrapper(15, <LoaderText isNewTopText isBottomStatic topText="Watch your habits" bottomText="they become habits."/>)}
      {renderWrapper(16, <LoaderText isTopStatic isBottomOut topText="Watch your habits" bottomText="they become habits."/>)}
      {renderWrapper(17, <LoaderText isTopStatic isNewBottomText topText="Watch your habits" bottomText="they become character."/>)}
      {renderWrapper(18, <LoaderText isTopStatic isBottomStatic topText="Watch your habits" bottomText="they become character."/>)}
      {renderWrapper(19, <LoaderText isTopOut isBottomStatic topText="Watch your habits" bottomText="they become character."/>)}
      {renderWrapper(20, <LoaderText isNewTopText isBottomStatic topText="Watch your character" bottomText="they become character."/>)}
      {renderWrapper(21, <LoaderText isTopStatic isBottomOut topText="Watch your character" bottomText="they become character."/>)}
      {renderWrapper(22, <LoaderText isTopStatic isNewBottomText topText="Watch your character" bottomText="it becomes your destiny."/>)}
      {renderWrapper(23, <LoaderText isTopStatic isBottomStatic topText="Watch your character" bottomText="it becomes your destiny."/>)}
      <div className={classes.bottomContainer}>
        {progress.map((value) => renderLine(value))}
      </div>
    </div>
  </div>)
}
