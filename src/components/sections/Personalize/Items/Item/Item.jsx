import classes from './style.module.scss';
import {getImageSrc} from "utils/createMarketplaceLink";
import {isWebpSupported} from 'react-image-webp/dist/utils';

export default function Item({ firstImage, secondImage, isFlipped }) {
  const isWebpFirstImage = isWebpSupported ? firstImage.replace('.png', ".webp") : firstImage;
  const isWebpSecondImage = isWebpSupported ? secondImage.replace('.png', ".webp") : firstImage;

	return (
		<div className={classes.scene}>
			<div className={`${classes.card} ${isFlipped && classes.isFlipped}`}>
        <img
          className={classes.cardFace}
          src={getImageSrc(isWebpFirstImage)}
          alt='imgName'
        />
        <img
          className={`${classes.cardFace} ${classes.cardFaceBack}`}
          src={getImageSrc(isWebpSecondImage)}
          alt='imgName'
        />
			</div>
		</div>
	);
}
