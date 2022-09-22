import { motion } from 'framer-motion';

export const paragraphAnimation = text => text.split(' ').map((word, index) => (
  <motion.span
    style={{ position: 'relative' }}
    key={index}
    initial={{
      top: 15,
      opacity: 0,
    }}
    whileInView={{
      top: 0,
      opacity: 1,
    }}
    transition={{
      delay: 0.01 * index,
      duration: 0.5,
      ease: 'easeOut'
    }}
    viewport={{
      once: true
    }}
  >
    {word + " "}
  </motion.span>
))