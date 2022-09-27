import React from "react";
import {motion} from 'framer-motion';

import {Title, GreenText, Paragraph, Accordion} from "components";

import CoinVideo from "assets/video/coin.video.mp4";
import ComparingCards from 'assets/video/comp.video.mp4';

import classes from "./style.module.scss";
import {useWindowWidth} from "hooks/useWindowWidth";
import Column from "./components/Column/Column";

import {paragraphAnimation} from 'farmerMotionsAnimations/paragraphAnimation';

const data = [
  {
    title: "Complete the task",
    subtitle: (
      <p className={classes.subtitle}>
        By completing in-game tasks you are getting rewarded with our native
        token
      </p>
    ),
  },
  {
    title: "Win the challenge",
    subtitle: (
      <p className={classes.subtitle}>
        We have a lot of funny challenges between our players. winners will be
        rewarded
      </p>
    ),
    borderColor: "rgba(53,115,107,0.3)",
  },
  {
    title: "Sell your staff",
    subtitle: (
      <p className={classes.subtitle}>
        You have a lot of opportunities of building something better than
        others. Be the best one and sell your assets
      </p>
    ),
    borderColor: "rgba(63,76,53,0.3)",
  },
];

export const Earn = () => {
  const isDesktop = useWindowWidth(1024);

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

  const GreenText1 = motion(GreenText);

  return (
    <>
      <div className={classes.container}>
        {!isDesktop && (
          <video className={classes.coin} src={CoinVideo} autoPlay loop muted playsInline/>
        )}
        <div className={classes.wrapper}>
          <div className={classes.contentWrapper}>
            <div>
              <Title classname={classes.title}>
                <div
                  style={{
                    display: "flex",
                    alignItems: 'center',
                    flexWrap: 'nowrap'
                  }}
                >
                  <GreenText1>EARN</GreenText1>
                  {isDesktop && (
                    <motion.span {...animFromDown} className={classes.chineseText}>賺
                      邊玩邊玩</motion.span>
                  )}
                </div>
                <motion.span {...animFromDown}>WHILE PLAY</motion.span>
              </Title>
              <Paragraph className={classes.paragraph}>
                {paragraphAnimation('Earn crypto in MM tokens as in-game rewards through playing, completing quests, performing special achievements, and win prizes in tournaments and events.')}
              </Paragraph>
            </div>
            {isDesktop && (
              <motion.div
                {...animFromRight}
              >
                <video
                  className={classes.coin}
                  src={CoinVideo}
                  autoPlay
                  loop
                  playsInline
                  muted
                />
              </motion.div>
            )}
          </div>
          <div style={{marginTop: 40}}>
            {!isDesktop &&
              data.map(({title, subtitle}, i) => (
                <Accordion key={i} title={title} subtitle={subtitle}/>
              ))}
          </div>
          {!isDesktop && <video
            className={classes.comparingVideo}
            src={ComparingCards}
            autoPlay
            playsInline
            loop
            muted
          />}
        </div>
      </div>
      {isDesktop && (
        <div className={classes.tableWrapper}>
          <div className={classes.container}>
            <div className={classes.table}>
              {data.map(({title, subtitle, borderColor}, i) => (
                <Column
                  key={i}
                  title={title}
                  subtitle={subtitle}
                  borderColor={borderColor}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Earn;
