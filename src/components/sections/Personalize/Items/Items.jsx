import classes from './style.module.scss'
import Item from "./Item/Item"
import { arrItems } from './../../../../utils/ArrItems';
import { useWindowWidth } from '../../../../hooks/useWindowWidth'

export default function Items() {
  const isDesktop = useWindowWidth(1024)
  return (
    <div className={classes.marketplaceItems}>
      {arrItems(isDesktop ? 50 : 18).map((img, i) => <Item key={i} imgName={img}/>)}
    </div>
  )
}
