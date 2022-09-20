import { useState } from "react";
import { CardItem, InfoMorphMobile, AttrsDetails, BlockInfoTitle } from "components";

import classes from "./style.module.scss";
import {morphsData} from "data/morphs/data";

export function MorphMobile() {
  const [morph, setMorph] = useState(morphsData[0]);

  const morphChooseHandler = (m) => setMorph(m);

  const mapCards = morphsData.map((m) => {
    const isActive = m.id === morph.id && classes.isActive;
    return (
      <CardItem
        key={m.id}
        morph={m}
        onClick={() => morphChooseHandler(m)}
        isActive={isActive}
        className={classes.imgCard}
      />
    );
  });

  const getIdxCard = morphsData.findIndex(m => m.id === morph.id);
  /**
   * width of img => 66;
   * 15 => gap of morphsCardsMobile;
   * 33 => half of img
   */
  const left = -((getIdxCard * 66) + (15 * getIdxCard)) + 33;
  
  return (
    <div className={classes.morphsContainerMobile}>
      <div className={classes.morphsCardsMobile} style={{ left }}>{mapCards}</div>
      <InfoMorphMobile morph={morph} />

      {/* will appear on table resolution */}
      <div className={classes.attrsTabletWrapper}>
        <BlockInfoTitle className={classes.infoTitleAttr}>
          Attributes
        </BlockInfoTitle>
        <AttrsDetails className={classes.attrMobileTablet} attributes={morph.attributes} />
      </div>
    </div>
  )
}
