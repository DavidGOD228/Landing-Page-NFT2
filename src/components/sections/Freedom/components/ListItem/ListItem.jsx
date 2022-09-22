import Circle from 'assets/images/circle.svg'
import CircleActive from 'assets/images/circle-active.svg'

import {useWindowWidth} from 'hooks/useWindowWidth'

import classes from './style.module.scss'

const ListItem = ({text, line, isActive}) => {
  const isDesktop = useWindowWidth(1024)
  return (
    <div className={classes.container}>
      {isDesktop && <img className={classes.line} src={line} alt=""/>}
      <div className={classes.list}>
        {
          isActive ? <img className={classes.circle} src={CircleActive} alt=""/> :
            <img className={classes.circle} src={Circle} alt=""/>
        }
        {text}
      </div>
    </div>

  )
}

export default ListItem
