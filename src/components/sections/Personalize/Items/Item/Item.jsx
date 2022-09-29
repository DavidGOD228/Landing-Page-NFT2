import { useState, useEffect } from 'react';
import { getRandomImg } from 'utils/ArrItems';
import classes from './style.module.scss';

export default function Item({ imgName }) {
	const initFirstImg = require('assets/images/marketplace/' + getRandomImg());
	const secondecondImg = require('assets/images/marketplace/' + getRandomImg());
	const [imgs, setImgs] = useState({ fliped: false, first: initFirstImg, second: secondecondImg});

	useEffect(() => {
		let handle;
		function start() {
			var min = 3,
				max = 30;
			var rand = Math.floor(Math.random() * (max - min + 1) + min);
			handle = setTimeout(myFunction, rand * 1000);
		}

		function myFunction() {
			const newFirstImg = require('assets/images/marketplace/' +
				getRandomImg());
			const newSecondImg = require('assets/images/marketplace/' +
				getRandomImg());
      setImgs(s => ({
        fliped: !s.fliped,
        first: newFirstImg,
        second: newSecondImg
      }));
		}

		start();

		return () => clearTimeout(handle);
	}, [imgs]);

	return (
		<div className={classes.scene}>
			<div className={`${classes.card} ${imgs.fliped && classes.isFlipped}`}>
        <img
          className={`${classes.cardFace} ${classes.cardFaceFront}`}
          src={imgs.first}
          alt='imgName'
        />
        <img
          className={`${classes.cardFace} ${classes.cardFaceBack}`}
          src={imgs.second}
          alt='imgName'
        />
			</div>
		</div>
	);
}
