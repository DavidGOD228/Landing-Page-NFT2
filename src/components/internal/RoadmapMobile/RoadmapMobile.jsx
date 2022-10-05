import {isWebpSupported} from 'react-image-webp/dist/utils';

import CircleOnWebp from 'assets/images/roadmap/circle-on.webp';
import CircleOnPng from 'assets/images/roadmap/circle-on.png';

import CircleOffWebp from 'assets/images/roadmap/circle-off.webp';
import CircleOffPng from 'assets/images/roadmap/circle-off.png';

import classes from './style.module.scss';

export function RoadmapMobile({ className, ...props }) {
  const isWebpCircleOn = isWebpSupported() ? CircleOnWebp : CircleOnPng;
  const isWebpCircleOff = isWebpSupported() ? CircleOffWebp : CircleOffPng;

	return (
		<div className={`${classes.roadmapMobile} ${className}`} {...props}>
			<div className={classes.firstBlock}>
				<div className={classes.roadDot} />
				<div className={classes.pointsUp}>
					<div className={classes.textInfo}>
						<img className={classes.circle} src={isWebpCircleOn} alt='' />
						<div>Define Concept</div>
					</div>
					<div className={classes.textInfo}>
						<img className={classes.circle} src={isWebpCircleOn} alt='' />
						<div>Market Research</div>
					</div>
				</div>
				<span className={`${classes.roadLine} ${classes.upRoadLine}`} />
				<span className={`${classes.roadLine} ${classes.rightRoadLine}`} />
				<span className={`${classes.roadLine} ${classes.downRoadLine}`} />

				<div className={classes.pointsDown}>
					<img className={classes.circle} src={isWebpCircleOn} alt='' />
					<img className={classes.circle} src={isWebpCircleOn} alt='' />
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
					<img className={classes.circle} src={isWebpCircleOn} alt='' />
					<img className={classes.circle} src={isWebpCircleOn} alt='' />
				</div>

				<span
					className={`${classes.roadLine}
          ${classes.rightDownRoadSecondBlockLine}`}
				/>
			</div>

			<div className={classes.thirdBlock}>
				<div className={`${classes.pointsUp} ${classes.pointsUpWithoutImg}`}>
					<div className={classes.textInfo}>Official Announcements</div>
					<div className={classes.textInfo}>Internal test of beta version</div>
				</div>
				<span className={`${classes.roadLine}`} />

				{/* half colors lines */}
				<span
					className={`${classes.roadLine} ${classes.downRoadLine} ${classes.downRoadLineThirdBlockRight}`}
				/>
				<span
					className={`${classes.roadLine} ${classes.downRoadLine} ${classes.downRoadLineThirdBlockLeft} ${classes.opacityRoad}`}
				/>

				<div className={classes.pointsDown}>
					<img className={classes.circle} src={isWebpCircleOn} alt='' />
					<img className={classes.circle} src={isWebpCircleOn} alt='' />
				</div>

				<span
					className={`${classes.roadLine} ${classes.leftDownOpacityRoadLine} ${classes.opacityRoad}`}
				/>
			</div>

			<div className={classes.fourthBlock} key={4}>
				<div className={`${classes.pointsUp} ${classes.pointsUpWithoutImg}`}>
					<div className={`${classes.textInfo} ${classes.opacityRoad}`}>
						Smart Contract Audit
					</div>
					<div className={`${classes.textInfo} ${classes.opacityRoad}`}>
						Beta version
					</div>
				</div>

				<span
					className={`${classes.roadLine} ${classes.leftRoadLine} ${classes.opacityRoad}`}
				/>
				<span
					className={`${classes.roadLine} ${classes.downRoadLine} ${classes.downRoadLineOpacity} ${classes.opacityRoad}`}
				/>

				<div className={classes.pointsDown}>
					<img
						className={`${classes.circle} ${classes.isNotActive}`}
						src={isWebpCircleOff}
						alt=''
					/>
					<img
						className={`${classes.circle} ${classes.isNotActive}`}
						src={isWebpCircleOff}
						alt=''
					/>
				</div>
			</div>

			<div className={classes.fifthBlock}>
				<div className={`${classes.pointsUp} ${classes.pointsUpWithoutImg}`}>
					<div className={`${classes.textInfo} ${classes.opacityRoad}`}>
						TGE
					</div>
					<div className={`${classes.textInfo} ${classes.opacityRoad}`}>
						Game Realize
					</div>
				</div>

				<span
					className={`${classes.roadLine} ${classes.rightRoadLine} ${classes.opacityRoad}`}
				/>

				<span
					className={`${classes.roadLine} ${classes.downRoadLine} ${classes.downRoadLineOpacity} ${classes.opacityRoad}`}
				/>

				<div className={classes.pointsDown}>
					<img
						className={`${classes.circle} ${classes.isNotActive}`}
						src={isWebpCircleOff}
						alt=''
					/>
					<img
						className={`${classes.circle} ${classes.isNotActive}`}
						src={isWebpCircleOff}
						alt=''
					/>
				</div>

				<span
					className={`${classes.roadLine} ${classes.leftDownRoadLine} ${classes.opacityRoad}`}
				/>
			</div>

			<div className={classes.sixBlock} key={6}>
				<div className={`${classes.pointsUp} ${classes.pointsUpWithoutImg}`}>
					<div className={`${classes.textInfo} ${classes.opacityRoad}`}>
						Smart Contract Audit
					</div>
					<div className={`${classes.textInfo} ${classes.opacityRoad}`}>
						Beta version
					</div>
				</div>

				<span
					className={`${classes.roadLine} ${classes.leftRoadLine} ${classes.opacityRoad}`}
				/>
				<span
					className={`${classes.roadLine} ${classes.downRoadLine} ${classes.downRoadLineOpacity} ${classes.opacityRoad}`}
				/>

				<div className={classes.pointsDown}>
					<div className={classes.textInfo}>
						<img
							className={`${classes.circle} ${classes.isNotActive}`}
							src={isWebpCircleOff}
							alt=''
						/>
						<div className={`${classes.textInfo} ${classes.opacityRoad}`}>
							NFT Marketplace
						</div>
					</div>
					<div className={classes.textInfo}>
						<img
							className={`${classes.circle} ${classes.isNotActive}`}
							src={isWebpCircleOff}
							alt=''
						/>
						<div className={`${classes.textInfo} ${classes.opacityRoad}`}>
							Creators API
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
