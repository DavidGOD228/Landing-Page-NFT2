import Paragraph from "../../common/Paragraph/Paragraph";

import classes from "./styles.module.scss";

import first from "../../../assets/images/first.svg";
import second from "../../../assets/images/second.svg";

import MihoMorph from "../../../assets/images/miho-morph.png";
import MihoID from "../../../assets/images/miho-id.png";
import HenriMorph from "../../../assets/images/henri-morph.png";
import HenriID from "../../../assets/images/henri-id.png";

export default function TypesCards() {
  return (
    <div className={classes.containerTypesCards}>
      <div className={classes.morphBlock}>
        <img className={classes.mihoMainImage} src={MihoMorph} alt="miho" />

        <div className={classes.contentBlock}>
          <p className={classes.classiqueParagraph}>
            <img className={classes.classiqueBorder} src={first} alt="classique" />
            <h4 className={classes.title}>CLASSIQUE</h4>
          </p>
          <Paragraph className={`${classes.descr} ${classes.mihoText}`}>
            This is the classic mode of the game where each player can start
            their experience immediately to learn the basic mechanics and then
            decide whether to switch to Eternal mode
          </Paragraph>
          <img className={classes.idImage} src={MihoID} alt="miho id" />
        </div>
      </div>

      <div className={`${classes.morphBlock} ${classes.eternalBlock}`}>
        <div className={classes.contentBlock}>
          
          <p className={classes.eternalParagraph}>
            <img className={classes.eternalBorder} src={second} alt="eternal border" />
            <h4 className={`${classes.title} ${classes.eternalTitle}`}>
              ETERNAL
            </h4>
          </p>
          <Paragraph className={`${classes.descr} ${classes.henriText}`}>
            The Morph Eternal card allows for a full gaming experience where a
            player can earn in-game currency a Poligon-based cryptocurrency
            called Morganis
          </Paragraph>
          <img
            className={`${classes.idImage} ${classes.idImageHenri}`}
            src={HenriID}
            alt="hneri id card"
          />
        </div>

        <img src={HenriMorph} alt="henri morph" />
      </div>
    </div>
  );
}
