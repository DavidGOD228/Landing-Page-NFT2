import React, {useState} from "react";

import Title from "../../common/Title/Title";
import GreenText from "../../common/GreenText/GreenText";
import MorphInfo from "./MorphInfo/MorphInfo";
import Paragraph from "./../../common/Paragraph/Paragraph";
import Dot from "./../../common/Dot/Dot";

import Card1 from "../../../assets/images/unique-card1.png";
import Card2 from "../../../assets/images/unique-card2.png";
import Card3 from "../../../assets/images/unique-card3.png";
import Card4 from "../../../assets/images/unique-card4.png";
import Card5 from "../../../assets/images/unique-card5.png";
import Card6 from "../../../assets/images/unique-card6.png";

import classes from "./style.module.scss";
import {morphsData} from "./morphData";
import Morphs from "./Morphs/Morphs";
import Card from "./Card/Card";

// const cards = [Card2, Card3, Card4, Card5];
const YourMorph = () => {
  // const [activeMorph, setActiveMorph] = useState(1);

  return (
    <div className={classes.container}>
      <div className={classes.titleChooseMorph}>
        <Title
          isAfterBorder
          classname={classes.titleLeftSide}
          classnameWrapper={classes.wrapperContentTitleLeftSide}
        >
          choose your
          <br />
          <GreenText>Morph id</GreenText>
        </Title>
        <Paragraph className={classes.titleRightSide}>
          Metamorph è un avventura dinamica giocabile in terza persona di genere
          life simulator ambientato nel mondo virtuale Fata Morgana
          <Dot /> Il personaggio giocabile chiamatosi Surrogate è ampliamente
          personalizzabile con atributi
        </Paragraph>
      </div>

      <Morphs />

      {/* <div className={classes.cards}>
        <img src={Card1} alt="" />
        {cards.map((card, index) => (
          <Card
            isActive={activeMorph === index}
            image={card}
            onClick={() => setActiveMorph(index)}
          />
        ))}
        <img src={Card6} alt="" />
      </div>
      <MorphInfo info={morphsData[activeMorph]} /> */}
    </div>
  );
};

export default YourMorph;
