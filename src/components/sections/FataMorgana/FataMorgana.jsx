import ScrollAnimation from "react-animate-on-scroll";
import {motion} from 'framer-motion';

import {Title, GreenText, Paragraph, Table} from "components";

import City from "assets/images/city-circle.png";
import GreenCity from "assets/images/greenCity.png";
import Quotes from "assets/images/quotes.svg";

import classes from "./style.module.scss";
import {useWindowWidth} from "hooks/useWindowWidth";

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

  return (
    <div className={classes.container}>
      <div className={classes.topContainer}>
        <div className={classes.content}>
          <div>
            <Title classname={classes.title}>
              {!isDesktop && (
                <motion.p
                  className={classes.chineseText}
                  initial={{y: 500}}
                  whileInView={{y: 0}}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut'
                  }}
                  viewport={{once: true}}>
                  全部的 自由 行動的
                </motion.p>
              )}
              <motion.p
                className={classes.welcome}
                initial={{y: 500}}
                whileInView={{y: 0}}
                transition={{
                  duration: 1,
                  ease: 'easeInOut'
                }}
                viewport={{once: true}}>
                WELCOME TO..
              </motion.p>
              <motion.div
                initial={{y: 500}}
                whileInView={{y: 0}}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: 'easeInOut'
                }}
                viewport={{once: true}}>
                <GreenText classname={classes.greenText}>
                  FATA <br/> MORGANA
                </GreenText>
              </motion.div>
            </Title>
            <motion.span
              className={classes.code}
              initial={{y: 500}}
              whileInView={{y: 0}}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: 'easeInOut'
              }}
              viewport={{once: true}}>
              D2128NDJK376LAZXWM3NK7
            </motion.span>
          </div>
          {isDesktop && (
            <motion.div
              style={{margin: "69px 56px 0px auto"}}
              initial={{y: 500}}
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
          initial={{y: 500}}
          whileInView={{y: 0}}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: 'easeInOut'
          }}
          viewport={{once: true}}>
          <Paragraph className={classes.paragraph}>
            Metamorph is built on putting the power of choice into the hands of
            players All in game actions are governed by you, with no artificial
            barriers. We empower you to create your unique story by participating
            in a world where we expect the unexpected. From moral actions to
            investments, crusades, businesses operations and gambling – you have
            the choice play and earn in a style you enjoy.
          </Paragraph>
        </motion.div>
      </div>
      {!isDesktop && (
        <Table
          style={{margin: "36px auto 0", width: 335, height: 89}}
          data={data}
        />
      )}
      <div className={classes.cityContainer}>
        <motion.p
          className={classes.cityText}
          initial={{y: 500}}
          whileInView={{y: 0}}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: 'easeInOut'
          }}
          viewport={{once: true}}>
            {isDesktop && (
              <img className={classes.quotes} src={Quotes} alt=""/>
            )}
            an adventure that will take your breath away
        </motion.p>
        <span className={classes.light}/>
        <img className={classes.greenCity} src={GreenCity} alt=""/>
        <img className={classes.cityCircle} src={City} alt=""/>
      </div>
    </div>
  );
};

export default FataMorgana;
