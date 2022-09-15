import EnumSkills from './EnumSkills';

const nameFolder = "miho-ikuta"

const mihoIkuta = {
  id: 740,
  cardImg: `${nameFolder}/card-miho-ikuta.png`,
  bodyImg: `${nameFolder}/body-miho-ikuta.png`,
  fingerPrintImg: `${nameFolder}/fingerprint-miho-ikuta.svg`,
  name: "Miho Ikuta",
  type: "classique",
  code: "F3521NDDK802LGZXYS9NV4",
  birth: '12.04.2003',
  location: "Osaka | Japan",
  parametrs: "1.66 cm, 45 kg",
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
      precent: 78,
    },
    {
      id: 2,
      name: EnumSkills.creativity,
      precent: 84,
    },
    {
      id: 3,
      name: EnumSkills.athletics,
      precent: 71,
    },
    {
      id: 4,
      name: EnumSkills.leadership,
      precent: 82,
    },
    {
      id: 5,
      name: EnumSkills.resourcefulness,
      precent: 80,
    },
    {
      id: 6,
      name: EnumSkills.socialization,
      precent: 48,
    },
  ]
}

export default mihoIkuta;