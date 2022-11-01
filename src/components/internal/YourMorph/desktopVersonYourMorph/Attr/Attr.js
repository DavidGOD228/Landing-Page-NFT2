import { useState } from 'react';
import classes from './style.module.scss';
import mapGraphic from 'utils/mapGraphic';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion';
import {useWindowWidth} from "hooks/useWindowWidth";

export const Stick = ({ isEmpty = false, isEternal, isDesktop }) => {
  return (
    <motion.span
      className={`${classes.stick} ${!isDesktop && classes.mobileStick} ${isEmpty && classes.empty} ${
        isEternal && classes.eternal
      }`}
    />)
};

export const Attr = ({ name, precent, type, ...props }) => {
	const isEternal = type === 'eternal';
	const isDesktop = useWindowWidth(1024);

	const [wasAnimate, setWasAnimate] = useState(false);

	function handlerStart(isVisible, start) {
		if (!wasAnimate && isVisible) {
			start();
			setWasAnimate(true);
		}
	}

	const durVal = 2;
	const durationFromVal = (durVal * precent) / 100;

	return (
		<div className={classes.skillContainer} {...props}>
			<p className={classes.titleSkill}>{name}</p>
			<div className={classes.counterContainer}>
				<motion.div
					initial={{
						width: 0,
					}}
					whileInView={{
						width: 'auto',
					}}
					transition={{
						delay: 0.4,
						duration: durVal,
						ease: 'easeInOut'
					}}
					viewport={{
						once: true
					}}
					className={classes.graphic}
				>
					{mapGraphic(precent, isEternal, isDesktop)}
				</motion.div>
				<div className={classes.percent}>
					<CountUp
						start={0}
						end={precent}
						duration={durationFromVal}
						suffix='%'
						delay={0.4}
					>
						{({ countUpRef, start }) => (
							<VisibilitySensor
								onChange={isVisible => handlerStart(isVisible, start)}
								delayedCall
							>
								<span ref={countUpRef} />
							</VisibilitySensor>
						)}
					</CountUp>
				</div>
			</div>
		</div>
	);
};
