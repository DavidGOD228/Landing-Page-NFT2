import classes from "./style.module.scss";

export default function GlobalContainer({children, className, ...props}) {
  return (
    <div className={`${classes.globalContainer} ${className}`} {...props}>
      {children}
    </div>
  );
}
