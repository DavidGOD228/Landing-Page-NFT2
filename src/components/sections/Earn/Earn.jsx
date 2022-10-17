import React from 'react';
import { motion } from 'framer-motion';

import { Title, GreenText, Paragraph, Accordion } from 'components';

import CoinVideoMp4 from "assets/video/coin.video.mp4";
import CoinVideoWebm from "assets/video/coin.video.webm";
import CoinPoster from "assets/images/posters/coin.webp";

import ComparingCardsMp4 from 'assets/video/comp.video.mp4';
import ComparingCardsWebm from 'assets/video/comp.video.webm';

import classes from './style.module.scss';
import { useWindowWidth } from 'hooks/useWindowWidth';
import Column from './components/Column/Column';
import LazyLoad from 'react-lazy-load';
import { offset } from 'utils/lazyload';

import {paragraphAnimation} from 'farmerMotionsAnimations/paragraphAnimation';
import MobileSplashes from "./components/MobileSplashes/MobileSplashes";

import { Parallax } from 'react-scroll-parallax';
const speedParallax = 20;

const data = [
	{
		title: 'Complete a task',
		subtitle: (
			<p className={classes.subtitle}>
				By completing a few in-game tasks, you get our native token.
			</p>
		)
	},
	{
		title: 'Win challenges',
		subtitle: (
			<p className={classes.subtitle}>
				We have many challenges between our players. The most resourceful will be rewarded.
			</p>
		),
		borderColor: 'rgba(53,115,107,0.3)'
	},
	{
		title: 'Sell your staff',
		subtitle: (
			<p className={classes.subtitle}>
				You have a lot of opportunities to build something better than others. Be the best one and sell your assets.
			</p>
		),
		borderColor: 'rgba(63,76,53,0.3)'
	}
];


export const Earn = () => {
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

	const GreenText1 = motion(GreenText);

	return (
		<>
			<div className={classes.container}>
				{!isDesktop && (
					<LazyLoad offset={offset}>
						<video
							className={classes.coin}
							autoPlay
							loop
							muted
							playsInline
							poster={CoinPoster}
						>
              <source src={CoinVideoWebm} type="video/webm" />
              <source src={CoinVideoMp4} type="video/mp4" />
            </video>
					</LazyLoad>
				)}
				<div className={classes.wrapper}>
					<div className={classes.contentWrapper}>
						<div>
							<Title
								classname={classes.title}
								borderHeight={isDesktop ? '85%': '80%'}
							>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										flexWrap: 'nowrap'
									}}
								>
									<GreenText1>EARN</GreenText1>
									{isDesktop && (
										<motion.span
											{...animFromDown}
											className={classes.chineseText}
										>
											賺 邊玩邊玩
										</motion.span>
									)}
								</div>
								<motion.span {...animFromDown}>WHILE PLAY</motion.span>
							</Title>
							<Paragraph className={classes.paragraph}>
								{paragraphAnimation(
									'Earn cryptocurrencies in MM tokens as in-game rewards by playing, completing missions, and reaching career goals. Winning rewards can be in the form of NFT’s or native token.'
								)}
							</Paragraph>
						</div>
						{isDesktop && (
              <LazyLoad offset={offset}>
                <motion.div {...animFromRight}>
                  <video
                    className={classes.coin}
                    autoPlay
                    loop
                    playsInline
                    muted
                  >
                    <source src={CoinVideoWebm} type="video/webm" />
                    <source src={CoinVideoMp4} type="video/mp4" />
                  </video>
                </motion.div>
              </LazyLoad>
						)}
					</div>
					{
						!isDesktop && 
            // <Parallax speed={10}>
              <MobileSplashes/>
            // </Parallax>
					}
					<div style={{ marginTop: 40 }}>
						{!isDesktop &&
							data.map(({ title, subtitle }, i) => (
								<Accordion key={i} title={title} subtitle={subtitle} />
							))}
					</div>
				</div>
				{!isDesktop && (
					<LazyLoad className={classes.comparingVideoWrapper} offset={offset}>
						<video
							className={classes.comparingVideo}
							autoPlay
							playsInline
							loop
							muted
						>
							<source src={ComparingCardsWebm} type="video/webm" />
							<source src={ComparingCardsMp4} type="video/mp4" />
						</video>
					</LazyLoad>
				)}
			</div>
			{isDesktop && (
				<div className={classes.tableWrapper}>
					<div className={classes.container}>
						<div className={classes.table}>
							{data.map(({ title, subtitle, borderColor }, i) => (
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
