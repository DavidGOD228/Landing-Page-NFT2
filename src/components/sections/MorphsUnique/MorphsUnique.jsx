import { Paragraph, Title } from 'components';
import Skull from 'assets/images/skills/skill-5.png';
import Slime from 'assets/images/skills/skill-6.png';
import Bricks from 'assets/images/skills/skill-7.png';
import Fish from 'assets/images/skills/agressive-active.png';
import FishNotActive from 'assets/images/skills/agressive-not-active.png';
import Chain from 'assets/images/skills/skill-8.png';
import MorphDesktop from 'assets/video/agressive_desktop.video.mp4';
import MorphMobile from 'assets/video/agressive_desktop.video.mp4';

import classes from './style.module.scss';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { motion } from 'framer-motion';

import { paragraphAnimation } from 'farmerMotionsAnimations/paragraphAnimation';
import DesktopSplashes from "./components/DesktopSplashes/DesktopSplashes";

export const MorphsUnique = () => {
	const isDesktop = useWindowWidth(1024);

	const titleText = 'ALL MORPHS ARE UNIQUE';

	const text1 =
		'MM takes you back to what makes a truly exciting MMORPG. You make the rules. Buy yourself a house, furnish it, dress up your Morph, find them a job and make them earn. Invest in its growth or make a fortune. Everything is alright.';

	const descrSkill =
		'MM takes you back to what makes a truly exciting MMORPG. You make the rules. Buy yourself a house, furnish it.';

	return (
		<>
			<div style={{position: 'relative'}}>
				{
					isDesktop && <DesktopSplashes/>
				}
			</div>
			<div className={classes.container}>
				<div className={classes.content}>
					<Title classname={classes.title}>
						{titleText.split(' ').map((word, idx) => {
							return (
								<motion.span
									key={word + idx}
									initial={{
										y: 50,
										opacity: 0
									}}
									whileInView={{
										y: 0,
										opacity: 1
									}}
									transition={{
										duration: 1,
										ease: 'easeInOut'
									}}
									viewport={{ once: true }}
								>
									{word}
									{idx + 1 !== titleText.split(' ').length && '\u00A0'}
								</motion.span>
							);
						})}
					</Title>
					<div className={classes.descrWrapper}>
						<Paragraph
							className={`${classes.paragraph} ${classes.descrSection}`}
						>
							{paragraphAnimation(text1)}
						</Paragraph>
						<div className={classes.icons}>
							<motion.img
								className={classes.skillImg}
								src={Skull}
								alt='skill'
								initial={{
									scale: 0.9,
									opacity: 0
								}}
								whileInView={{
									scale: 1,
									opacity: 1
								}}
								transition={{
									duration: 0.3,
									ease: 'easeInOut'
								}}
								viewport={{ once: true }}
							/>
							<motion.img
								className={classes.skillImg}
								src={Slime}
								alt='skill'
								initial={{
									scale: 0.9,
									opacity: 0
								}}
								whileInView={{
									scale: 1,
									opacity: 1
								}}
								transition={{
									duration: 0.3,
									ease: 'easeInOut',
									delay: 0.3
								}}
								viewport={{ once: true }}
							/>
							<motion.img
								className={classes.skillImg}
								src={Bricks}
								alt='skill'
								initial={{
									scale: 0.9,
									opacity: 0
								}}
								whileInView={{
									scale: 1,
									opacity: 1
								}}
								transition={{
									duration: 0.3,
									ease: 'easeInOut',
									delay: 0.6
								}}
								viewport={{ once: true }}
							/>

							<div className={classes.wrapperSkill}>
								{/* image before */}
                {isDesktop && <motion.img
									className={`${classes.skillImg} ${classes.fish}`}
									src={FishNotActive}
									alt='skill'
									initial='hidden'
									variants={{
										visible: {
											scale: 1,
											opacity: 1
										},
										hidden: { opacity: 0, scale: 0.9 }
									}}
									whileInView='visible'
									transition={{
										duration: 0.3,
										ease: 'easeInOut',
										delay: 0.9
									}}
									viewport={{ once: true }}
								/>}

								{/* active img */}
								{isDesktop && <motion.img
									className={`${classes.skillImg} ${classes.fish} ${classes.active}`}
									src={Fish}
									alt='skill'
									initial={{
										scale: 0.9,
										opacity: 0,
										y: '-9%',
										x: '-7%'
									}}
									whileInView={{
										scale:  1,
										opacity: 1
									}}
									transition={{
										duration: 0.3,
										ease: 'easeInOut',
										delay: 2.1
									}}
									viewport={{ once: true }}
								/>}

                {!isDesktop && <motion.img
									className={`${classes.skillImg}  ${classes.active}`}
									src={Fish}
									alt='skill'
									initial={{
										scale: 0.9,
										opacity: 0,
                    x: "-5%",
                    y: "-5%"
									}}
									whileInView={{
										scale:  1,
										opacity: 1,
                   
									}}
									transition={{
										duration: 0.3,
										ease: 'easeInOut',
										delay: 0.9
									}}
									viewport={{ once: true }}
								/>}

								<motion.div
									className={classes.skillTitleMobile}
									initial={{
										scale: 0.9,
										opacity: 0,
										y: 15,
									}}
									whileInView={{
										scale: 1,
										opacity: 1,
                    y: 0
									}}
									transition={{
										duration: 0.3,
										ease: 'easeInOut',
										delay: 1.2
									}}
									viewport={{ once: true }}
								>
									Agressive
								</motion.div>
							</div>

							<motion.img
								className={classes.skillImg}
								src={Chain}
								alt='skill'
								initial={{
									scale: 0.9,
									opacity: 0
								}}
								whileInView={{
									scale: 1,
									opacity: 1
								}}
								transition={{
									duration: 0.3,
									ease: 'easeInOut',
									delay: 1.2
								}}
								viewport={{ once: true }}
							/>
						</div>
						{isDesktop && (
							<>
								<motion.div
									className={`${classes.skillTitle}`}
									initial={{
										y: 50,
										opacity: 0
									}}
									whileInView={{
										y: 0,
										opacity: 1
									}}
									transition={{
										duration: 1,
										ease: 'easeInOut',
										delay: 2.1
									}}
									viewport={{ once: true }}
								>
									Agressive
								</motion.div>
								<motion.p
									className={`${classes.paragraph}`}
									initial={{
										y: 50,
										opacity: 0
									}}
									whileInView={{
										y: 0,
										opacity: 1
									}}
									transition={{
										duration: 1,
										ease: 'easeInOut',
										delay: 2.4
									}}
									viewport={{ once: true }}
								>
									{descrSkill}
								</motion.p>
							</>
						)}
					</div>
				</div>
				<video
					className={classes.morphImage}
					src={MorphDesktop}
					autoPlay
					loop
					playsInline
					muted
				/>
			</div>
			{!isDesktop && (
				<div className={classes.mobileMorph}>
					<video
						className={classes.mobileMorphVideo}
						src={MorphMobile}
						autoPlay
						playsInline
						loop
						muted
					/>
				</div>
			)}
		</>
	);
};

export default MorphsUnique;
