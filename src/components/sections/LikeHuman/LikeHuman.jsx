import React from 'react';
import {motion} from 'framer-motion';

import Title from '../../common/Title/Title';
import GreenText from '../../common/GreenText/GreenText';
import Paragraph from '../../common/Paragraph/Paragraph';
import AccordionWithIcon from '../../common/AccordionWithIcon/AccordionWithIcon';
import ColumnItem from './components/ColumnItem/ColumnItem';

import {useWindowWidth} from '../../../hooks/useWindowWidth';

import classes from './style.module.scss';

import {accordionData, tableData} from './data';

import {useWindowSize} from 'hooks/useWindowDimensions';
import {media} from 'utils/media';
import DesktopSplashes from "./components/DesktopSplashes/DesktopSplashes";
import MobileSplashes from "./components/MobileSplashes/MobileSplashes";

export const LikeHuman = () => {
  const isDesktop = useWindowWidth(1024);
  const {width} = useWindowSize();

  const getStartInitVal = () => {
    if (width > media.mDesktop) return -200;
    if (width > media.tablet) return -100;
    if (width > media.lMobile) return -50;
    return -25;
  }

  const table = (
    <div className={classes.tableWrapper}>
      <DesktopSplashes/>
      <div className={classes.table}>
        {tableData.map(({id, icon, title, subtitle}, idx) => (
          <ColumnItem key={id} icon={icon} title={title} subtitle={subtitle}/>
        ))}
      </div>
    </div>
  );

  const accordion = (
    <div className={classes.content}>
      <div className={classes.accordionContainer}>
        {accordionData.map(({id, icon, title, subtitle}) => (
          <AccordionWithIcon
            key={id}
            icon={icon}
            title={title}
            subtitle={subtitle}
          />
        ))}
      </div>
    </div>
  );

  const pargText =
    'Metamorph is an open-world exploration, NFT creature collector and life simulator game built on the Polygon Blockchain, releasing on IOS and Android in 2023. Play-to-earn in a graphically-rich sci-fi adventure and life builder that allows you to feel the life inside the game.';

  const animFromRight = {
    initial: {
      x: 200,
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1
    },
    transition: {
      duration: 1,
      ease: 'easeInOut'
    },
    viewport: {once: true}
  }

  const animFromDown = {
    initial: {
      y: 50,
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1
    },
    transition: {
      duration: 1,
      ease: 'easeInOut'
    },
    viewport: {once: true}
  }

  return (
    <div id="features" className={classes.container}>
      <div className={classes.titleWrapper}>

        {/* paragraph descktop */}
        {isDesktop && <Paragraph
          className={classes.paragraph}
        >
          {pargText.split(' ').map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                initial={{x: getStartInitVal(), opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{
                  duration: 1,
                  ease: 'easeInOut'
                }}
                viewport={{once: true}}
              >
                {word}
                {idx + 1 !== pargText.split(' ').length && '\u00A0'}
              </motion.span>
            );
          })}
        </Paragraph>}

        {/* paragraph mobile */}
        {!isDesktop && <Paragraph
          className={classes.paragraph}
        >
          {pargText.split(' ').map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                  duration: 1,
                  ease: 'easeInOut'
                }}
                viewport={{once: true}}
              >
                {word}
                {idx + 1 !== pargText.split(' ').length && '\u00A0'}
              </motion.span>
            );
          })}
        </Paragraph>}

        {/* title descktop */}
        {isDesktop && <motion.div
          initial={{x: getStartInitVal()}}
          whileInView={{x: 0}}
          transition={{
            duration: 1,
            ease: 'easeInOut'
          }}
          viewport={{once: true}}
        >
          <Title
            classname={classes.title}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-start'
            }}
          >
            <motion.span {...animFromRight}>it&apos;s{'\u00A0'}</motion.span>
            <motion.span {...animFromRight}>just{'\u00A0'}</motion.span>
            <motion.span {...animFromRight}>like{'\u00A0'}</motion.span>
            <motion.span {...animFromRight} className={classes.greenText}>a{'\u00A0'}</motion.span>
            <motion.span {...animFromRight} className={classes.greenText}>human</motion.span>
          </Title>
        </motion.div>}

        {/* title mobile */}
        {!isDesktop && <MobileSplashes/>}
        {!isDesktop && <motion.div>
          <Title
            classname={classes.title}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-start'
            }}
          >
            <motion.span {...animFromDown}>it&apos;s{'\u00A0'}</motion.span>
            <motion.span {...animFromDown}>just{'\u00A0'}</motion.span>
            <motion.span {...animFromDown}>like{'\u00A0'}</motion.span>
            <motion.span {...animFromDown} className={classes.greenText}>a{'\u00A0'}</motion.span>
            <motion.span {...animFromDown} className={classes.greenText}>human</motion.span>
          </Title>
        </motion.div>}
      </div>
      {isDesktop ? table : accordion}
    </div>
  );
};

export default LikeHuman;
