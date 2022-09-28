import { Title, GreenText, Paragraph, RoadmapMobile } from 'components'
import Column from './components/Column/Column'

import {useWindowWidth} from 'hooks/useWindowWidth'
import {roadmapTableData} from './data/running'

import AppStore from 'assets/images/appStore.svg'
import GooglePlay from 'assets/images/googlePlay.png'

import classes from './style.module.scss'

import { motion } from 'framer-motion';

export const Roadmap = () => {
  const iSDesktop = useWindowWidth(1024);

  const titleText = 'A dreamer is one who can find his way in the moonlight and see the sunrise before the rest of the world.';
  
  const GreenText1 = motion(GreenText);

  const animFromDown = {
		initial: {
			y: 50,
			opacity: 0
		},
		whileInView: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: 1,
			ease: 'easeInOut'
		},
		viewport: { once: true }
	};

  return (
    <div id="roadmap" className={classes.container}>
      <div className={classes.wrapper}>
        <Title 
          classname={classes.title}
          isAfterBorder={iSDesktop}
          classnameWrapper={classes.wrapperContentTitleLeftSide}
        >
          <GreenText1 classname={classes.greenText} {...animFromDown}>We are</GreenText1>
          <motion.span {...animFromDown}>running!</motion.span>
        </Title>
        <div className={classes.paragraphWrapper}>
          <Paragraph className={classes.paragraph}>
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
          </Paragraph>
        </div>
      </div>
      {
        iSDesktop && <div className={classes.table}>
          {
            roadmapTableData.map((data) => <Column key={data.title} data={data}/>)
          }

          <div className={classes.appColumn}>
            <div className={classes.header}/>
            <div className={classes.appContent}>
              <p className={classes.playGameOn}>Play game on:</p>
              <div className={classes.appBtnContainer}>
                <div className={classes.appBtn}>
                  <img src={AppStore} alt=""/>
                  <span className={classes.appText}>App Store</span>
                </div>
                <div className={classes.appBtn}>
                  <img src={GooglePlay} alt=""/>
                  <span className={classes.appText}>Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      <RoadmapMobile />
    </div>
  )
}

export default Roadmap
