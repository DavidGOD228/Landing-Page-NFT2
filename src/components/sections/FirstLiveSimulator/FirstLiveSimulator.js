import {motion} from 'framer-motion';

import {GlobalContainer, GreenText, Title, Paragraph} from 'components';

import WhiteLine from 'assets/images/whiteLine.svg';
import toiletVideo from 'assets/video/toilet.video.mp4';
import bedVideo from 'assets/video/bed.video.mp4';

import SmileDesktop from 'assets/images/smileDesktop.svg';
import MorphDesktop from 'assets/video/morphDesktop.video.mp4'
import MorphMobile from 'assets/video/morphMobile.video.mp4'

import classes from './style.module.scss';

import {paragraphAnimation} from 'farmerMotionsAnimations/paragraphAnimation';
import {useWindowWidth} from "../../../hooks/useWindowWidth";

export function FirstLiveSimulator() {
  const isDesktop = useWindowWidth(1024)
  const textPar = `Metamorph is an open-world exploration, NFT creature collector
  and life simulator game built on the Polygon Blockchain,
  releasing on IOS and Android in 2023. Play-to-earn in a
  graphically-rich sci-fi adventure and life builder that allows
  you to feel the life inside the game.`

  return (
    <div className={classes.wrapper}>
      <video className={classes.morphVideo} src={isDesktop ? MorphDesktop : MorphMobile} autoPlay
             muted/>
      <GlobalContainer>
        <div className={classes.flsDesktopContainer}>
          <div className={classes.content}>
            <motion.div
              key="firstLiveTitle"
              className={classes.descr}
              initial={{y: 150}}
              whileInView={{y: 0}}
              transition={{
                delay: .5,
                duration: 1,
                ease: 'easeInOut'
              }}
              viewport={{once: true}}
            >
              <Title classname={classes.title}>
                First{' '}
                <GreenText>
                  live{' '}
                  <span className={classes.grayLine}>
										simulator <img src={WhiteLine} alt=''/>
									</span>{' '}
                </GreenText>
                on web 3
              </Title>
              <Paragraph className={classes.paragraph}>
                {paragraphAnimation(textPar)}
              </Paragraph>
              <div className={classes.respect}>
                <p className={classes.privacyText}>Respect his Privacy!</p>
                <img className={classes.smile} src={SmileDesktop} alt=''/>
              </div>
            </motion.div>
            <div className={classes.mobileContainer}>
              <div className={classes.imagesBlock}>
                <motion.div
                  key="firstLiveFirstImage"
                  className={classes.mobileContainer}
                  initial={{y: 150}}
                  whileInView={{y: 0}}
                  transition={{
                    duration: 1.5,
                    ease: 'easeInOut'
                  }}
                  viewport={{once: true}}
                >
                  <video
                    className={classes.privacyImage}
                    src={toiletVideo}
                    autoPlay
                    loop
                    muted
                  />
                </motion.div>
                <motion.div
                  key="firstLiveSecondImage"
                  className={classes.secondImage}
                  initial={{y: 150}}
                  whileInView={{y: 0}}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut'
                  }}
                  viewport={{once: true}}
                >
                  <video src={bedVideo}
                         className={classes.privacyImage}
                         autoPlay
                         loop
                         muted/>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </GlobalContainer>
    </div>
  );
}
