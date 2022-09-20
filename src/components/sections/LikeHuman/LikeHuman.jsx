import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Title/Title";
import GreenText from "../../common/GreenText/GreenText";
import Paragraph from "../../common/Paragraph/Paragraph";
import AccordionWithIcon from "../../common/AccordionWithIcon/AccordionWithIcon";
import ColumnItem from "./components/ColumnItem/ColumnItem";

import {useWindowWidth} from "../../../hooks/useWindowWidth";

import classes from "./style.module.scss";

import {accordionData, tableData} from "./data";

export const LikeHuman = () => {
  const isDesktop = useWindowWidth(1024);

  const table = (
    <div className={classes.table}>
      {tableData.map(({id, icon, title, subtitle}, idx) => (
        <ColumnItem
          key={id}
          icon={icon}
          title={title}
          subtitle={subtitle}
        />
      ))}
    </div>
  );

  const accordion = (
    <div className={classes.content}>
      <div className={classes.accordionContainer}>
        {accordionData.map(({id, icon, title, subtitle}) => (
          <AccordionWithIcon
            key={id}
            icon={icon}
            title={title}
            subtitle={subtitle}
          />
        ))}
      </div>
    </div>
  )

  return (
      <div className={classes.container}>
        <div className={classes.titleWrapper}>
          <Paragraph className={classes.paragraph}>
            Metamorph is an open-world exploration, NFT creature collector and
            life simulator game built on the Polygon Blockchain, releasing on
            IOS and Android in 2023. Play-to-earn in a graphically-rich sci-fi
            adventure and life builder that allows you to feel the life inside
            the game.
          </Paragraph>
          <ScrollAnimation className={classes.titleAnimWrapper} animateIn="animate__slideInUp" animateOnce>
            <Title classname={classes.title}>
              it&apos;s just like <GreenText> a human</GreenText>
            </Title>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
          {isDesktop ? table : accordion}
        </ScrollAnimation>
      </div>
  );
};

export default LikeHuman;
