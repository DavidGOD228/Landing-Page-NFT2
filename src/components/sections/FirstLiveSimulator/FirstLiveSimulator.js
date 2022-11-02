import { motion } from 'framer-motion';

import { GlobalContainer, GreenText, Title, Paragraph } from 'components';

import LazyLoad from 'react-lazy-load';

import WhiteLine from 'assets/images/whiteLine.svg';

import SmileDesktop from 'assets/images/smileDesktop.svg';

import MobilePosterWebp from 'assets/images/posters/falling_Mobile.webp'
import MobilePosterPng from 'assets/images/posters/falling_Mobile.png'

import classes from './style.module.scss';

import { paragraphAnimation } from 'farmerMotionsAnimations/paragraphAnimation';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import { offset } from 'utils/lazyload';
import { isSafariNavigator } from 'utils/isMobileSafari.js'
import Slider from "../Personalize/Slider/Slider";
import NavSlider from "../Personalize/navSlider/navSlider";
import React, {useEffect, useRef, useState} from "react";
import useGetCurrentScroll from "../../../hooks/useGetCurrentScroll";
const speedParallax = 20;

export function FirstLiveSimulator() {
	const isDesktop = useWindowWidth(1024);
	const textPar = `Metamorph is an open-world exploration, NFT creature collector
  and life simulator game built on the Polygon Blockchain,
  releasing on IOS and Android in 2023. Play-to-earn in a
  graphically-rich sci-fi adventure and life builder that allows
  you to feel the life inside the game.`;

	const [activeSlide, setActiveSlide] = useState(1);
	const handleNextSlide = () => {
		if (activeSlide === 3) return;
		setActiveSlide(prevSlide => prevSlide + 1);
	};

	const handlePrevSlide = () => {
		if (activeSlide === 1) return;
		setActiveSlide(prevSlide => prevSlide - 1);
	};

  const morphVideoMobile = "https://res.cloudinary.com/dbbqyqt75/video/upload/v1667294229/videos/Falling_Mobile_qr8p5z.mp4"

  const morphVideoDesktop = "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082184/videos/morphDesktop.video_ngdyb1.mp4"

	const {scrollPosition} = useGetCurrentScroll()
	const videoRef = useRef()

	useEffect(() => {
		const position = isDesktop ? videoRef?.current?.offsetHeight: videoRef?.current?.offsetHeight + 200
		if(scrollPosition >= position) {
			videoRef.current.play()
		}
	}, [scrollPosition])

	return (
		<div className={classes.wrapper}>
			{isDesktop && <video
				ref={videoRef}
        className={classes.morphVideo}
        muted
        playsInline
        src={morphVideoDesktop}
      />}
      {!isDesktop && <div offset={offset} className={classes.videoWrapper}>
        <video
          className={classes.morphVideo}
					ref={videoRef}
					muted
          playsInline
          poster={isSafariNavigator ? MobilePosterPng : MobilePosterWebp}
          src={morphVideoMobile}
        />
      </div>}
			<GlobalContainer style={{order: 0}}>
				<div className={classes.flsContainer}>

					 <div speed={speedParallax} className={classes.content}>
						<motion.div
							key='firstLiveTitle'
							className={classes.descr}
							initial={{ y: 150 }}
							whileInView={{ y: 0 }}
							transition={{
								delay: 0.5,
								duration: 1,
								ease: 'easeInOut'
							}}
							viewport={{ once: true }}
						>
							<Title classname={classes.title}
										 borderHeight={isDesktop ? "89%": "80%"}
							>
								First{' '}
								<GreenText>
									live{' '}
									<span className={classes.grayLine}>
										simulator <img src={WhiteLine} alt='' />
									</span>{' '}
								</GreenText>
								on web 3
							</Title>
							<Paragraph className={classes.paragraph}>
								{paragraphAnimation(textPar)}
							</Paragraph>
							<div className={classes.respect}>
								<p className={classes.privacyText}>Respect his Privacy!</p>
								<LazyLoad offset={offset}>
									<img className={classes.smile} src={SmileDesktop} alt='' />
								</LazyLoad>
							</div>
						</motion.div>
						 {
							 !isDesktop ? <>
								 <Slider className={classes.slider} activeSlide={activeSlide} />
								 <NavSlider
									 activeSlide={activeSlide}
									 handleNextSlide={handleNextSlide}
									 handlePrevSlide={handlePrevSlide}
								 />
							 </>: null
						 }
					 </div>
				</div>
			</GlobalContainer>
		</div>
	);
}
