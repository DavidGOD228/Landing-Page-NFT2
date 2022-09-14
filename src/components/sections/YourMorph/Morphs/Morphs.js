import {useState} from "react";
import CardItem from "./components/CardItem/CardItem";
import InfoMorh from "./components/InfoMorh/InfoMorh";

import classes from "./style.module.scss";
import {morphsData} from "./data/data";
import knutMoberg from "./data/knutMoberg";

export default function Morphs() {
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
