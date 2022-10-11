import { Paragraph, Title } from 'components';
import {isWebpSupported} from 'react-image-webp/dist/utils';
import LazyLoad from 'react-lazy-load';

import SkullPng from 'assets/images/skills/skill-5.png';
import SkullWebp from 'assets/images/skills/skill-5.webp';

import SlimePng from 'assets/images/skills/skill-6.png';
import SlimeWebp from 'assets/images/skills/skill-6.webp';

import BricksPng from 'assets/images/skills/skill-7.png';
import BricksWebp from 'assets/images/skills/skill-7.webp';

import FishPng from 'assets/images/skills/agressive-active.png';
import FishWebp from 'assets/images/skills/agressive-active.png';

import FishNotActivePng from 'assets/images/skills/agressive-not-active.png';
import FishNotActiveWebp from 'assets/images/skills/agressive-not-active.png';

import ChainPng from 'assets/images/skills/skill-8.png';
import ChainWebp from 'assets/images/skills/skill-8.webp';

import agressiveMorphImg from 'assets/images/posters/problems-videos/agressive/Agressive.webp';
import agressiveMorph from 'assets/video/agressive_mobile.video.mp4';

import { useRef } from 'react';
import classes from './style.module.scss';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { motion, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import { paragraphAnimation } from 'farmerMotionsAnimations/paragraphAnimation';
import { offset } from 'utils/lazyload';

import DesktopSplashes from "./components/DesktopSplashes/DesktopSplashes";
import MobileSplashes from "./components/MobileSplashes/MobileSplashes";

import { Parallax } from 'react-scroll-parallax';
const speedParallax = 20;

export const MorphsUnique = () => {
	const isDesktop = useWindowWidth(1024);

  const isWebpFish = isWebpSupported() ? FishWebp : FishPng;
  const isWebpFishNotActive = isWebpSupported() ? FishNotActiveWebp : FishNotActivePng;
  const isWebpSkull = isWebpSupported() ? SkullWebp : SkullPng;
  const isWebpSlime = isWebpSupported() ? SlimeWebp : SlimePng;
  const isWebpBricks = isWebpSupported() ? BricksWebp : BricksPng;
  const isWebpChain = isWebpSupported() ? ChainWebp : ChainPng;

	const textRef = useRef();
	const isInViewtextRef = useInView(textRef, {
		// once: true
	});

	const titleText = 'ALL MORPHS ARE UNIQUE';

	const text1 =
		'Like us humans, morphs also possess a combination of genetic characteristics that give them unique and unexpected behavior. While you\'re deciding his moves, don\'t forget that Morphs can react to external conditions on their own.';

	const descrSkill =
		'Some characters may have impulsive personality traits that can be problematic to deal with, but in the hands of an experienced player, every difficulty turns into an opportunity. Everything will be up to you!';

	return (
		<>
      {isDesktop && 
      // <Parallax speed={-speedParallax / 2}>
        <div style={{position: 'relative'}}>
          <DesktopSplashes/>
        </div>
      // </Parallax>
      }
      {!isDesktop && 
      // <Parallax speed={-speedParallax / 2}>
        <MobileSplashes className={classes.topBlockMobileSplashes}/>
      // </Parallax>
      }

			{/* <Parallax speed={0} className={classes.container}> */}
			<div className={classes.container}>
				<div className={classes.content}>
					<Title isWhiteLine={!isDesktop} classname={classes.title}>
						{titleText.split(' ').map((word, idx) => {
							return (
								<motion.span
									key={word + idx}
									initial={{
										y: 50,
										opacity: 0
									}}
									whileInView={{
										y: 0,
										opacity: 1
									}}
									transition={{
										duration: 1,
										ease: 'easeInOut'
									}}
									viewport={{ once: true }}
								>
									{word}
									{idx + 1 !== titleText.split(' ').length && '\u00A0'}
								</motion.span>
							);
						})}
					</Title>
					<div className={classes.descrWrapper}>
						<Paragraph
							className={`${classes.paragraph} ${classes.descrSection}`}
						>
							{paragraphAnimation(text1)}
						</Paragraph>
						<div className={classes.icons}>
              <LazyLoad offset={offset}>
                <motion.img
                  className={classes.skillImg}
                  src={isWebpSkull}
                  alt='skill'
                  initial={{
                    scale: 0.9,
                    opacity: 0
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut'
                  }}
                  viewport={{ once: true }}
                />
              </LazyLoad>
              <LazyLoad offset={offset}>
                <motion.img
                  className={classes.skillImg}
                  src={isWebpSlime}
                  alt='skill'
                  initial={{
                    scale: 0.9,
                    opacity: 0
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 0.3
                  }}
                  viewport={{ once: true }}
                />
              </LazyLoad>
              <LazyLoad offset={offset}>
                <motion.img
                  className={classes.skillImg}
                  src={isWebpBricks}
                  alt='skill'
                  initial={{
                    scale: 0.9,
                    opacity: 0
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 0.6
                  }}
                  viewport={{ once: true }}
                />
              </LazyLoad>
							<div className={classes.wrapperSkill} ref={textRef}>
								{/* image before */}
								{isDesktop && (
                  <LazyLoad offset={offset}>
                    <motion.img
                      className={`${classes.skillImg} ${classes.fish}`}
                      src={isWebpFishNotActive}
                      alt='skill'
                      initial='hidden'
                      variants={{
                        visible: {
                          scale: 1,
                          opacity: 1
                        },
                        hidden: { opacity: 0, scale: 0.9 }
                      }}
                      whileInView='visible'
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        delay: 0.9
                      }}
                      viewport={{ once: true }}
                    />
                  </LazyLoad>
								)}

                {!isDesktop && (
                  <LazyLoad offset={offset}>
                    <motion.img
                      className={`${classes.skillImg} ${classes.fish}`}
                      src={isWebpFishNotActive}
                      alt='skill'
                      initial='hidden'
                      variants={{
                        visible: {
                          scale: 1,
                          opacity: 1
                        },
                        hidden: { opacity: 0, scale: 0.9 }
                      }}
                      whileInView='visible'
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        delay: 0.9
                      }}
                      viewport={{ once: true }}
                    />
                  </LazyLoad>
								)}

								{/* active img */}
								{isDesktop && (
                  <LazyLoad offset={offset}>
                    <motion.img
                      className={`${classes.skillImg} ${classes.fish} ${classes.active}`}
                      src={isWebpFish}
                      alt='skill'
                      initial={{
                        scale: 0.9,
                        opacity: 0,
                        y: '-9%',
                        x: '-7%'
                      }}
                      whileInView={{
                        scale: 1,
                        opacity: 1
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        delay: 2.1
                      }}
                      viewport={{ once: true }}
                    />
                  </LazyLoad>
								)}

								{!isDesktop && (
                  <LazyLoad offset={offset}>
                    <motion.img
                      className={`${classes.skillImg}  ${classes.active}`}
                      src={isWebpFish}
                      alt='skill'
                      initial={{
                        scale: 0.9,
                        opacity: 0,
                        y: '-6px',
                        x: '-3.5px'
                      }}
                      whileInView={{
                        scale: 1.05,
                        opacity: 1
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        delay: 2.1
                      }}
                      viewport={{ once: true }}
                    />
                  </LazyLoad>
								)}

                {!isDesktop && (<motion.div
									className={classes.skillTitleMobile}
									initial={{
										scale: 0.9,
										opacity: 0,
										y: 15
									}}
									whileInView={{
										scale: 1,
										opacity: 1,
										y: 0
									}}
									transition={{
										duration: 0.3,
										ease: 'easeInOut',
										delay: 2.4
									}}
									viewport={{ once: true }}
								>
									Agressive
								</motion.div>)}
							</div>

              <LazyLoad offset={offset}>
                <motion.img
                  className={classes.skillImg}
                  src={isWebpChain}
                  alt='skill'
                  initial={{
                    scale: 0.9,
                    opacity: 0
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 1.2
                  }}
                  viewport={{ once: true }}
                />
              </LazyLoad>
						</div>
						{isDesktop && (
							<>
								<motion.div
									className={`${classes.skillTitle}`}
									initial={{
										y: 50,
										opacity: 0
									}}
									whileInView={{
										y: 0,
										opacity: 1
									}}
									transition={{
										duration: 1,
										ease: 'easeInOut',
										delay: 2.1
									}}
									viewport={{ once: true }}
								>
									Piranha Soul
								</motion.div>
								{isInViewtextRef && <TypeAnimation cursor={true} sequence={[3000, descrSkill]} />}
							</>
						)}
					</div>
				</div>
        <video
          className={classes.morphImage}
          src={agressiveMorph}
          autoPlay
          loop
          playsInline
          muted
        />
			</div>
			{/* </Parallax> */}
			{!isDesktop && (
				<div className={classes.mobileMorph}>
          {/* <video
            className={classes.mobileMorphVideo}
            src={agressiveMorph}
            autoPlay
            playsInline
            loop
            muted
          /> */}
          <img
            className={classes.mobileMorphVideo}
            src={agressiveMorphImg}
            alt=""
          />
				</div>
			)}
		</>
	);
};

export default MorphsUnique;
