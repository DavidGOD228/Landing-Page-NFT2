import {
	InfoDetails,
	IdentifierBlock,
	BlockInfoTitle,
	AttrsDetails
} from 'components';
import classes from './style.module.scss';

export function InfoMorphMobile({ className, morph, ...props }) {
	const { id, type, name, attributes, bodyMobileImg } = morph;

	const importBodyImg = require('assets/images/morphs/' + bodyMobileImg);

	return (
		<div className={classes.infoMorphMobile} {...props}>
			<img
				className={classes.imgMorphChooseMobile}
				src={importBodyImg}
				alt={name}
			/>

			<div className={classes.infoBlockMobile}>
				<IdentifierBlock
					className={classes.identifierBlock}
					id={id}
					type={type}
				/>
				<BlockInfoTitle className={classes.infoTitle}>Bio</BlockInfoTitle>
				<InfoDetails className={classes.infoDetails} morph={morph} />

				{/* will hidden on $tablet in scss */}
				<BlockInfoTitle className={classes.infoTitleAttr}>
					Attributes
				</BlockInfoTitle>
				<AttrsDetails
					className={classes.attrTabletDesktop}
					attributes={attributes}
          type={type}
				/>
			</div>
		</div>
	);
}
