import React from 'react'
import {motion} from "framer-motion";

const AnimatedTextCharacter = ({text, className, delay}) => {
// splitting text into letters
  const letters = Array.from(text);

// Variants for Container
  const container = {
    hidden: {opacity: 0},
    visible: (i = 1) => ({
      opacity: 1,
      transition: {delay: delay, staggerChildren: 0.03, delayChildren: delay + 0.04 * i},
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "linear",
      },
    },
    hidden: {
      opacity: 0,
      x: -10,
      y: 5,
      transition: {
        type: "linear",
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedTextCharacter
