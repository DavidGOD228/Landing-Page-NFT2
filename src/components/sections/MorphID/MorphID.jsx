import {motion} from 'framer-motion';

import {Title, Paragraph, GreenText} from 'components';

import {paragraphAnimationFromRight} from 'farmerMotionsAnimations/paragraphAnimation';

import classes from './style.module.scss';
import {useWindowWidth} from 'hooks/useWindowWidth';
import {morphIDText} from 'data/morphID/text';

export const MorphId = () => {
  const isDesktop = useWindowWidth(1024);

  const animFromDown = {
    initial: {
      x: 0,
      y: 50,
      opacity: 0
    },
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1
    },
    transition: {
      duration: 1,
      ease: 'easeInOut'
    },
    viewport: {once: true}
  };

  const animFromRight = {
    initial: {
      y: 0,
      x: 200,
      opacity: 0
    },
    whileInView: {
      y: 0,
      x: 0,
      opacity: 1
    },
    transition: {
      duration: 1,
      ease: 'easeInOut'
    },
    viewport: {once: true}
  };

  const animFromLeftImg = {
    initial: {
      y: 0,
      x: -150,
      opacity: 0,
      scale: 0.95
    },
    whileInView: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1
    },
    transition: {
      duration: 1,
      ease: 'easeInOut'
    },
    viewport: {once: true}
  };

  const GreenText1 = motion(GreenText);

  return (
    <div >
       <div id="morphID" className={classes.container}>
        <div className={classes.cardsImg}>
          {isDesktop && (
            <motion.video
              className={classes.comparingVideo}
              {...animFromLeftImg}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082156/videos/comp.video_tymrsj.webm" type="video/webm" />
              <source src="https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082162/videos/comp.video_ov2zh9.mp4" type="video/mp4" />
            </motion.video>
          )}
        </div>

				<div className={classes.titleWrapper}>
          <div className={classes.description}>
            {isDesktop && (
              <motion.div {...animFromRight} className={classes.chineseText}>
                變形 相同的代碼
              </motion.div>
            )}
          </div>

          <div className={classes.titleWrapper}>
            {/* Desktop  version */}
            {isDesktop && (
              <Title
                classname={classes.title}
                isHiddenLine
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-start'
                }}
                animWrapperContainer={{
                  whileInView: {
                    height: '80%'
                  }
                }}
                isShadowAnim={false}
              >
                <motion.span {...animFromRight}>Morph{'\u00A0'}</motion.span>
                <GreenText1 {...animFromRight}>id</GreenText1>
              </Title>
            )}

            {/* mobile version */}
            {!isDesktop && (
              <Title
                classname={classes.title}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-start'
                }}
                animWrapperContainer={{
                  whileInView: {
                    height: '100%'
                  }
                }}
                isShadowAnim={false}
              >
                <motion.span {...animFromDown}>Morph{'\u00A0'}</motion.span>
                <br/>
                <motion.span className={classes.greenText} {...animFromDown}>id</motion.span>
                <motion.span {...animFromDown} className={classes.chineseText}>
                  變形 相同的代碼
                </motion.span>
              </Title>
            )}
          </div>

          <Paragraph
            className={classes.morhDescr}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-start'
            }}
          >
            {paragraphAnimationFromRight(morphIDText.title)}
          </Paragraph>

          {isDesktop ? (
            <motion.div {...animFromRight} className={classes.waysToStartChinese}>
              2 種 方式開始
            </motion.div>
          ) : (
            <motion.div {...animFromDown} className={classes.waysToStartChinese}>
              2 種 方式開始
            </motion.div>
          )}
          {isDesktop ? (
            <motion.div
              key={Math.random()}
              {...animFromRight}
              className={classes.morhTitle}
            >
              2 ways to start
            </motion.div>
          ) : (
            <motion.div key={Math.random()} {...animFromDown} className={classes.morhTitle}>
              2 ways to start
            </motion.div>
          )}
            <Paragraph
              className={`${classes.morhDescr} ${classes.waysToStartParagraph}`}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start'
              }}
            >
              {paragraphAnimationFromRight(morphIDText.waysToStart)}
            </Paragraph>
                  </div>
       </div>
    </div>
  )
};

export default MorphId;
