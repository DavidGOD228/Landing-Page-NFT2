import { Paragraph, Title } from 'components';

import Skull from 'assets/images/skills/skill-5.png';
import Slime from 'assets/images/skills/skill-6.png';
import Bricks from 'assets/images/skills/skill-7.png';
import Fish from 'assets/images/skills/agressive-active.png';
import Chain from 'assets/images/skills/skill-8.png';
import Morph from 'assets/images/unique-morphs.png';

import classes from './style.module.scss';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { motion } from 'framer-motion';

import toiletVideo from 'assets/video/toilet.video.mp4';
import { paragraphAnimation } from 'farmerMotionsAnimations/paragraphAnimation';

export const MorphsUnique = () => {
	const isDesktop = useWindowWidth(1024);

  const titleText = "ALL MORPHS ARE UNIQUE";



	return (
		<>
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
							{paragraphAnimation(
								'MM takes you back to what makes a truly exciting MMORPG. You make the rules. Buy yourself a house, furnish it, dress up your Morph, find them a job and make them earn. Invest in its growth or make a fortune. Everything is alright.'
							)}
						</Paragraph>
						<div className={classes.icons}>
							<motion.img className={classes.skillImg} src={Skull} alt='skill' />
							<motion.img className={classes.skillImg} src={Slime} alt='skill' />
							<motion.img className={classes.skillImg} src={Bricks} alt='skill' />

							<div className={classes.wrapperSkill}>
								<img
									className={`${classes.skillImg} ${classes.active}`}
									src={Fish}
									alt='skill'
								/>
								<div className={classes.skillTitleMobile}>Agressive</div>
							</div>

							<motion.img className={classes.skillImg} src={Chain} alt='skill' />
						</div>
						{isDesktop && (
							<>
								<div className={classes.skillTitle}>Agressive</div>
								<p className={`${classes.paragraph}`}>
									{paragraphAnimation(
										'MM takes you back to what makes a truly exciting MMORPG. You make the rules. Buy yourself a house, furnish it.'
									)}
								</p>
							</>
						)}
					</div>
				</div>
				<img className={classes.morphImage} src={Morph} alt='morph' />
			</div>
			{!isDesktop && (
				<div className={classes.mobileMorph}>
					<video
						className={classes.mobileMorphVideo}
						src={toiletVideo}
						autoPlay
						loop
						muted
						playsInline
					/>
				</div>
			)}
		</>
	);
};

export default MorphsUnique;
