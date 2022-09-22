import ScrollAnimation from 'react-animate-on-scroll';
import {motion} from 'framer-motion';

import {GlobalContainer, GreenText, Title, Paragraph} from 'components';

import morh from 'assets/images/morh-1.png';

import WhiteLine from 'assets/images/whiteLine.svg';
import toiletVideo from 'assets/video/toilet.video.mp4';
import Confidence from 'assets/images/confidence.png';
import SmileDesktop from 'assets/images/smileDesktop.svg';

import classes from './style.module.scss';

export function FLSDesktop() {


  return (
    <GlobalContainer>
      <div className={classes.flsDesktopContainer}>
        <div className={classes.textSection}>
          <p className={classes.backgroundText}>
            IMMERSE YOURSELF IN A BREATHING WORLD AND{' '}
            <GreenText>BECOME A LEGEND</GreenText>
          </p>
          <div className={classes.triangle}/>
          <img className={classes.morh} src={morh} alt='morh'/>
        </div>

        <div className={classes.content}>
            <motion.div
              key="firstLiveTitle"
              className={classes.descr}
              initial={{y: 50}}
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
                Metamorph is an open-world exploration, NFT creature collector
                and life simulator game built on the Polygon Blockchain,
                releasing on IOS and Android in 2023. Play-to-earn in a
                graphically-rich sci-fi adventure and life builder that allows
                you to feel the life inside the game.
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
                initial={{y: 50}}
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
                initial={{y: 50}}
                whileInView={{y: 0}}
                transition={{
                  duration: 1,
                  ease: 'easeInOut'
                }}
                viewport={{once: true}}
              >
                <img className={classes.privacyImage} src={Confidence} alt=''/>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </GlobalContainer>
  );
}
