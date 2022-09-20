import classes from "./style.module.scss";
import {Attr} from "components";

export function AttrsDetails({attributes, className, ...props}) {
  const mapAttrs = attributes.map((attr) => (
    <Attr key={attr.id} name={attr.name} precent={attr.precent} />
  ));
  return <div className={`${classes.attrs} ${className}`} {...props}>{mapAttrs}</div>;
}
