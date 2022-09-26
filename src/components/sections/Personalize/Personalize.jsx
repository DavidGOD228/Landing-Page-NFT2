import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Title from '../../common/Title/Title';
import GreenText from '../../common/GreenText/GreenText';
import Table from '../../common/Table/Table';

import classes from './style.module.scss';
import Slider from './Slider/Slider';
import Items from './Items/Items';
import NavSlider from './navSlider/navSlider';
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

	const [activeSlide, setActiveSlide] = useState(1);

	const handleNextSlide = () => {
		if (activeSlide === 4) return;
		setActiveSlide(prevSlide => prevSlide + 1);
	};

	const handlePrevSlide = () => {
		if (activeSlide === 1) return;
		setActiveSlide(prevSlide => prevSlide - 1);
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
		viewport: {once: true}
	};

	const GreenText1 = motion(GreenText);

	return (
		<>
			<div
				className={`${classes.containerSliderSection} ${classes.desktopVersion}`}
			>
				<div className={classes.contentBlock}>
					<Title
						classname={classes.personalizeTitle}
						classnameWrapper={classes.personalizeline}
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'flex-start'
						}}
					>
						<motion.span {...animFromDown}>Personalize{'\u00A0'}</motion.span>
						<GreenText1 {...animFromDown}>and{'\u00A0'}</GreenText1>
						<GreenText1 {...animFromDown}>make{'\u00A0'}</GreenText1>
						<GreenText1 {...animFromDown}>it{'\u00A0'}</GreenText1>
						<GreenText1 {...animFromDown}>unique</GreenText1>
					</Title>
					<p className={classes.personalizeParagraph}>
						{paragraphAnimation(
							'Costruisci comunità per vivere le tue idee più sfrenate con soldi veri sul tavolo.'
						)}
					</p>

					<NavSlider
						className={classes.desktopNavSlider}
						activeSlide={activeSlide}
						handleNextSlide={handleNextSlide}
						handlePrevSlide={handlePrevSlide}
					/>
				</div>

				<Slider className={classes.slider} activeSlide={activeSlide} />
			</div>

			<div className={classes.mobileVersion}>
				<div className={classes.contentBlock}>
					<Title
						classname={classes.personalizeTitle}
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'flex-start'
						}}
					>
						<motion.span {...animFromDown}>Personalize{'\u00A0'}</motion.span>
						<GreenText1 {...animFromDown}>and{'\u00A0'}</GreenText1>
						<GreenText1 {...animFromDown}>make{'\u00A0'}</GreenText1>
						<GreenText1 {...animFromDown}>it{'\u00A0'}</GreenText1>
						<GreenText1 {...animFromDown}>unique</GreenText1>
					</Title>
					<p className={classes.personalizeParagraph}>
						{paragraphAnimation(
							'Costruisci comunità per vivere le tue idee più sfrenate con soldiveri sul tavolo.'
						)}
					</p>
				</div>

				<Slider className={classes.slider} activeSlide={activeSlide} />

				<NavSlider
					className={classes.mobileNavSlider}
					activeSlide={activeSlide}
					handleNextSlide={handleNextSlide}
					handlePrevSlide={handlePrevSlide}
				/>
			</div>

			<div className={classes.personalizeContainer}>
				<Title
					classname={classes.marketplaceTitle}
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'flex-start'
					}}
				>
					<motion.span {...animFromDown}>The</motion.span>
					<br />
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
