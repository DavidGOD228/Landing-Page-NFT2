import {SkillImg, Arrows} from "components";
import replaceDots from "utils/replaceDots";
import classes from "./style.module.scss";

export function InfoDetails({className, morph, ...props}) {
  const {name, code, birth, location, parametrs, skills, fingerPrintImg} =
    morph;

  const importfingerPrintImg = require("assets/images/morphs/" +
    fingerPrintImg);

  const mapSkills = skills.map((skill, idx) => (
    <SkillImg key={idx + skill} skillImgName={skill} />
  ));

  return (
    <div className={className} {...props}>
      {/* title of morph */}
      <p className={`${classes.titleDetail} ${classes.nameTitle}`}>Name</p>
      <div className={classes.nameFingerprintWrapper}>
        <p className={classes.name}>{name}</p>
        <div className={classes.fingerPrintWrapper}>
          <div className={classes.fingerPrint}>
            <img src={importfingerPrintImg} alt="fingerprint" />
            <Arrows />
          </div>
        </div>
      </div>
      <p className={classes.code}>{code}</p>

      {/* info Details */}
      <div className={classes.containerAbout}>
        <div className={classes.aboutItem}>
          <p className={classes.titleDetail}>Birth</p>
          <p className={classes.aboutData}>{replaceDots(birth)}</p>
        </div>
        <div className={classes.aboutItem}>
          <p className={classes.titleDetail}>Location</p>
          <p className={classes.aboutData}>{location}</p>
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
