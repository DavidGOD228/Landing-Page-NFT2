import React from "react";

import Title from "../../common/Title/Title";
import GreenText from "../../common/GreenText/GreenText";
import Paragraph from "../../common/Paragraph/Paragraph";

import TransparentGreenCard from "../../../assets/images/transparent-green-card.png";

import classes from "./style.module.scss";

export const MorphId = () => {
  return (
    <div className={classes.container}>
      <div className={classes.cardsImg}>
        <img src={TransparentGreenCard} alt="cards" />
      </div>

      <div className={classes.description}>
        <div className={classes.chineseText}>變形 相同的代碼</div>

        <div className={classes.titleWrapper}>
          <Title classname={classes.title}>
            Morph <GreenText>id</GreenText>
          </Title>
        </div>

        <Paragraph className={classes.morhDescr}>
          Morph - ID is an identification card with a single genetic code
          essential to access the game that represents the identity of your
          Morph that stands out in each user.
        </Paragraph>

        <p className={classes.morhTitle}>2 ways to start</p>
        <Paragraph className={classes.morhDescr}>
          The game offers 2 experience scenarios based on the starting Morph ID
          card a player chooses. Each scenario satisfies different game modes.
          Classique card is more suitable for explorers and the Eternal one for
          true competition lovers.
        </Paragraph>
      </div>
    </div>
  );
};

export default MorphId;
