import classes from './style.module.scss';
import SmileDesktop from 'assets/images/smileDesktop.svg';

import toiletVideo from 'assets/video/toilet.video.mp4';
import Confidence from 'assets/images/confidence.png';

import blackSpot1 from 'assets/images/blackSpots/black-spot-1.png';
import blackSpot2 from 'assets/images/blackSpots/black-spot-2.png';

export function FLSMobile() {
	return (
		<div className={classes.flsMobileContainer}>
			<div className={classes.wrapper}>
				<h2 className={classes.title}>
					Respect
					<br /> his privacy!
				</h2>
			</div>

			<div className={classes.videoWrapper}>
				<video
					className={classes.video}
					src={toiletVideo}
					autoPlay
					loop
					muted
        />
				<img className={classes.blackSpot} src={blackSpot1} alt='' />
			</div>

			<div className={classes.wrapper}>
				<div className={classes.containerWithSmile}>
					<img className={classes.smile} src={SmileDesktop} alt='smile' />
					<h2 className={classes.title}>
						But without
						<br />
						too much confideNce
					</h2>
				</div>
			</div>

			<div className={classes.videoWrapper}>
				<img className={classes.video} src={Confidence} alt='' />
				<img className={classes.blackSpot} src={blackSpot2} alt='' />
			</div>
		</div>
	);
}
