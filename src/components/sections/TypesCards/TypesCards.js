import { motion } from 'framer-motion';
import { GlobalContainer, Paragraph } from 'components';

import classes from './styles.module.scss';

import first from 'assets/images/first.svg';
import second from 'assets/images/second.svg';

import MihoMorph from 'assets/images/morphs/miho-ikuta/miho-morph-presentation.png';
import MihoMorphMobile from 'assets/images/miho-morph.png';
import MihoID from 'assets/video/white_card.video.mp4';
import HenriMorph from 'assets/images/morphs/henrik-hail/henrik-hail-presentation.png';
import HenriMorphDesktop from 'assets/images/henri-morph.png';
import HenriID from 'assets/video/green_card.video.mp4';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { morphIDText } from 'data/morphID/text';
import { paragraphAnimation } from 'farmerMotionsAnimations/paragraphAnimation';
import { useWindowSize } from 'hooks/useWindowDimensions';
import { media } from 'utils/media';

export function TypesCards() {
	const isDesktop = useWindowWidth(1024);

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
						{isDesktop && (
							<motion.img
								key='miho-d'
								className={classes.mihoMainImage}
								src={MihoMorph}
								alt='miho'
								{...animFromLeft}
							/>
						)}
						{!isDesktop && (
							<motion.img
								key='miho-m'
								className={classes.mihoMainImage}
								src={MihoMorphMobile}
								alt='miho'
								{...animFromRight}
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
								{paragraphAnimation(
									isDesktop
										? morphIDText.classiqueDesktop
										: morphIDText.classiqueMobile
								)}
							</Paragraph>
							<motion.video
								{...animFromDown}
								className={classes.idImage}
								src={MihoID}
                autoPlay
                playsInline
                loop
                muted
							/>
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
								{paragraphAnimation(
									isDesktop
										? morphIDText.eternalDesktop
										: morphIDText.eternalMobile
								)}
							</Paragraph>
							<motion.video
								{...animFromDown}
								className={`${classes.idImage} ${classes.idImageHenri}`}
								src={HenriID}
								autoPlay
								playsInline
								loop
								muted
							/>
						</div>

						{isDesktop && (
							<motion.img
								key='henri-d'
								className={classes.henriMainImage}
								src={HenriMorph}
								alt='henri morph'
								{...animFromRight}
							/>
						)}
						{!isDesktop && (
							<motion.img
								key='henri-m'
								className={classes.henriMainImage}
								src={HenriMorphDesktop}
								alt='henri morph'
								{...animFromLeft}
							/>
						)}
					</div>
				</div>
			</GlobalContainer>
		</div>
	);
}
