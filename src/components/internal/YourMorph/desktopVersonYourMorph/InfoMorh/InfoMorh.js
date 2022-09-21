import {
  IdentifierBlock,
  BlockInfoTitle,
  InfoDetails,
  AttrsDetails,
} from "components";
import classes from "./style.module.scss";

export function InfoMorh({morph}) {
  const {id, bodyImg, type, name, attributes} = morph;
  const importBodyImg = require("assets/images/morphs/" + bodyImg);

  return (
    <>
      <img className={classes.imgMorphChoose} src={importBodyImg} alt={name} />

      <div className={classes.infoBlock}>
        <IdentifierBlock
          className={classes.identifierBlock}
          id={id}
          type={type}
        />
        <BlockInfoTitle className={classes.infoTitle}>Bio</BlockInfoTitle>
        <InfoDetails className={classes.infoDetails} morph={morph} />

        <BlockInfoTitle className={classes.infoTitle}>
          Attributes
        </BlockInfoTitle>
        <AttrsDetails attributes={attributes} type={type} />
      </div>
    </>
  );
}
