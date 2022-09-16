const arrImg = [
	'bad-1.png',
	'boot-1.png',
	'boot-2.png',
	'chair-1.png',
	'chair-2.png',
	'pants-1.png',
	'pants-2.png',
	'sweater-1.png'
];
const getImg = () => Math.round(Math.random() * (arrImg.length - 1));

export const getRandomImg = () => arrImg[getImg()];

export const arrItems = () => {
	const arr = [];
	let idx = 0;
	while (idx < 50) {
		arr.push(getRandomImg());
		++idx;
	}
	return arr;
};
