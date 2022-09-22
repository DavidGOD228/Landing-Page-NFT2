import { motion } from 'framer-motion';
  
import CircleOn from 'assets/images/roadmap/circle-on.svg';
import CircleOff from 'assets/images/roadmap/circle-off.svg';
import classes from './style.module.scss';

export function RoadmapMobile({ className, ...props }) {
  const farmerMotionOptions = {
    initial: {
      y: 150,
    },
		whileInView: {
      y: 0
    },
		transition: {
      ease: 'easeOut',
      duration: 1,
    },
    viewport: { once: true },
  }

  const textAnim = {
    initial: {
      y: 25,
      opacity: 0,
      scale: 0
    },
		whileInView: {
      y: 0,
      opacity: 1,
      scale: 1
    },
		transition: {
      ease: 'easeOut',
      duration: 1,
    },
    viewport: { once: true },
  }

  const circleAnim = {
    initial: {
      y: 0,
      opacity: 0,
      scale: 0
    },
		whileInView: {
      y: 0,
      opacity: 1,
      scale: 1
    },
		transition: {
      ease: 'easeOut',
      duration: 1,
    },
    viewport: { once: true },
  }

  return (
		<div className={`${classes.roadmapMobile} ${className}`} {...props}>
			<motion.div 
        className={classes.firstBlock}
        {...farmerMotionOptions}
        key={1}
      >
				<div className={classes.roadDot} />
				<div className={classes.pointsUp}>
					<div className={classes.textInfo}>
						<motion.img {...circleAnim} className={classes.circle} src={CircleOn} alt='' />
						<motion.div {...textAnim}>Define Concept</motion.div>
					</div>
					<div className={classes.textInfo}>
            <motion.img {...circleAnim} className={classes.circle} src={CircleOn} alt='' />
						<motion.div {...textAnim}>Market Research</motion.div>
					</div>
				</div>
				<span className={`${classes.roadLine} ${classes.upRoadLine}`} />
				<span className={`${classes.roadLine} ${classes.rightRoadLine}`} />
				<span className={`${classes.roadLine} ${classes.downRoadLine}`} />

				<div className={classes.pointsDown}>
          <motion.img {...circleAnim} className={classes.circle} src={CircleOn} alt='' />
          <motion.img {...circleAnim} className={classes.circle} src={CircleOn} alt='' />
				</div>

				<span className={`${classes.roadLine} ${classes.leftDownRoadLine}`} />
			</motion.div>

			<motion.div
        className={classes.secondBlock}
        {...farmerMotionOptions}
        key={2}
      >
				<div className={`${classes.pointsUp} ${classes.pointsUpWithoutImg}`}>
          <motion.div {...textAnim} className={classes.textInfo}>Team onboarding</motion.div>
					<motion.div {...textAnim} className={classes.textInfo}>Start of game development</motion.div>
				</div>
				<span className={`${classes.roadLine} ${classes.leftRoadLine}`} />
				<span className={`${classes.roadLine} ${classes.downRoadLine}`} />

				<div className={classes.pointsDown}>
          <motion.img {...circleAnim} className={classes.circle} src={CircleOn} alt='' />
					<motion.img {...circleAnim} className={classes.circle} src={CircleOn} alt='' />
				</div>

				<span
          className={`${classes.roadLine}
          ${classes.rightDownRoadSecondBlockLine}`}
        />
      </motion.div>

			<motion.div
        className={classes.thirdBlock}
        {...farmerMotionOptions}
        key={3}
      >
				<div className={`${classes.pointsUp} ${classes.pointsUpWithoutImg}`}>
          <motion.div {...textAnim} className={classes.textInfo}>Official Announcements</motion.div>
					<motion.div {...textAnim} className={classes.textInfo}>Internal test of beta version</motion.div>
				</div>
				<span
					className={`${classes.roadLine}`}
				/>

				{/* half colors lines */}
				<span
					className={`${classes.roadLine} ${classes.downRoadLine} ${classes.downRoadLineThirdBlockRight}`}
				/>
				<span
					className={`${classes.roadLine} ${classes.downRoadLine} ${classes.downRoadLineThirdBlockLeft} ${classes.opacityRoad}`}
				/>

				<div className={classes.pointsDown}>
          <motion.img {...circleAnim} className={classes.circle} src={CircleOn} alt='' />
					<motion.img {...circleAnim} className={classes.circle} src={CircleOn} alt='' />
				</div>

				<span className={`${classes.roadLine} ${classes.leftDownOpacityRoadLine} ${classes.opacityRoad}`} />
			</motion.div>

      <motion.div
        className={classes.fourthBlock}
        {...farmerMotionOptions}
        key={4}
      >
				<div className={`${classes.pointsUp} ${classes.pointsUpWithoutImg}`}>
					<motion.div {...textAnim} className={`${classes.textInfo} ${classes.opacityRoad}`}>Smart Contract Audit</motion.div>
					<motion.div {...textAnim} className={`${classes.textInfo} ${classes.opacityRoad}`}>Beta version</motion.div>
				</div>

				<span
					className={`${classes.roadLine} ${classes.leftRoadLine} ${classes.opacityRoad}`}
				/>
				<span
					className={`${classes.roadLine} ${classes.downRoadLine} ${classes.downRoadLineOpacity} ${classes.opacityRoad}`}
				/>

				<div className={classes.pointsDown}>
          <motion.img {...circleAnim} className={`${classes.circle} ${classes.isNotActive}`} src={CircleOff} alt='' />
					<motion.img {...circleAnim} className={`${classes.circle} ${classes.isNotActive}`} src={CircleOff} alt='' />
				</div>
			</motion.div>

      <motion.div
        className={classes.fifthBlock}
        {...farmerMotionOptions}
        key={5}
      >
				<div className={`${classes.pointsUp} ${classes.pointsUpWithoutImg}`}>
					<motion.div
          {...textAnim}
            className={`${classes.textInfo} ${classes.opacityRoad}`}
          >
            TGE
          </motion.div>
					<motion.div {...textAnim} className={`${classes.textInfo} ${classes.opacityRoad}`}>Game Realize</motion.div>
				</div>

				<span
					className={`${classes.roadLine} ${classes.rightRoadLine} ${classes.opacityRoad}`}
				/>

				<span
					className={`${classes.roadLine} ${classes.downRoadLine} ${classes.downRoadLineOpacity} ${classes.opacityRoad}`}
				/>

				<div className={classes.pointsDown}>
          <motion.img {...circleAnim} className={`${classes.circle} ${classes.isNotActive}`} src={CircleOff} alt='' />
					<motion.img {...circleAnim} className={`${classes.circle} ${classes.isNotActive}`} src={CircleOff} alt='' />
				</div>

				<span className={`${classes.roadLine} ${classes.leftDownRoadLine} ${classes.opacityRoad}`} />
			</motion.div>

      <motion.div
        className={classes.sixBlock}
        {...farmerMotionOptions}
        key={6}
      >
				<div className={`${classes.pointsUp} ${classes.pointsUpWithoutImg}`}>
          <motion.div {...textAnim}  className={`${classes.textInfo} ${classes.opacityRoad}`}>Smart Contract Audit</motion.div>
          <motion.div {...textAnim}  className={`${classes.textInfo} ${classes.opacityRoad}`}>Beta version</motion.div>
				</div>

				<span
					className={`${classes.roadLine} ${classes.leftRoadLine} ${classes.opacityRoad}`}
				/>
				<span
					className={`${classes.roadLine} ${classes.downRoadLine} ${classes.downRoadLineOpacity} ${classes.opacityRoad}`}
				/>

				<div className={classes.pointsDown}>
          <div className={classes.textInfo}>
            <motion.img {...circleAnim} className={`${classes.circle} ${classes.isNotActive}`} src={CircleOff} alt='' />
            <motion.div {...textAnim} className={`${classes.textInfo} ${classes.opacityRoad}`}>NFT Marketplace</motion.div>
          </div>
          <div className={classes.textInfo}>
            <motion.img {...circleAnim} className={`${classes.circle} ${classes.isNotActive}`} src={CircleOff} alt='' />
            <motion.div {...textAnim} className={`${classes.textInfo} ${classes.opacityRoad}`}>Creators API</motion.div>
          </div>
				</div>
			</motion.div>
		</div>
	);
}
