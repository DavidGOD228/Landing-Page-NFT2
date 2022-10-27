const arrImg = [
  'asset (1).png',
  'asset (2).png',
  'asset (3).png',
  'asset (4).png',
  'asset (5).png',
  'asset (6).png',
  'asset (7).png',
  'asset (8).png',
  'asset (9).png',
  'asset (10).png',
  'asset (11).png',
  'asset (12).png',
  'asset (13).png',
  'asset (14).png',
  'asset (15).png',
  'asset (16).png',
  'asset (17).png',
  'asset (18).png',
  'asset (19).png',
  'asset (20).png',
  'asset (21).png',
  'asset (22).png',
  'asset (23).png',
  'asset (24).png',
  'asset (25).png',
  'asset (26).png',
  'asset (27).png',
  'asset (28).png',
  'asset (29).png',
  'asset (30).png',
  'asset (31).png',
  'asset (32).png',
  'asset (33).png',
  'asset (34).png',
  'asset (35).png',
  'asset (36).png',
  'asset (37).png',
  'asset (38).png',
  'asset (39).png',
  'asset (40).png',
  'asset (41).png',
  'asset (42).png',
  'asset (43).png',
  'asset (44).png',
  'asset (45).png',
  'asset (46).png',
  'asset (47).png',
  'asset (48).png',
  'asset (49).png',
  'asset (50).png',
  'asset (51).png',
  'asset (52).png',
  'asset (53).png',
  'asset (54).png',
  'asset (55).png',
  'asset (56).png',
  'asset (57).png',
  'asset (58).png',
  'asset (59).png',
  'asset (60).png',
  'asset (61).png',
  'asset (62).png',
  'asset (63).png',
  'asset (64).png',
  'asset (65).png',
  'asset (66).png',
  'asset (67).png',
  'asset (68).png',
  'asset (69).png',
  'asset (70).png',
  'asset (71).png',
  'asset (72).png',
  'asset (73).png',
  'asset (74).png',
  'asset (75).png',
  'asset (76).png',
  'asset (77).png',
  'asset (78).png',
  'asset (79).png',
  'asset (80).png',
  'asset (81).png',
  'asset (82).png',
  'asset (83).png',
  'asset (84).png',
  'asset (85).png',
  'asset (86).png',
  'asset (88).png',
  'asset (89).png',
  'asset (90).png',
  'asset (91).png',
  'asset (92).png',
  'asset (93).png',
  'asset (94).png',
  'asset (95).png',
  'asset (96).png',
  'asset (97).png',
  'asset (98).png',
  'asset (99).png',
  'asset (100).png',
  'asset (101).png',
  'asset (102).png',
  'asset (103).png',
  'asset (104).png',
  'asset (105).png',
  'asset (106).png',
  'asset (107).png',
  'asset (108).png',
  'asset (109).png',
  'asset (110).png',
  'asset (111).png',
  'asset (112).png',
  'asset (113).png',
  'asset (114).png',
  'asset (115).png',
  'asset (116).png',
  'asset (117).png',
  'asset (118).png',
  'asset (119).png',
  'asset (120).png',
  'asset (121).png',
  'asset (122).png',
  'asset (123).png',
  'asset (124).png',
  'asset (125).png',
  'asset (126).png',
  'asset (127).png',
  'asset (128).png',
  'asset (129).png',
  'asset (130).png',
  'asset (131).png',
  'asset (132).png',
  'asset (133).png',
  'asset (134).png',
  'asset (135).png',
  'asset (136).png',
  'asset (137).png',
  'asset (138).png',
  'asset (139).png',
  'asset (140).png',

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
