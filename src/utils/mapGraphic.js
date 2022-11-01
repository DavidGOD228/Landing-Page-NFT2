import { Stick } from 'components';

const mapGraphic = (precent, isEternal, isDesktop) => {
	const stickCount = isDesktop ? 25: 14;
	/**
	 * maxLength = max stick in block
	 * everyone stick has gradient color
	 *
	 * so... if you add 26,27,28 and so on =>
	 * you need add gradint for
	 * :nth-child(26), :nth-child(27), :nth-child(28)
	 */
	const countActiveSticks = Math.round((precent * stickCount) / 100);

	const arrSticks = [];
	let i = 0;
	while (i < stickCount) {
		i <= countActiveSticks
			? arrSticks.push(<Stick isDesktop={isDesktop} key={i} isEternal={isEternal} idx={i} />) // fill color stick
			: arrSticks.push(<Stick isDesktop={isDesktop} key={i} isEmpty idx={i}  />); // empty stick
		i++;
	}

	return arrSticks.map(s => s);
};

export default mapGraphic;
