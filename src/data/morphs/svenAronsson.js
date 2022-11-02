import EnumSkills from './EnumSkills';

const nameFolder = 'sven-aronsson';

const svenAronsson = {
	id: 365,
	cardImg: `${nameFolder}/card-sven-aronsson.png`,
	bodyImg: "https://res.cloudinary.com/dbbqyqt75/image/upload/v1667402615/morphs/Sven_Aronsson_ryn7ji.png",
	bodyMobileImg: `${nameFolder}/mobile-sven-aronsson.png`,
	fingerPrintImg: `${nameFolder}/fingerprint-sven-aronsson.svg`,
	name: 'Sven Aronsson',
	type: 'classique',
	code: 'F2124AJXE772LSAWFZ3ZF9',
	birth: '28.02.1999',
	city: 'Copenhagen',
	country: 'Denmark',
	parametrs: '1.83 cm 78 kg',
	skills: ['crouching.png', 'marionette.png', 'twoLines.png', 'eye.png'],
	attributes: [
		{
			id: 1,
			name: EnumSkills.logicMathematics,
			precent: 91
		},
		{
			id: 2,
			name: EnumSkills.creativity,
			precent: 20
		},
		{
			id: 3,
			name: EnumSkills.athletics,
			precent: 43
		},
		{
			id: 4,
			name: EnumSkills.leadership,
			precent: 57
		},
		{
			id: 5,
			name: EnumSkills.resourcefulness,
			precent: 85
		},
		{
			id: 6,
			name: EnumSkills.socialization,
			precent: 64
		}
	]
};

export default svenAronsson;
