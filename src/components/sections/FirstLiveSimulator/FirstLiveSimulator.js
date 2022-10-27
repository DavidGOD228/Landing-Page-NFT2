import { motion } from 'framer-motion';

import { GlobalContainer, GreenText, Title, Paragraph } from 'components';

import LazyLoad from 'react-lazy-load';

import WhiteLine from 'assets/images/whiteLine.svg';
import ToiletPoster from 'assets/images/posters/toitet.webp'
import BedPoster from 'assets/images/posters/bed.webp'

import SmileDesktop from 'assets/images/smileDesktop.svg';

import DesktopPoster from 'assets/images/posters/falling_Desktop.png'
import MobilePosterWebp from 'assets/images/posters/falling_Mobile.webp'
import MobilePosterPng from 'assets/images/posters/falling_Mobile.png'

import classes from './style.module.scss';

import { paragraphAnimation } from 'farmerMotionsAnimations/paragraphAnimation';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import DesktopSplashes from './components/DesktopSplashes/DesktopSplashes';
import { offset } from 'utils/lazyload';
import MobileSplashes from './components/MobileSplashes/MobileSplashes';

import { Parallax } from 'react-scroll-parallax';
import Slider from "../Personalize/Slider/Slider";
import NavSlider from "../Personalize/navSlider/navSlider";
import React, {useState} from "react";
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

  const isSafari = window.safari !== undefined;
  const morphVideoDesktop = isSafari 
   ?  "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082184/videos/morphDesktop.video_ngdyb1.mp4"
   : "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082168/videos/morphDesktop.video_gcr3kd.webm"
  const morphVideoMobile = isSafari 
    ? "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082170/videos/morphMobile.video_xnpfer.mp4"
    : "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082170/videos/morphMobile.video_uuj9zg.webm"

	return (
		<div className={classes.wrapper}>
			{isDesktop && <video
        className={classes.morphVideo}
        autoPlay
        muted
        playsInline
        src={morphVideoDesktop}
      />}
      {!isDesktop && <LazyLoad offset={offset} className={classes.videoWrapper}>
        <video
          className={classes.morphVideo}
          autoPlay
          muted
          playsInline
          preload='auto'
          poster={isSafari ? MobilePosterPng : MobilePosterWebp}
          src={morphVideoMobile}
        />
      </LazyLoad>}
      {/*{isDesktop && */}
      {/*<Parallax speed={-speedParallax / 1.5}>*/}
      {/*  <DesktopSplashes/>*/}
      {/*</Parallax>*/}
      {/*}*/}
      {/*{!isDesktop &&*/}
      {/*<Parallax speed={-speedParallax / 3.5}>*/}
      {/*  <MobileSplashes/>*/}
      {/*</Parallax>*/}
      {/*}*/}

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
