import {Title} from "components";

import Skull from "assets/images/skills/skill-5.svg";
import Slime from "assets/images/skills/skill-6.svg";
import Bricks from "assets/images/skills/skill-7.svg";
import Fish from "assets/images/skills/agressive-active.svg";
import Chain from "assets/images/skills/skill-8.svg";
import Morph from "assets/images/unique-morphs.png";

import replaceDot from "utils/replaceDots";

import classes from "./style.module.scss";

const MorphsUnique = () => {
  const text1 =
    "MM takes you back to what makes a truly exciting MMORPG. You make the rules. Buy yourself a house, furnish it, dress up your Morph, find them a job and make them earn. Invest in its growth or make a fortune. Everything is alright.";
  const textSkill =
    "MM takes you back to what makes a truly exciting MMORPG. You make the rules. Buy yourself a house, furnish it.";

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Title classname={classes.title}>ALL MORPHS ARE UNIQUE</Title>

        <div className={classes.descrWrapper}>
          <p className={`${classes.paragraph} ${classes.descrSection}`}>
            {replaceDot(text1)}
          </p>

          <div className={classes.icons}>
            <img className={classes.skillImg} src={Skull} alt="skill" />
            <img className={classes.skillImg} src={Slime} alt="skill" />
            <img className={classes.skillImg} src={Bricks} alt="skill" />
            <img
              className={`${classes.skillImg} ${classes.active}`}
              src={Fish}
              alt="skill"
            />
            <img className={classes.skillImg} src={Chain} alt="skill" />
          </div>

          <div className={classes.skillTitle}>Agressive</div>
          <p className={`${classes.paragraph}`}>{replaceDot(textSkill)}</p>
        </div>
      </div>
      <img className={classes.morphImage} src={Morph} alt="morph" />
    </div>
  );
};

export default MorphsUnique;
