import classes from "./style.module.scss";
import mapGraphic from "utils/mapGraphic";

export const Stick = ({ isEmpty = false, isEternal }) => (
  <span className={`${classes.stick} ${isEmpty && classes.empty} ${isEternal && classes.eternal}`} />
);

export const Attr = ({name, precent, type, ...props}) => {
  const isEternal = type === 'eternal';
  return (
    <div className={classes.skilContainer} {...props}>
      <p className={classes.titleSkill}>{name}</p>
      <div className={classes.counterContainer}>
        <div className={classes.graphic}>{mapGraphic(precent, isEternal)}</div>
        <div className={classes.percent}>
          {precent}%
        </div>
      </div>
    </div>
  )
}
