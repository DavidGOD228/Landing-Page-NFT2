import classes from "./style.module.scss";
import mapGraphic from "../../../../utils/mapGraphic";

export const Stick = ({ isEmpty = false }) => (
  <span className={`${classes.stick} ${isEmpty && classes.empty}`} />
);

export const Attr = ({name, precent}) => {
  return (
    <div className={classes.skilContainer}>
        <p className={classes.titleSkill}>{name}</p>
        <div className={classes.counterContainer}>
          <div className={classes.graphic}>{mapGraphic(precent)}</div>
          <div className={classes.percent}>
            {precent}%
          </div>
        </div>
      </div>
  )
}
