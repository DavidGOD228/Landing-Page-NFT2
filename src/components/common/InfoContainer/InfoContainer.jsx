import classes from "./style.module.scss";

export function InfoContainer({children, className, style, ...props}) {
  return (
    <div className={`${classes.container} ${className}`} style={style} {...props}>
      {children}
    </div>
  );
}
