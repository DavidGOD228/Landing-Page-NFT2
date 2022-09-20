import classes from "./style.module.scss";

export function SkillImg({skillImgName}) {
  const importskillImg = require("assets/images/skills/" +
    skillImgName);
  return (
    <img
      className={classes.skillImg}
      src={importskillImg}
      alt={skillImgName}
    />
  );
}
