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
  if (width > 655 && width <= 1200) {
    itemsLength = 40
  } else if (width > 500 && width <= 655) {
    itemsLength = 30
  } else if (width > 422 && width <= 500) {
    itemsLength = 25
  }
  else if (width > 348 && width <= 422) {
    itemsLength = 18
  }
  else if (width <= 348) {
    itemsLength = 15
  }

  const arr = [];
  let idx = 0;
  while (idx < itemsLength) {
    arr.push(getRandomImg());
    ++idx;
  }
  return arr;
};
