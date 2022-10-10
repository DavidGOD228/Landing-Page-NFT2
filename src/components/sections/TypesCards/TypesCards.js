import { motion } from 'framer-motion';
import { GlobalContainer, Paragraph } from 'components';

import classes from './styles.module.scss';

import first from 'assets/images/first.svg';
import second from 'assets/images/second.svg';

import MihoMorph from 'assets/images/morphs/miho-ikuta/miho-morph-presentation.png';
import MihoFull from 'assets/images/morphs/miho-ikuta/body-miho-ikuta.png'
import MihoMorphMobile from 'assets/images/miho-morph.png';

import MihoIDMp4 from 'assets/video/white_card.video.mp4';
import MihoIDWebm from 'assets/video/white_card.video.webm';
import WhiteCardPoster from 'assets/images/posters/whiteCard.webp'

import HenriMorph from 'assets/images/morphs/henrik-hail/henrik-hail-presentation.png';
import HenriFull from 'assets/images/morphs/henrik-hail/body-henrik-hail.png'
import HenriMorphDesktop from 'assets/images/henri-morph.png';
import HenriIDMp4 from 'assets/video/green_card.video.mp4';
import HenriIDWebm  from 'assets/video/green_card.video.webm';
import GreenCardPoster from 'assets/images/posters/greenCard.webp'
import { useWindowWidth } from 'hooks/useWindowWidth';
import { morphIDText } from 'data/morphID/text';
import { paragraphAnimation } from 'farmerMotionsAnimations/paragraphAnimation';
import { useWindowSize } from 'hooks/useWindowDimensions';
import { media } from 'utils/media';

export function TypesCards() {
	const isTablet = useWindowWidth(768);

	const { width } = useWindowSize();

	const getStartInitVal = () => {
		if (width > media.mDesktop) return 200;
		if (width > media.tablet) return 100;
		if (width > media.lMobile) return 50;
		return 25;
	};

	const animFromRight = {
		initial: {
			x: getStartInitVal(),
			opacity: 0
		},
		whileInView: {
			x: 0,
			opacity: 1
		},
		transition: {
			duration: 2,
			ease: 'easeInOut'
		},
		viewport: { once: true }
	};

	const animFromLeft = {
		initial: {
			x: getStartInitVal() * -1,
			opacity: 0,
			scale: 0.9
		},
		whileInView: {
			x: 0,
			opacity: 1,
			scale: 1
		},
		transition: {
			duration: 2,
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
		<div className={classes.wrapper}>
			<GlobalContainer>
				<div className={classes.containerTypesCards}>
					<div className={classes.morphBlock}>
						{isTablet && (
							<motion.img
								key='miho-d'
								className={classes.mihoMainImage}
								src={width > media.lDesktop ? MihoFull : MihoMorph}
								alt='miho'
								{...animFromLeft}
							/>
						)}
						{!isTablet && (
							<img
								className={classes.mihoMainImage}
								src={MihoMorphMobile}
								alt='miho'
							/>
						)}

						<div className={classes.contentBlock}>
							<motion.h4
								{...animFromDown}
								className={classes.classiqueParagraph}
							>
								<img
									className={classes.classiqueBorder}
									src={first}
									alt='classique'
								/>
								<p className={classes.title}>CLASSIQUE</p>
							</motion.h4>
							<Paragraph className={`${classes.descr} ${classes.mihoText}`}>
								{paragraphAnimation(morphIDText.classiqueText)}
							</Paragraph>
							{isTablet && (
								<motion.video
									{...animFromDown}
									className={classes.idImage}
									autoPlay
									playsInline
									loop
									muted
									poster={WhiteCardPoster}
								>
                  <source src={MihoIDWebm} type='video/webm' />
                  <source src={MihoIDMp4} type='video/mp4' />
                </motion.video>
							)}
							{!isTablet && (
								<motion.div {...animFromDown}>
									<video
										className={classes.idImage}
										autoPlay
										playsInline
										loop
										muted
									>
										<source src={MihoIDWebm} type='video/webm' />
										<source src={MihoIDMp4} type='video/mp4' />
									</video>
								</motion.div>
							)}
						</div>
					</div>

					<div className={`${classes.morphBlock} ${classes.eternalBlock}`}>
						<div className={classes.contentBlock}>
							<motion.h4 {...animFromDown} className={classes.eternalParagraph}>
								<img
									className={classes.eternalBorder}
									src={second}
									alt='eternal border'
								/>
								<p className={`${classes.title} ${classes.eternalTitle}`}>
									ETERNAL
								</p>
							</motion.h4>
							<Paragraph className={`${classes.descr} ${classes.henriText}`}>
								{paragraphAnimation(morphIDText.eternalText)}
							</Paragraph>
							{isTablet && (
								<motion.video
									className={`${classes.idImage} ${classes.idImageHenri}`}
									{...animFromDown}
									autoPlay
									playsInline
									loop
									muted
									poster={GreenCardPoster}
								>
									<source src={HenriIDWebm} type='video/webm' />
									<source src={HenriIDMp4} type='video/mp4' />
								</motion.video>
							)}
							{!isTablet && (
								<motion.div {...animFromDown}>
									<video
										className={`${classes.idImage} ${classes.idImageHenri}`}
										autoPlay
										playsInline
										loop
										muted
										{...animFromDown}
									>
										<source src={HenriIDWebm} type='video/webm' />
										<source src={HenriIDMp4} type='video/mp4' />
									</video>
								</motion.div>
							)}
						</div>

						{isTablet && (
							<motion.img
								key='henri-d'
								className={classes.henriMainImage}
								src={width > media.lDesktop ? HenriFull : HenriMorph}
								alt='henri morph'
								{...animFromRight}
							/>
						)}
						{!isTablet && (
							<img
								className={classes.henriMainImage}
								src={HenriMorphDesktop}
								alt='henri morph'
							/>
						)}
					</div>
				</div>
			</GlobalContainer>
		</div>
	);
}
