import classes from './style.module.scss'
import Item from "./Item/Item"
import { arrItems } from 'utils/ArrItems';

export default function Items() {
  return (
    <div className={classes.marketplaceItems}>
      {arrItems().map((img, i) => <Item key={i} imgName={img}/>)}
    </div>
  )
}
