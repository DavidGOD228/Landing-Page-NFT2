import { Paragraph, Title } from 'components';
import LazyLoad from 'react-lazy-load';
import Skull from 'assets/images/skills/skill-5.png';
import Slime from 'assets/images/skills/skill-6.png';
import Bricks from 'assets/images/skills/skill-7.png';
import Fish from 'assets/images/skills/agressive-active.png';
import FishNotActive from 'assets/images/skills/agressive-not-active.png';
import Chain from 'assets/images/skills/skill-8.png';
import MorphDesktop from 'assets/video/agressive_desktop.video.mp4';
import MorphMobile from 'assets/video/agressive_desktop.video.mp4';
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

	const textRef = useRef();
	const isInViewtextRef = useInView(textRef, {
		// once: true
	});

	const titleText = 'ALL MORPHS ARE UNIQUE';

	const text1 =
		'MM takes you back to what makes a truly exciting MMORPG. You make the rules. Buy yourself a house, furnish it, dress up your Morph, find them a job and make them earn. Invest in its growth or make a fortune. Everything is alright.';

	const descrSkill =
		'MM takes you back to what makes a truly exciting MMORPG. You make the rules. Buy yourself a house, furnish it.';

	return (
		<>
      {isDesktop && <Parallax speed={-speedParallax / 2}>
        <DesktopSplashes/>
      </Parallax>}
      {!isDesktop && <Parallax speed={-speedParallax / 2}>
        <MobileSplashes className={classes.topBlockMobileSplashes}/>
      </Parallax>}

			<Parallax speed={0} className={classes.container}>
				<div className={classes.content}>
					<Title classname={classes.title}>
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
                  src={Skull}
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
                  src={Slime}
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
                  src={Bricks}
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
                      src={FishNotActive}
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
                      src={FishNotActive}
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
                      src={Fish}
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
                      src={Fish}
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
                  src={Chain}
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
									Agressive
								</motion.div>
								{isInViewtextRef && <TypeAnimation cursor={true} sequence={[3000, descrSkill]} />}
							</>
						)}
					</div>
				</div>
        <video
          className={classes.morphImage}
          src={MorphDesktop}
          autoPlay
          loop
          playsInline
          muted
        />
			</Parallax>
			{!isDesktop && (
				// <Parallax speed={speedParallax} className={classes.mobileMorph}>
          <video
            className={classes.mobileMorphVideo}
            src={MorphMobile}
            autoPlay
            playsInline
            loop
            muted
          />
				// </Parallax>
			)}
		</>
	);
};

export default MorphsUnique;
