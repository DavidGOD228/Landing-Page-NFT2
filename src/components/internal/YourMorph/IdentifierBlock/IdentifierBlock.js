import {Arrows} from "components";
import classes from "./style.module.scss";
import eternalNumber from "assets/images/types/second-type-choose-morph.svg";
import classiqueNumber  from "assets/images/types/first-type-choose-morph.svg";

export function IdentifierBlock({id, type, className, ...props}) {
  const isEternal = type === "eternal";
  const classType = isEternal ? classes.eternal : classes.classique;
  const imgType = isEternal ? eternalNumber : classiqueNumber;

  return (
    <div className={`${classes.identifierBlock} ${className}`} {...props}>
      <div className={classes.id}>
        <p className={classType}>#{id}</p>
        <Arrows />
      </div>

      <div className={classes.typeWrapper}>
        <div className={classes.type}>
          <img src={imgType} alt="type" />
        </div>
        <p className={`${classes.textType} ${classType}`}>{type}</p>
      </div>
    </div>
  );
}
