import { useState, useEffect } from 'react';
import { getRandomImg } from 'utils/ArrItems';


export default function Item({ imgName }) {
  const imgImport = require('assets/images/marketplace/' + imgName);
  const [img, setImg] = useState(imgImport);

  useEffect(() => {
    let handle;
    function start() {
      var min = 3,
      max = 30;
      var rand = Math.floor(Math.random() * (max - min + 1) + min);
      handle = setTimeout(myFunction, rand * 1000);
    }

    function myFunction() {
      const newImg = require('assets/images/marketplace/' + getRandomImg());
      setImg(newImg);
    }

    start();

    return () => clearTimeout(handle);
  }, [img])

  return <img src={img} alt="imgName" />
}
