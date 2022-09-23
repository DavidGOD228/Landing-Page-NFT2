import React from 'react';
import { motion } from 'framer-motion';

import Title from '../../common/Title/Title';
import GreenText from '../../common/GreenText/GreenText';
import Paragraph from '../../common/Paragraph/Paragraph';
import AccordionWithIcon from '../../common/AccordionWithIcon/AccordionWithIcon';
import ColumnItem from './components/ColumnItem/ColumnItem';

import { useWindowWidth } from '../../../hooks/useWindowWidth';

import classes from './style.module.scss';

import { accordionData, tableData } from './data';

export const LikeHuman = () => {
	const isDesktop = useWindowWidth(1024);

	const table = (
		<div className={classes.table}>
			{tableData.map(({ id, icon, title, subtitle }, idx) => (
				<ColumnItem key={id} icon={icon} title={title} subtitle={subtitle} />
			))}
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
		'Metamorph is an open-world exploration, NFT creature collector and life simulator game built on the Polygon Blockchain, releasing on IOS and Android in 2023. Play-to-earn in a graphically-rich sci-fi adventure and life builder that allows you to feel the life inside the game.';

  const GreenText1 = motion(GreenText);
  const GreenText2 = motion(GreenText);

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
    }
  }

	return (
		<div className={classes.container}>
			<div className={classes.titleWrapper}>
				<Paragraph
					className={classes.paragraph}
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'flex-end'
					}}
				>
					{pargText.split(' ').map((word, idx) => {
						return (
							<motion.span
								key={word + idx}
								initial={{ x: -200, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									duration: 1,
									ease: 'easeInOut'
								}}
							>
								{word}
								{idx + 1 !== pargText.split(' ').length && '\u00A0'}
							</motion.span>
						);
					})}
				</Paragraph>
				<motion.div
					initial={{ x: 200 }}
					whileInView={{ x: 0 }}
					transition={{
						duration: 1,
						ease: 'easeInOut'
					}}
					// viewport={{once: true}}
				>
					<Title
						classname={classes.title}
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'flex-start'
						}}
					>
						<motion.span {...animFromRight}>it&apos;s{'\u00A0'}</motion.span>
            <motion.span {...animFromRight}>just{'\u00A0'}</motion.span>
            <motion.span {...animFromRight}>like{'\u00A0'}</motion.span>
						<GreenText1 {...animFromRight}>a{'\u00A0'}</GreenText1>
						<GreenText2 {...animFromRight}>human</GreenText2>
					</Title>
				</motion.div>
			</div>
			{isDesktop ? table : accordion}
		</div>
	);
};

export default LikeHuman;
