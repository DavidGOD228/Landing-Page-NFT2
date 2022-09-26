const arrImg = [
  'armchair.png',
  'bed-1.png',
  'bed-2.png',
  'bed-3.png',
  'bench.png',
  'boot-2.png',
  'boot-3.png',
  'boot-4.png',
  'boot-5.png',
  'boot-6.png',
  'boot-7.png',
  'boot-8.png',
  'boot-9.png',
  'boot-10.png',
  'boot-11.png',
  'boot-12.png',
  'boot-13.png',
  'boot-14.png',
  'boot-15.png',
  'chair-1.png',
  'chair-2.png',
  'chair-3.png',
  'dresser.png',
  'jacket-1.png',
  'jacket-2.png',
  'jacket-3.png',
  'jacket-4.png',
  'jacket-5.png',
  'jacket-6.png',
  'jacket-7.png',
  'jacket-8.png',
  'jacket-9.png',
  'pants-1.png',
  'pants-2.png',
  'pants-3.png',
  'pants-4.png',
  'pants-5.png',
  'pants-6.png',
  'pants-7.png',
  'pants-8.png',
  'pants-9.png',
  'picture.png',
  'plant.png',
  'table-1.png',
  'table-2.png',
  'wash_stand.png',
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
