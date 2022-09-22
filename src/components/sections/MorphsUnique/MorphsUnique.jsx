import {Title} from "components";

import Skull from "assets/images/skills/skill-5.svg";
import Slime from "assets/images/skills/skill-6.svg";
import Bricks from "assets/images/skills/skill-7.svg";
import Fish from "assets/images/skills/agressive-active.svg";
import Chain from "assets/images/skills/skill-8.svg";
import Morph from "assets/images/unique-morphs.png";
import AgressiveMobile from "assets/images/agressive-mobile.png";


import classes from "./style.module.scss";
import {useWindowWidth} from "hooks/useWindowWidth";
import WhiteTitle from "../../common/WhiteTitle/WhiteTitle";

import toiletVideo from 'assets/video/toilet.video.mp4';

export const MorphsUnique = () => {
  const isDesktop = useWindowWidth(1024)
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          {
            isDesktop ? <Title classname={classes.title}>ALL MORPHS ARE UNIQUE</Title> :
              <WhiteTitle classname={classes.title} title='ALL MORPHS ARE UNIQUE'/>
          }
          <div className={classes.descrWrapper}>
            <p className={`${classes.paragraph} ${classes.descrSection}`}>
              MM takes you back to what makes a truly exciting MMORPG. You make the rules. Buy yourself a house, furnish it, dress up your Morph, find them a job and make them earn. Invest in its growth or make a fortune. Everything is alright.
            </p>
            <div className={classes.icons}>
              <img className={classes.skillImg} src={Skull} alt="skill" />
              <img className={classes.skillImg} src={Slime} alt="skill" />
              <img className={classes.skillImg} src={Bricks} alt="skill" />


              <div className={classes.wrapperSkill}>
                <img
                  className={`${classes.skillImg} ${classes.active}`}
                  src={Fish}
                  alt="skill"
                />
                <div className={classes.skillTitleMobile}>Agressive</div>
              </div>


              <img className={classes.skillImg} src={Chain} alt="skill" />
            </div>
            {
              isDesktop && <>
                <div className={classes.skillTitle}>Agressive</div>
                <p className={`${classes.paragraph}`}>MM takes you back to what makes a truly exciting MMORPG. You make the rules. Buy yourself a house, furnish it.</p>
              </>
            }
          </div>
        </div>
        <img className={classes.morphImage} src={Morph} alt="morph"/>
      </div>
      {!isDesktop && <div className={classes.mobileMorph}>
        <video
          className={classes.mobileMorphVideo}
          src={toiletVideo}
          autoPlay
          loop
          muted
          playsinline
        />
      </div>}
    </>
  );
};

export default MorphsUnique;
