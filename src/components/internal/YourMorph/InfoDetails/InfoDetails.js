import { SkillImg } from './../../../'
import replaceDots from './../../../../utils/replaceDots'
import classes from './style.module.scss'

export function InfoDetails({ className, morph, ...props }) {
  const { name, code, birth, location, parametrs, skills } = morph;

  const mapSkills = skills.map(skill => <SkillImg key={skill} skillImgName={skill} />)

  return (
    <div className={className} {...props}>
      {/* title of morph */}
      <p className={`${classes.titleDetail} ${classes.nameTitle}`}>Name</p>
      <p className={classes.name}>{name}</p>
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
          <div className={classes.skillsContainer}>
            {mapSkills}
          </div>
        </div>
      </div> 
    </div>
  )
}
