import classes from "./style.module.scss";

export function GlobalContainer({children, className, style, ...props}) {
  return (
    <div className={`${classes.globalContainer} ${className}`} style={style} {...props}>
      {children}
    </div>
  );
}
