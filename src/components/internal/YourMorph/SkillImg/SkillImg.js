import classes from "./style.module.scss";

export function SkillImg({skillImgName}) {
  const importskillImg = require("./../../../../assets/images/skills/" +
    skillImgName);
  return (
    <div className={classes.skillImgContainer}>
      <img
        className={classes.skillImg}
        src={importskillImg}
        alt={skillImgName}
      />
    </div>
  );
}
