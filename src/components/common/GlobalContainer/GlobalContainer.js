import classes from "./style.module.scss";

export function GlobalContainer({children, className, ...props}) {
  return (
    <div className={`${classes.globalContainer} ${className}`} {...props}>
      {children}
    </div>
  );
}
