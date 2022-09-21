import { useState } from 'react';
import {
	CardItem,
	InfoMorphMobile,
	AttrsDetails,
	BlockInfoTitle
} from 'components';
import { useWindowSize } from 'hooks/useWindowDimensions';
import { media } from 'utils/media';

import classes from './style.module.scss';
import { morphsData } from 'data/morphs/data';

export function MorphMobile() {
	const [morph, setMorph] = useState(morphsData[0]);
	const { width: screenWidth } = useWindowSize();

	const morphChooseHandler = m => setMorph(m);

	const mapCards = morphsData.map(m => {
		const isActive = m.id === morph.id && classes.isActive;
		return (
			<CardItem
				key={m.id}
				morph={m}
				onClick={() => morphChooseHandler(m)}
				className={`${classes.imgCard} ${classes.cardNotActive} ${isActive}`}
			/>
		);
	});

	const getIdxCard = morphsData.findIndex(m => m.id === morph.id);

	const left = () => {
		const indexMorph = morphsData.findIndex(m => m.id === morph.id);

		// where 6 is a number last 6 cards that is visiable
		let countMaxVisiableCardsInEnd = morphsData.length;
		if (screenWidth <= media.desktop)
			countMaxVisiableCardsInEnd = morphsData.length - 9;
		if (screenWidth <= media.tablet)
			countMaxVisiableCardsInEnd = morphsData.length - 7;
		if (screenWidth <= media.sTablet)
			countMaxVisiableCardsInEnd = morphsData.length - 5;
		if (screenWidth <= media.lMobile)
			countMaxVisiableCardsInEnd = morphsData.length - 5;
		if (screenWidth <= media.mMobile)
			countMaxVisiableCardsInEnd = morphsData.length - 4;

		/**
		 * width of img => 66;
		 * 15 => gap of morphsCardsMobile;
		 * 33 => half of img
		 */
		const widthImg = 66;
		const halfImg = widthImg / 1.05;
		const gap = 15;

		if (indexMorph >= countMaxVisiableCardsInEnd) {
			const lastPosition =
				-(
					countMaxVisiableCardsInEnd * widthImg +
					gap * countMaxVisiableCardsInEnd
				) + halfImg;
			return lastPosition;
		}

		return -(getIdxCard * widthImg + gap * getIdxCard) + halfImg;
	};


	return (
		<div className={classes.morphsContainerMobile}>
			<div className={classes.cardsWrapper}>
				<div className={classes.shadowMorpMobile} />
        
        <div
          className={classes.morphsCardsMobile}
          style={{ left: left() }}
        >
          <CardItem
            morph={morphsData[morphsData.length - 1]}
            className={classes.imgCardNotActive}
          />
          {mapCards}
        </div>
			</div>
			<InfoMorphMobile morph={morph} />

			{/* will appear on table resolution */}
			<div className={classes.attrsTabletWrapper}>
				<BlockInfoTitle className={classes.infoTitleAttr}>
					Attributes
				</BlockInfoTitle>
				<AttrsDetails
					className={classes.attrMobileTablet}
					attributes={morph.attributes}
				/>
			</div>
		</div>
	);
}
