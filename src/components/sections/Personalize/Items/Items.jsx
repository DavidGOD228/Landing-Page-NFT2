import classes from './style.module.scss'
import Item from "./Item/Item"
import {arrItems, getRandomElement, getUniqueImg} from 'utils/ArrItems';
import {useEffect, useState} from "react";

export default function Items() {
  const [marketplaceItems, setMarketplaceItems] = useState(arrItems())
  const [replaceCard, setReplaceCart] = useState(null)

  useEffect(() => {
    const min = 1, max = 5;
    const rand = Math.floor(Math.random() * (max - min + 1) + min);

    function myFunction() {
      const cardToReplaceIndex = getRandomElement()

      const newFirstImg = getUniqueImg(marketplaceItems);

      setReplaceCart(cardToReplaceIndex)

      const newMarketplaceItems = [...marketplaceItems]
      newMarketplaceItems.splice(cardToReplaceIndex, 1, newFirstImg);

      setMarketplaceItems([...newMarketplaceItems])
    }

    const interval = setInterval(() => {
      myFunction()
    }, rand * 1000)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.marketplaceItems}>
      {marketplaceItems.map((img, i) => <Item key={i} firstImage={img} isFlipped={replaceCard === i} secondImage={getUniqueImg(marketplaceItems)}/>)}
    </div>
  )
}
