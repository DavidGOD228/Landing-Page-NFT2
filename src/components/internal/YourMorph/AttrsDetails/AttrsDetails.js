import classes from "./style.module.scss";
import {Attr} from "../Attr/Attr";

export function AttrsDetails({attributes}) {
  const mapAttrs = attributes.map((attr) => (
    <Attr key={attr.id} name={attr.name} precent={attr.precent} />
  ));
  return <div className={classes.attrs}>{mapAttrs}</div>;
}
