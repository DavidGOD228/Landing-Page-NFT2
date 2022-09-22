import CircleOn from 'assets/images/roadmap/circle-on.svg';
import CircleOff from 'assets/images/roadmap/circle-off.svg';
import classes from './style.module.scss';

export function RoadmapMobile({ className, ...props }) {
  return (
		<div className={`${classes.roadmapMobile} ${className}`} {...props}>
			<div className={classes.firstBlock}>
				<div className={classes.roadDot} />
				<div className={classes.pointsUp}>
					<div className={classes.textInfo}>
						<img className={classes.circle} src={CircleOn} alt='' />
						Define Concept
					</div>
					<div className={classes.textInfo}>
						<img className={classes.circle} src={CircleOn} alt='' />
						Market Research
					</div>
				</div>
				<span className={`${classes.roadLine} ${classes.upRoadLine}`} />
				<span className={`${classes.roadLine} ${classes.rightRoadLine}`} />
				<span className={`${classes.roadLine} ${classes.downRoadLine}`} />

				<div className={classes.pointsDown}>
					<img className={classes.circle} src={CircleOn} alt='' />
					<img className={classes.circle} src={CircleOn} alt='' />
				</div>

				<span className={`${classes.roadLine} ${classes.leftDownRoadLine}`} />
			</div>

			<div className={classes.secondBlock}>
				<div className={`${classes.pointsUp} ${classes.pointsUpWithoutImg}`}>
					<div className={classes.textInfo}>Team onboarding</div>
					<div className={classes.textInfo}>Start of game development</div>
				</div>
				<span className={`${classes.roadLine} ${classes.leftRoadLine}`} />
				<span className={`${classes.roadLine} ${classes.downRoadLine}`} />

				<div className={classes.pointsDown}>
					<img className={classes.circle} src={CircleOn} alt='' />
					<img className={classes.circle} src={CircleOn} alt='' />
				</div>

				<span className={`${classes.roadLine} ${classes.rightDownRoadLine}`} />
			</div>

			<div className={classes.thirdBlock}>
				<div className={`${classes.pointsUp} ${classes.pointsUpWithoutImg}`}>
					<div className={classes.textInfo}>Official Announcements</div>
					<div className={classes.textInfo}>Internal test of beta version</div>
				</div>
				<span
					className={`${classes.roadLine} ${classes.rightRoadLineThirdBlock}`}
				/>

				{/* half colors lines */}
				<span
					className={`${classes.roadLine} ${classes.downRoadLine} ${classes.downRoadLineThirdBlockRight}`}
				/>
				<span
					className={`${classes.roadLine} ${classes.downRoadLine} ${classes.downRoadLineThirdBlockLeft} ${classes.opacityRoad}`}
				/>

				<div className={classes.pointsDown}>
					<img className={classes.circle} src={CircleOn} alt='' />
					<img className={classes.circle} src={CircleOn} alt='' />
				</div>

				<span className={`${classes.roadLine} ${classes.leftDownOpacityRoadLine} ${classes.opacityRoad}`} />
			</div>

      <div className={classes.fourthBlock}>
				<div className={`${classes.pointsUp} ${classes.pointsUpWithoutImg}`}>
					<div className={`${classes.textInfo} ${classes.opacityRoad}`}>Smart Contract Audit</div>
					<div className={`${classes.textInfo} ${classes.opacityRoad}`}>Beta version</div>
				</div>

				<span
					className={`${classes.roadLine} ${classes.leftRoadLine} ${classes.opacityRoad}`}
				/>
				<span
					className={`${classes.roadLine} ${classes.downRoadLine} ${classes.downRoadLineOpacity} ${classes.opacityRoad}`}
				/>

				<div className={classes.pointsDown}>
					<img className={`${classes.circle} ${classes.isNotActive}`} src={CircleOff} alt='' />
					<img className={`${classes.circle} ${classes.isNotActive}`} src={CircleOff} alt='' />
				</div>

				<span className={`${classes.roadLine} ${classes.rightDownRoadLine} ${classes.opacityRoad}`} />
			</div>

      <div className={classes.fifthBlock}>
				<div className={`${classes.pointsUp} ${classes.pointsUpWithoutImg}`}>
					<div className={`${classes.textInfo} ${classes.opacityRoad}`}>TGE</div>
					<div className={`${classes.textInfo} ${classes.opacityRoad}`}>Game Realize</div>
				</div>

				<span
					className={`${classes.roadLine} ${classes.rightRoadLine} ${classes.opacityRoad}`}
				/>
				<span
					className={`${classes.roadLine} ${classes.downRoadLine} ${classes.downRoadLineOpacity} ${classes.opacityRoad}`}
				/>

				<div className={classes.pointsDown}>
					<img className={`${classes.circle} ${classes.isNotActive}`} src={CircleOff} alt='' />
					<img className={`${classes.circle} ${classes.isNotActive}`} src={CircleOff} alt='' />
				</div>

				<span className={`${classes.roadLine} ${classes.leftDownRoadLine} ${classes.opacityRoad}`} />
			</div>

      <div className={classes.sixBlock}>
				<div className={`${classes.pointsUp} ${classes.pointsUpWithoutImg}`}>
					<div className={`${classes.textInfo} ${classes.opacityRoad}`}>Smart Contract Audit</div>
					<div className={`${classes.textInfo} ${classes.opacityRoad}`}>Beta version</div>
				</div>

				<span
					className={`${classes.roadLine} ${classes.leftRoadLine} ${classes.opacityRoad}`}
				/>
				<span
					className={`${classes.roadLine} ${classes.downRoadLine} ${classes.downRoadLineOpacity} ${classes.opacityRoad}`}
				/>

				<div className={classes.pointsDown}>
          <div className={classes.textInfo}>
            <img className={`${classes.circle} ${classes.isNotActive}`} src={CircleOff} alt='' />
            <div className={`${classes.textInfo} ${classes.opacityRoad}`}>NFT Marketplace</div>
          </div>
          <div className={classes.textInfo}>
            <img className={`${classes.circle} ${classes.isNotActive}`} src={CircleOff} alt='' />
            <div className={`${classes.textInfo} ${classes.opacityRoad}`}>Creators API</div>
          </div>
				</div>
			</div>
		</div>
	);
}
