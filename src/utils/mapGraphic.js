import { Stick } from 'components';

const mapGraphic = (precent, isEternal) => {
	const maxLength = 25;
	/**
	 * maxLength = max stick in block
	 * everyone stick has gradient color
	 *
	 * so... if you add 26,27,28 and so on =>
	 * you need add gradint for
	 * :nth-child(26), :nth-child(27), :nth-child(28)
	 */
	const countActiveSticks = Math.round((precent * maxLength) / 100);

	const arrSticks = [];
	let i = 0;
	while (i < 25) {
		i <= countActiveSticks
			? arrSticks.push(<Stick key={i} isEternal={isEternal} idx={i} />) // fill color stick
			: arrSticks.push(<Stick key={i} isEmpty idx={i}  />); // empty stick
		i++;
	}

	return arrSticks.map(s => s);
};

export default mapGraphic;
