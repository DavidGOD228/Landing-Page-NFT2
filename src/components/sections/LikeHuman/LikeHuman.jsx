import React from 'react';
import { motion } from 'framer-motion';

import Title from '../../common/Title/Title';
import Paragraph from '../../common/Paragraph/Paragraph';
import AccordionWithIcon from '../../common/AccordionWithIcon/AccordionWithIcon';
import ColumnItem from './components/ColumnItem/ColumnItem';

import { useWindowWidth } from '../../../hooks/useWindowWidth';

import classes from './style.module.scss';

import { accordionData, tableData } from './data';

import { useWindowSize } from 'hooks/useWindowDimensions';
import { media } from 'utils/media';
import DesktopSplashes from './components/DesktopSplashes/DesktopSplashes';
import MobileSplashes from './components/MobileSplashes/MobileSplashes';

import { Parallax } from 'react-scroll-parallax';

const speedParallax = 20;

export const LikeHuman = () => {
	const isDesktop = useWindowWidth(1024);
	const { width } = useWindowSize();

	const getStartInitVal = () => {
		if (width > media.mDesktop) return -200;
		if (width > media.tablet) return -100;
		if (width > media.lMobile) return -50;
		return -25;
	};

	const table = (
		<div className={classes.tableWrapper}>
			<div className={classes.table}>
				{tableData.map(({ id, icon, title, subtitle }, idx) => (
					<ColumnItem key={id} icon={icon} title={title} subtitle={subtitle} />
				))}
			</div>
		</div>
	);

	const accordion = (
		<div className={classes.content}>
			<div className={classes.accordionContainer}>
				{accordionData.map(({ id, icon, title, subtitle }) => (
					<AccordionWithIcon
						key={id}
						icon={icon}
						title={title}
						subtitle={subtitle}
					/>
				))}
			</div>
		</div>
	);

	const pargText =
		"Virtual characters, complete with very different physical and character traits, are born, live and reproduce. A series of 8 bars, showing your character's basic needs. Check your Morph, ensure adequate social life, keep them healthy, advance them in their professional activities and help them realize their dreams.";

	const animFromRight = {
		initial: {
			x: 200,
			opacity: 0
		},
		whileInView: {
			x: 0,
			opacity: 1
		},
		transition: {
			duration: 1,
			ease: 'easeInOut'
		},
		viewport: { once: true }
	};

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
		<div id='features' className={classes.container}>
			<div className={classes.titleWrapper}>
				{/* paragraph descktop */}
				{isDesktop && (
					<Paragraph className={classes.paragraph}>
						{pargText.split(' ').map((word, idx) => {
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
									{idx + 1 !== pargText.split(' ').length && '\u00A0'}
								</motion.span>
							);
						})}
					</Paragraph>
				)}

				{/* paragraph mobile */}
				{!isDesktop && (
					<Paragraph className={classes.paragraph}>
						{pargText.split(' ').map((word, idx) => {
							return (
								<motion.span
									key={word + idx}
									initial={{ y: 50, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{
										duration: 1,
										ease: 'easeInOut'
									}}
									viewport={{ once: true }}
								>
									{word}
									{idx + 1 !== pargText.split(' ').length && '\u00A0'}
								</motion.span>
							);
						})}
					</Paragraph>
				)}

				{/* title descktop */}
				{isDesktop && (
          <motion.div
            initial={{ x: getStartInitVal() }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 1,
              ease: 'easeInOut'
            }}
            viewport={{ once: true }}
          >
            <Title
              classname={classes.title}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start'
              }}
              borderHeight='100%'
            >
              <motion.span {...animFromRight}>it&apos;s{'\u00A0'}</motion.span>
              <motion.span {...animFromRight}>just{'\u00A0'}</motion.span>
              <motion.span {...animFromRight}>like{'\u00A0'}</motion.span>
              <motion.span {...animFromRight} className={classes.greenText}>
                a human
              </motion.span>
            </Title>
          </motion.div>
				)}

				{/* title mobile */}
				{/*{!isDesktop && <MobileSplashes/>}*/}
				{!isDesktop && (
					<motion.div>
						<Title
							classname={classes.title}
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								justifyContent: 'flex-start'
							}}
							borderHeight='80%'
						>
							<motion.span {...animFromDown}>it&apos;s{'\u00A0'}</motion.span>
							<motion.span {...animFromDown}>just{'\u00A0'}</motion.span>
							<motion.span {...animFromDown}>like{'\u00A0'}</motion.span>
							<motion.span {...animFromDown}>a{'\u00A0'}</motion.span>
							<motion.span {...animFromDown} className={classes.greenText}>
								human
							</motion.span>
						</Title>
					</motion.div>
				)}
			</div>
			{/*<Parallax speed={0}>*/}
			{isDesktop ? table: accordion}
			{/*</Parallax>*/}
			{/*{*/}
			{/*    isDesktop ? <DesktopSplashes/> : null*/}
			{/*}*/}
		</div>
	);
};

export default LikeHuman;
