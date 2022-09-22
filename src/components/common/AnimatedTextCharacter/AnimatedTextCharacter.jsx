import React from 'react'
import {motion} from "framer-motion";

const AnimatedTextCharacter = ({text, className}) => {
// splitting text into letters
  const letters = Array.from(text);

// Variants for Container
  const container = {
    hidden: {opacity: 0},
    visible: (i = 1) => ({
      opacity: 1,
      transition: {delay: 2, staggerChildren: 0.03, delayChildren: 2 + 0.04 * i},
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "linear",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "linear",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter
