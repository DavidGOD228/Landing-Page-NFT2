import classes from './style.module.scss';
import {getImageSrc} from "utils/createMarketplaceLink";

export default function Item({ firstImage, secondImage, isFlipped }) {

	return (
		<div className={classes.scene}>
			<div className={`${classes.card} ${isFlipped && classes.isFlipped}`}>
        <img
          className={classes.cardFace}
          src={getImageSrc(firstImage)}
          alt='imgName'
        />
        <img
          className={`${classes.cardFace} ${classes.cardFaceBack}`}
          src={getImageSrc(secondImage)}
          alt='imgName'
        />
			</div>
		</div>
	);
}
