import { SkillImg, Arrows, GenerateCodeForMorph } from 'components';
import replaceDots from 'utils/replaceDots';
import classes from './style.module.scss';

export function InfoDetails({ className, morph, ...props }) {
	const {
		name,
		code,
		birth,
		country,
		city,
		parametrs,
		skills,
		fingerPrintImg,
		type
	} = morph;

	const importfingerPrintImg = require('assets/images/morphs/' +
		fingerPrintImg);

	const mapSkills = skills.map((skill, idx) => (
		<SkillImg key={idx + skill} skillImgName={skill} />
	));

  const isEternal = type === 'eternal';

	return (
		<div className={className} {...props}>
			{/* title of morph */}
			<p className={`${classes.titleDetail} ${classes.nameTitle}`}>Name</p>
			<div className={classes.nameFingerprintWrapper}>
				<p className={classes.name}>{name}</p>
				<div className={classes.fingerPrintWrapper}>
					<div className={classes.fingerPrint}>
						<img src={importfingerPrintImg} alt='fingerprint' />
						<Arrows isEternal={isEternal}/>
					</div>
				</div>
			</div>
			<div className={`${classes.code} ${isEternal && classes.eternalColor}`}>
				<GenerateCodeForMorph>{code}</GenerateCodeForMorph>
			</div>

			{/* info Details */}
			<div className={classes.containerAbout}>
				<div className={classes.aboutItem}>
					<p className={classes.titleDetail}>Birth</p>
					<p className={classes.aboutData}>{replaceDots(birth)}</p>
				</div>
				<div className={classes.aboutItem}>
					<p className={classes.titleDetail}>Location</p>
					<div className={classes.location}>
						<p className={classes.aboutData}>{city}</p>
						<p className={classes.aboutData}>{country}</p>
					</div>
				</div>
				<div className={classes.aboutItem}>
					<p className={classes.titleDetail}>Parametres</p>
					<p className={classes.aboutData}>{replaceDots(parametrs)}</p>
				</div>
				<div className={classes.aboutItem}>
					<p className={classes.titleDetail}>Skill &#38; Traits</p>
					<div className={classes.skillsContainer}>{mapSkills}</div>
				</div>
			</div>
		</div>
	);
}
