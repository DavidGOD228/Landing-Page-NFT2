import {
  IdentifierBlock,
  BlockInfoTitle,
  InfoDetails,
  AttrsDetails,
} from "components";
import classes from "./style.module.scss";
import {motion, AnimatePresence, useAnimationControls} from 'framer-motion';
import LazyLoad from "react-lazy-load";
import {offset} from 'utils/lazyload';
import {useEffect} from "react";
import VisibilitySensor from "react-visibility-sensor";

export function InfoMorh({morph}) {
  const {id, bodyImg, type, name, attributes} = morph;
  const controls = useAnimationControls()
  const initial = {
    y: 25,

    opacity: 0
  };
  const animate = {
    y: 0,
    scale: 1,
    opacity: 1
  };
  const exit = {
    y: 25,
    scale: 0.9,
    opacity: 0
  };
  const transition = {
    duration: 1,
    ease: 'easeInOut'
  }
  const viewport = {
    once: true
  };

  const animBlockDetails = {
    initial: {
      ...initial,
      scale: 0.98,
    },
    animate: {
      ...animate,
    },
    exit: {
      ...exit,
    },
    transition: {
      ...transition,
      delay: 1
    },
    viewport: {...viewport}
  }

  return (
    <>
      <div className={classes.morphWrapper}>
        <LazyLoad offset={offset}>
          <VisibilitySensor
            onChange={controls.start(animate)}
            delayedCall
          >
            <AnimatePresence>
              <motion.img
                key={id}
                className={classes.imgMorphChoose}
                src={bodyImg}
                alt={name}
                initial={{
                  ...initial,
                  scale: 0.9,
                }}
                exit={exit}
                transition={transition}
                viewport={viewport}
                animate={animate}
              />
            </AnimatePresence>
          </VisibilitySensor>
        </LazyLoad>

      </div>

      <div className={classes.infoBlock}>
        <motion.div
          key={id + 'infoblock'}
          {...animBlockDetails}
          transition={{
            ...transition,
            delay: 0.4
          }}
        >
          <IdentifierBlock
            className={classes.identifierBlock}
            id={id}
            type={type}
          />
        </motion.div>

        <motion.div
          key={id + 'InfoDetails'}
          {...animBlockDetails}
          transition={{
            ...transition,
            delay: 0.8
          }}
        >
          <BlockInfoTitle className={classes.infoTitle}>Bio</BlockInfoTitle>
          <InfoDetails className={classes.infoDetails} morph={morph}/>
        </motion.div>

        <motion.div
          key={id + 'attributes'}
          {...animBlockDetails}
          transition={{
            ...transition,
            delay: 1.2
          }}
        >
          <BlockInfoTitle className={classes.infoTitle}>
            Attributes
          </BlockInfoTitle>
          <AttrsDetails attributes={attributes} type={type}/>
        </motion.div>
      </div>
    </>
  );
}
