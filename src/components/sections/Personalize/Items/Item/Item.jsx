import { useState, useEffect } from 'react';
import { getRandomImg } from 'utils/ArrItems';
import classes from './style.module.scss';

export default function Item({ imgName }) {
	const initFirstImg = require('assets/images/marketplace/' + getRandomImg());
	const secondecondImg = require('assets/images/marketplace/' + getRandomImg());
	const [firstImg, setfirstImg] = useState(initFirstImg);
	const [secondImg, setSecondImg] = useState(secondecondImg);
	const [fliped, setFliped] = useState(false);

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
			setfirstImg(newFirstImg);
			setSecondImg(newSecondImg);
			setFliped(s => !s);
		}

		start();

		return () => clearTimeout(handle);
	}, [fliped]);

	return (
		<div className={classes.scene}>
			<div className={`${classes.card} ${fliped && classes.isFlipped}`}>
				<img
					className={`${classes.cardFace} ${classes.cardFaceFront}`}
					src={firstImg}
					alt='imgName'
				/>
				<img
					className={`${classes.cardFace} ${classes.cardFaceBack}`}
					src={secondImg}
					alt='imgName'
				/>
			</div>
		</div>
	);
}
