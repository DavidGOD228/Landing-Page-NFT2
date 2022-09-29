import { motion } from 'framer-motion';
import classes from './style.module.scss';

export const Title = ({
	isAfterBorder = false,
	children,
	style,
	classname,
	classnameWrapper,
  animWrapperContainer,
  isShadowAnim = true,
}) => {
	const isAfterBrd = isAfterBorder ? classes.isAfter : classes.isBefore;
  const animShadow = isShadowAnim && classes.animShadow;

	return (
		<div className={`${classes.content} ${classnameWrapper}`}>
			<motion.div
				className={`${classes.line} ${isAfterBrd}`}
				initial={{
					height: 0,
					width: 0,
          ...animWrapperContainer?.initial
				}}
				whileInView={{
					height: '95%',
					width: 3,
          ...animWrapperContainer?.whileInView
				}}
				transition={{
					duration: 1,
					delay: 0.25,
					origin: 1,
					ease: 'easeOut',
          ...animWrapperContainer?.transition
				}}
				viewport={{ once: true }}
			/>
			<div className={`${classes.shadowUnderLine} ${isAfterBrd} ${animShadow}`} />
			<h2 style={style} className={`${classes.title} ${classname}`}>
				{children}
			</h2>
		</div>
	);
};

export default Title;
