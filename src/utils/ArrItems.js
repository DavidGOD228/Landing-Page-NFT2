const arrImg = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  '11.png',
  '12.png',
  '13.png',
  '14.png',
  '15.png',
  '16.png',
  '1.png',
  '18.png',
  '19.png',
  '20.png',
  '21.png',
  '22.png',
  '23.png',
  '24.png',
  '25.png',
  '26.png',
  '27.png',
  '28.png',
  '29.png',
  '30.png',
  '31.png',
  '32.png',
  '33.png',
  '34.png',
  '35.png',
  '38.png',
  '39.png',
  '40.png',
  '42.png',
  '43.png',
  '44.png',
  '45.png',
  '47.png',
  '50.png',
  '52.png',
  '53.png',
  '56.png',
  '57.png',
  '58.png',
  '59.png',
  '60.png',
  '61.png',
  '66.png',
  '70.png',
  '71.png',
  '79.png',
  '83.png',
  '85.png',
  '86.png',
  '87.png',
  '88.png',
  '89.png',
  '90.png',
  '93.png',
  '94.png',
  '95.png',
  '96.png',
  '98.png',
  '99.png',
  '100.png',
  '102.png',
  '103.png',
  '105.png',
  '108.png',
  '109.png',
  '110.png',
  '111.png',
  '119.png',
  '120.png',
  '121.png',
  '122.png',
  '123.png',
  '125.png',
  '126.png',
  '127.png',
  '128.png',
  '129.png',
  '136.png',
  '137.png',
  '138.png',
  '139.png',
  '140.png',
  '141.png',
  '142.png',
  '143.png',
  '144.png',
  '145.png',
  '146.png',
  '147.png',
  '148.png',
  '149.png',
  '150.png',
  '151.png',
  '152.png',
  '153.png',
  '154.png',
  '155.png',
  '156.png',
  '157.png',
  '160.png',
  '161.png',
  '162.png',
  '172.png',
  '177.png',
  '178.png',
];
export const getRandomElement = () => Math.round(Math.random() * (getItemLength() - 1))
const getImg = () => Math.round(Math.random() * (arrImg.length - 1));

const getRandomImg = () => arrImg[getImg()];

export const getUniqueImg = (arr) => {
  while (true) {
    let randomImage = getRandomImg()
    if(!arr.includes(randomImage)) return randomImage
  }
}

const getItemLength = () => {
  const width = window.screen.width;
  let itemsLength = 50
  if (width > 655 && width <= 1200) {
    itemsLength = 40
  } else if (width > 500 && width <= 655) {
    itemsLength = 30
  } else if (width > 422 && width <= 500) {
    itemsLength = 25
  } else if (width > 348 && width <= 422) {
    itemsLength = 18
  } else if (width <= 348) {
    itemsLength = 15
  }
  return itemsLength
}

export const arrItems = () => {
  const itemsLength = getItemLength()

  const arr = new Set()
  while (arr.size !== itemsLength) {
    arr.add(getRandomImg());
  }
  return [...arr];
};
