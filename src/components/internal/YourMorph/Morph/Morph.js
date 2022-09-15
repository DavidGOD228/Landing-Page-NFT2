import {useState} from "react";
import { CardItem, InfoMorh } from "../../../";

import classes from "./style.module.scss";
import {morphsData} from "./../../../../data/morphs/data";
import knutMoberg from "./../../../../data/morphs/knutMoberg";

export function Morph() {
  const [morph, setMorph] = useState(knutMoberg);

  const morphChooseHandler = (m) => setMorph(m);

  const mapCards = morphsData.map((m) => {
    const isActive = m.id === morph.id && classes.isActive;
    return (
      <CardItem
        key={m.id}
        morph={m}
        onClick={() => morphChooseHandler(m)}
        isActive={isActive}
      />
    );
  });

  return (
    <div className={classes.morphsContainer}>
      <div className={classes.morphsCards}>{mapCards}</div>
      <InfoMorh morph={morph} />
    </div>
  );
}