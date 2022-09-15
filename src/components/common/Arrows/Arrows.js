import classes from './style.module.scss'

export function Arrows() {
  return (
    <>
      <span className={`${classes.triangle} ${classes.triangleUpLeft}`} />
      <span className={`${classes.triangle} ${classes.triangleUpRight}`} />
      <span className={`${classes.triangle} ${classes.triangleBottomLeft}`} />
      <span className={`${classes.triangle} ${classes.triangleBottomRight}`} />
    </>
  )
}
