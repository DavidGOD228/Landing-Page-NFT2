import React from 'react'

import {motion} from 'framer-motion';

import {Title, GreenText, Paragraph, Table, GenerateCode} from "components";

import LazyLoad from 'react-lazy-load';

import Quotes from "assets/images/quotes.svg";
import MobileCity from 'assets/video/mobileCity.video.mp4'
import DesktopCity from 'assets/video/desktopCity.video.mp4'

import classes from "./style.module.scss";
import {useWindowWidth} from "hooks/useWindowWidth";

import {paragraphAnimation} from 'farmerMotionsAnimations/paragraphAnimation';
import { offset } from 'utils/lazyload';

const data = [
  {
    end: 15,
    text: "HOUSES",
    suffix: "k",
  },
  {
    end: 200,
    text: "APARTMENTS",
    suffix: "k",
  },
  {
    end: 15,
    text: "HOUSES",
    suffix: "k",
  },
];

export const FataMorgana = () => {
  const isDesktop = useWindowWidth(1024);

  const parg1 = 'Metamorph is built on putting the power of choice into the hands of players All in game actions are governed by you, with no artificial barriers. We empower you to create your unique story by participating in a world where we expect the unexpected. From moral actions to investments, crusades, businesses operations and gambling – you havethe choice play and earn in a style you enjoy.';

  return (
    <div id="fataMorgana" className={classes.container}>
      <div className={classes.topContainer}>
        <div className={classes.content}>
          <div>
            <Title classname={classes.title}>
              {!isDesktop && (
                <motion.p
                  className={classes.chineseText}
                  initial={{y: 25}}
                  whileInView={{y: 0}}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut'
                  }}
                  viewport={{once: true}}
                >
                  全部的 自由 行動的
                </motion.p>
              )}
              <motion.p
                className={classes.welcome}
                initial={{y: 150}}
                whileInView={{y: 0}}
                transition={{
                  duration: 1,
                  ease: 'easeInOut'
                }}
                viewport={{once: true}}>
                WELCOME TO..
              </motion.p>
              <motion.div
                initial={{y: 150}}
                whileInView={{y: 0}}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: 'easeInOut'
                }}
                viewport={{once: true}}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap'
                }}
              >
                <GreenText classname={classes.greenText}>
                  FATA
                </GreenText>
                <GreenText classname={classes.greenText}>
                  MORGANA
                </GreenText>
              </motion.div>
            </Title>
            <motion.span
              className={classes.code}
              initial={{y: 150}}
              whileInView={{y: 0}}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: 'easeInOut'
              }}
              viewport={{once: true}}>
              <GenerateCode>D2128NDJK376LAZXWM3NK7</GenerateCode>
            </motion.span>
          </div>
          {isDesktop && (
            <motion.div
              style={{margin: "69px 56px 0px auto"}}
              initial={{y: 150}}
              whileInView={{y: 0}}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: 'easeInOut'
              }}
              viewport={{once: true}}>
              <Table
                style={{width: 400, height: 114}}
                data={data}/>
            </motion.div>
          )}
        </div>
        <motion.div
          initial={{y: 150}}
          whileInView={{y: 0}}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: 'easeInOut'
          }}
          viewport={{once: true}}>
          <Paragraph className={classes.paragraph}>
            {paragraphAnimation(parg1)}
          </Paragraph>
        </motion.div>
      </div>
      <div className={classes.cityContainer}>
        {!isDesktop && (
          <div className={classes.mobileTableWrapper}>
            <Table
              style={{margin: "36px auto 0", width: '100%', height: 89}}
              isGrayTable
              data={data}/>
          </div>
        )}
        <motion.p
          className={classes.cityText}
          initial={{y: 150}}
          whileInView={{y: 0}}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: 'easeInOut'
          }}
          viewport={{once: true}}>
          {isDesktop && (
            <LazyLoad offset={offset}>
              <img className={classes.quotes} src={Quotes} alt=""/>
            </LazyLoad>
          )}
          an adventure that will take your breath away
        </motion.p>
        <div className={classes.videoWrapper}>
        <LazyLoad offset={offset}>
            <video className={classes.desktopCity} src={DesktopCity} autoPlay loop muted playsInline />
          </LazyLoad>
          <LazyLoad offset={offset}>
            <video className={classes.mobileCity} src={MobileCity} autoPlay loop muted playsInline />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default FataMorgana;
