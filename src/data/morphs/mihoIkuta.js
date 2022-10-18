import EnumSkills from './EnumSkills';

const nameFolder = 'miho-ikuta';

const mihoIkuta = {
	id: 740,
	cardImg: `${nameFolder}/card-miho-ikuta.png`,
	bodyImg: "https://res.cloudinary.com/dbbqyqt75/image/upload/v1666085877/morphs/body-miho-ikuta_eymh86.png",
	bodyMobileImg: `${nameFolder}/mobile-miho-ikuta.png`,
	fingerPrintImg: `${nameFolder}/fingerprint-miho-ikuta.svg`,
	name: 'Miho Ikuta',
	type: 'classique',
	code: 'F3521NDDK802LGZXYS9NV4',
	birth: '12.04.2003',
	location: 'Osaka | Japan',
	parametrs: '1.66 cm, 45 kg',
	skills: ['salt.png', 'fish.png', 'stone.png', 'lollipop.png'],
	attributes: [
		{
			id: 1,
			name: EnumSkills.logicMathematics,
			precent: 78
		},
		{
			id: 2,
			name: EnumSkills.creativity,
			precent: 84
		},
		{
			id: 3,
			name: EnumSkills.athletics,
			precent: 71
		},
		{
			id: 4,
			name: EnumSkills.leadership,
			precent: 82
		},
		{
			id: 5,
			name: EnumSkills.resourcefulness,
			precent: 80
		},
		{
			id: 6,
			name: EnumSkills.socialization,
			precent: 48
		}
	]
};

export default mihoIkuta;
