import {
  IdentifierBlock,
  BlockInfoTitle,
  InfoDetails,
  AttrsDetails,
} from "components";
import classes from "./style.module.scss";
import { motion, AnimatePresence } from 'framer-motion';

export function InfoMorh({morph}) {
  const {id, bodyImg, type, name, attributes} = morph;
  const importBodyImg = require("assets/images/morphs/" + bodyImg);

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
        <AnimatePresence>
          <motion.img
            key={id}
            className={classes.imgMorphChoose}
            src={importBodyImg}
            alt={name}
            initial={{
              ...initial,
              scale: 0.9,
            }}
            animate={animate}
            exit={exit}
            transition={transition}
            viewport={viewport}
          />
        </AnimatePresence>
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
          <InfoDetails className={classes.infoDetails} morph={morph} />
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
          <AttrsDetails attributes={attributes} type={type} />
        </motion.div>
       
      </div>
    </>
  );
}
