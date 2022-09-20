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
  const width = window.screen.width;
  let itemsLength = 50
  if (width >= 550 && width <= 1200) {
    itemsLength = 40
  } else if (width > 400 && width <= 550) {
    itemsLength = 30
  } else if (width <= 400) {
    itemsLength = 18
  }

  console.log(itemsLength)
  const arr = [];
  let idx = 0;
  while (idx < itemsLength) {
    arr.push(getRandomImg());
    ++idx;
  }
  return arr;
};
