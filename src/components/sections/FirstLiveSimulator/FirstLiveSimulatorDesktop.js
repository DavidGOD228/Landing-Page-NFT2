import { Paragraph } from 'components';
import { paragraphAnimation } from 'farmerMotionsAnimations/paragraphAnimation';
import classes from './styleDesktop.module.scss';
import SmileDesktop from 'assets/images/smileDesktop.svg';

export const videos = [
  {
    mp4: "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666084837/slider/Clothes_trzkil.mp4",
    webm: "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666084831/slider/Clothes_glxf1j.webm",
  },
  {
    mp4: "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666084836/slider/Furniture_r9g2t4.mp4",
    webm: "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666084828/slider/Furniture_m2jqbw.webm",
  },
  {
    mp4: "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666084839/slider/Job_nkdesb.mp4",
    webm: "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666084832/slider/Job_lkw0ak.webm",
  },
];

const textPar =
  'Metamorph is an open-world exploration, NFT creature collector and life simulator game built on the Polygon Blockchain, releasing on IOS and Android in 2023. Play-to-earn in a graphically-rich sci-fi adventure and life builder that allows you to feel the life inside the game.';

  const isSafari = window.safari !== undefined;

export function FirstLiveSimulatorDesktop() {

  const mappingVideos = videos.map(video => (
    <video
      className={classes.phoneItem}
      loop
      muted
      autoPlay
      playsInline
      src={isSafari ? video.mp4 : video.webm}
    />
  ))

	return (
		<div className={classes.wrapper}>
			<div className={classes.flsDesktop}>
				<h2 className={classes.title}>
					First{' '}
					<br />
					live simulatoron web 3
				</h2>
				<Paragraph className={classes.paragraph}>
					{paragraphAnimation(textPar)}
				</Paragraph>

        <div className={classes.phones}>
          {mappingVideos}
        </div>

        <div className={classes.respect}>
          <img className={classes.smile} src={SmileDesktop} alt='' />
          <p className={classes.privacyText}>Respect his Privacy!</p>
          <img className={classes.smile} src={SmileDesktop} alt='' />
        </div>
			</div>
		</div>
	);
}
