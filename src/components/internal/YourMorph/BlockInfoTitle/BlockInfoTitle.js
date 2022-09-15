import { memo } from 'react'
import classes from "./style.module.scss";

export const BlockInfoTitle = memo(({ className, children, ...props }) => {
  return (
    <div className={`${classes.blockInfoTitle} ${className}`} {...props}>
      <div className={classes.blockInfo}>{children}</div>
      <hr />
    </div>
  );
})