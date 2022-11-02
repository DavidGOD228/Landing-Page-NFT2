import { Title, GreenText, Paragraph, Morph, MorphMobile } from 'components';
import { motion } from 'framer-motion';
import { useWindowSize } from 'hooks/useWindowDimensions';
import classes from './style.module.scss';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { media } from 'utils/media';
import { paragraphAnimationFromRight } from 'farmerMotionsAnimations/paragraphAnimation';

export const YourMorph = () => {
	const isAfterBorder = useWindowWidth(media.mDesktop);

	const { width } = useWindowSize();

	const getStartInitVal = () => {
		if (width > media.mDesktop) return 200;
		if (width > media.tablet) return 100;
		if (width > media.lMobile) return 50;
		return 25;
	};

	const animFromLeft = {
		initial: {
			x: getStartInitVal() * -1,
			opacity: 0
		},
		whileInView: {
			x: 0,
			opacity: 1
		},
		transition: {
			duration: 1,
			ease: 'easeOut'
		},
		viewport: { once: true }
	};

	const textParg =
		'Each ID is unique and randomly generated, the system activates it when you start the game. The ID determines all parameters related to your character, such as appearance, character and list of skills and traits.';

	return (
		<div className={classes.container}>
			<div className={classes.titleChooseMorph}>
				<Title
					isAfterBorder={isAfterBorder} // if false - after, true - before
					classname={classes.titleLeftSide}
					classnameWrapper={classes.wrapperContentTitleLeftSide}
					borderHeight="91%"
				>
					<motion.span {...animFromLeft}>choose your</motion.span>
					<br />
					<motion.span className={classes.greenText} {...animFromLeft}>Morph id</motion.span>
				</Title>
				<Paragraph className={classes.titleRightSide}>
					{paragraphAnimationFromRight(textParg)}
				</Paragraph>
			</div>

			<Morph />
			<MorphMobile />
		</div>
	);
};

export default YourMorph;
