import EnumSkills from './EnumSkills';

const nameFolder = "henrik-hail"

const henrikHall = {
  id: 995,
  cardImg: `${nameFolder}/card-henrik-hail.png`,
  bodyImg: `${nameFolder}/body-henrik-hail.png`,
  fingerPrintImg: `${nameFolder}/fingerprint-henrik-hail.svg`,
  name: "Henrik Hall",
  type: "eternal",
  code: "X1101AJXE572XJOPAZ1ZF5",
  birth: '20.05.1998',
  location: "Los Angeles | United States",
  parametrs: "1.79 cm, 76 kg",
  skills: [
    'skill-1.png',
    'skill-2.png',
    'skill-3.png',
    'skill-4.png',
  ],
  attributes: [
    {
      id: 1,
      name: EnumSkills.logicMathematics,
      precent: 72,
    },
    {
      id: 2,
      name: EnumSkills.creativity,
      precent: 92,
    },
    {
      id: 3,
      name: EnumSkills.athletics,
      precent: 70,
    },
    {
      id: 4,
      name: EnumSkills.leadership,
      precent: 75,
    },
    {
      id: 5,
      name: EnumSkills.resourcefulness,
      precent: 84,
    },
    {
      id: 6,
      name: EnumSkills.socialization,
      precent: 81,
    },
  ]
}

export default henrikHall;