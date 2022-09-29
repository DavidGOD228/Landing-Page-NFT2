import React, { useRef } from 'react';
import { motion } from 'framer-motion';

import Title from '../../common/Title/Title';
import GreenText from '../../common/GreenText/GreenText';
import Paragraph from '../../common/Paragraph/Paragraph';
import ListItem from './components/ListItem/ListItem';

import classes from './style.module.scss';
import { useWindowWidth } from 'hooks/useWindowWidth';

import AnimatedTextCharacter from '../../common/AnimatedTextCharacter/AnimatedTextCharacter';
import FirstLine from './components/FirstLine/FirstLine';
import SecondLine from './components/SecondLine/SecondLine';
import ThirdLine from './components/ThirdLine/ThirdLine';

import { media } from 'utils/media';
import { useWindowSize } from 'hooks/useWindowDimensions';
import { useLazyBackgroundLoad } from 'hooks/useLazyBackgroundLoad';
import DesktopSplashes from "./components/DesktopSplashes/DesktopSplashes";

import freedomBackgroundImg from 'assets/images/freedom-desktop.png';

export const Freedom = () => {

	const isDesktop = useWindowWidth(1024);

  const refDivBackground = useRef();
  const backgroundImg = isDesktop && freedomBackgroundImg;
	const urlBackground = useLazyBackgroundLoad(backgroundImg, refDivBackground);

	const list = [
		{
			id: 1,
			delay: 1,
			text: (
				<AnimatedTextCharacter
					delay={1.5}
					className={classes.listParagraph}
					text='Enter the world of the future'
				/>
			),
			line: <FirstLine />
		},
		{
			id: 2,
			delay: isDesktop ? 3.5 : 2,
			text: (
				<AnimatedTextCharacter
					delay={isDesktop ? 4 : 2.5}
					className={classes.listParagraph}
					text='Build your dream life'
				/>
			),
			line: <SecondLine />
		},
		{
			id: 3,
			delay: isDesktop ? 6 : 3,
			text: (
				<AnimatedTextCharacter
					delay={isDesktop ? 6.5 : 3.5}
					className={classes.listParagraph}
					text='Forge your path, whatever it may be. Make it big in METAMORPH and see your success transferred to the real world.'
				/>
			),
			line: <ThirdLine />
		}
	];
	const parghText1 =
		'MM is built on putting the power of choice into the hands of players. All in-game actions are governed by you, with no artificial barriers. We empower you to create your unique story by participating in a world where we expect the unexpected. From moral actions to investments, socialize, business operations, and gambling you have the choice to play and earn in a style you enjoy.';

	const { width } = useWindowSize();

	const getStartInitVal = () => {
		if (width > media.mDesktop) return -125;
		if (width > media.tablet) return -75;
		if (width > media.lMobile) return -50;
		return -25;
	};

  const animFromRight = {
    initial: { 
      x: 100,
      opacity: 0,
    },
    whileInView: { 
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: 1,
      ease: 'easeInOut'
    },
    viewport: { once: true }
  }

  const GreenText1 = motion(GreenText);

	return (
		<div className={classes.container} ref={refDivBackground} style={{backgroundImage: `url(${urlBackground})`}}>
			<div className={classes.topContent}>
				{
					isDesktop && <DesktopSplashes/>
				}
				<div className={classes.content}>
					{/* desktop */}
					{isDesktop && (
						<Paragraph className={classes.paragraph}>
							{parghText1.split(' ').map((word, idx) => {
								return (
									<motion.span
										key={word + idx}
										initial={{ x: getStartInitVal(), opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{
											duration: 1,
											ease: 'easeInOut'
										}}
										viewport={{ once: true }}
									>
										{word}
										{idx + 1 !== parghText1.split(' ').length && '\u00A0'}
									</motion.span>
								);
							})}
						</Paragraph>
					)}

					{isDesktop && (
            <Title 
              classname={classes.title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start'
              }}
            >
              <motion.p {...animFromRight} className={classes.chineseText}>全部的 自由 行動的</motion.p>
              <motion.span {...animFromRight} className={classes.total}>
                TOTAL
              </motion.span>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
              }}>
                <GreenText1 {...animFromRight} classname={classes.greenText}>
                  FREEDOM{'\u00A0'}
                </GreenText1>
                <GreenText1 {...animFromRight} classname={classes.greenText}>
                  OF{'\u00A0'}
                </GreenText1>
                <GreenText1 {...animFromRight} classname={classes.greenText}>
                  ACTION
                </GreenText1>
              </div>
            </Title>
					)}

					{/* mobile */}
					{!isDesktop && (
						<motion.div
							initial={{ y: 150, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{
								duration: 1,
								ease: 'easeInOut'
							}}
							viewport={{ once: true }}
						>
							<Title classname={classes.title}>
								<p className={classes.chineseText}>全部的 自由 行動的</p>
								<p className={classes.total}>
									TOTAL{' '}
									<GreenText classname={classes.greenText}>
										FREEDOM of ACTION{' '}
									</GreenText>
								</p>
							</Title>
						</motion.div>
					)}
				</div>
				{!isDesktop && (
					<Paragraph className={classes.paragraph}>
						{parghText1.split(' ').map((word, idx) => {
							return (
								<motion.span
									key={word + idx}
									initial={{ y: 75, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{
										duration: 1,
										ease: 'easeInOut'
									}}
									viewport={{ once: true }}
								>
									{word}
									{idx + 1 !== parghText1.split(' ').length && '\u00A0'}
								</motion.span>
							);
						})}
					</Paragraph>
				)}
			</div>
			<div className={classes.listContainer}>
				{list.map(({ id, line, text, delay }) => (
					<ListItem delay={delay} key={id} line={line} text={text} />
				))}
			</div>
		</div>
	);
};

export default Freedom;
