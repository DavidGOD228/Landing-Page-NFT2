import { Arrows } from "./../../../";
import classes from "./style.module.scss";

export function IdentifierBlock({id, type, fingerPrintImg, className, ...props}) {
  const importfingerPrintImg = require('./../../../../assets/images/morphs/' +
  fingerPrintImg);

  console.log(type === 'eternal')
  const isEternal = type === 'eternal' && classes.eternal;

  return (
    <div className={`${classes.identifierBlock} ${className}`} {...props}>
      <div className={classes.id}>
        <p className={isEternal}>#{id}</p>
        <Arrows />
      </div>

      <div className={classes.fingerPrintWrapper}>
        <div className={classes.fingerPrint}>
          <img src={importfingerPrintImg} alt="fingerprint" />
          <Arrows />
        </div>
      </div>
    </div>
  );
}
