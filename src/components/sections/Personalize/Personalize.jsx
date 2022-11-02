import React from 'react';
import { motion } from 'framer-motion';

import Title from '../../common/Title/Title';
import GreenText from '../../common/GreenText/GreenText';
import Table from '../../common/Table/Table';

import classes from './style.module.scss';
import Items from './Items/Items';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import Paragraph from '../../common/Paragraph/Paragraph';

import { paragraphAnimation } from 'farmerMotionsAnimations/paragraphAnimation';

const data = [
	{
		end: 25,
		text: 'Lands \n appartments',
		suffix: 'k',
		prefix: '＞'
	},
	{
		end: 35,
		text: 'Clothing',
		suffix: 'k',
		prefix: '＞'
	},
	{
		end: 20,
		text: 'Furniture',
		suffix: 'k',
		prefix: '＞'
	}
];

export const Personalize = () => {
	const isDesktop = useWindowWidth(1024);


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

	const GreenText1 = motion(GreenText);

	return (
		<>
			<div
				id='marketplace'
				className={classes.personalizeContainer}
			>
				<Title
					classname={classes.marketplaceTitle}
					borderHeight={isDesktop ? "89%": "80%"}
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start'
					}}
				>
					<motion.p {...animFromDown}>The</motion.p>
					<GreenText1 {...animFromDown}>MARKETPLACE</GreenText1>
				</Title>
				<div className={classes.content}>
					{isDesktop && (
						<Paragraph className={classes.paragraph}>
							{paragraphAnimation(
								'Buy and sell your assets and services on the METAMORPH Marketplace, both in and outside the game.'
							)}
						</Paragraph>
					)}
					<Table
						style={{
							marginTop: 35,
							width: isDesktop ? 400 : '100%',
							height: isDesktop ? 114 : 89,
							textTransform: isDesktop ? 'initial' : 'uppercase'
						}}
						isGrayTable
						data={data}
					/>
				</div>
				<Items />
			</div>
		</>
	);
};

export default Personalize;
