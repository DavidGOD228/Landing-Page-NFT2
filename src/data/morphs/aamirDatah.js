import EnumSkills from './EnumSkills';

const nameFolder = 'aamir-datah';

const aamirDatah = {
	id: 2933,
	cardImg: `${nameFolder}/card-aamir-datah.png`,
	bodyImg: `https://res.cloudinary.com/dbbqyqt75/image/upload/v1667402613/morphs/Aamir_Datah_rajwhe.png`,
	bodyMobileImg: `${nameFolder}/mobile-aamir-datah.png`,
	fingerPrintImg: `${nameFolder}/fingerprint-aamir-datah.svg`,
	name: 'Aamir Datah',
	type: 'classique',
	code: 'X1012CRVA472LSCWFF5ZX5',
	birth: '08.10.2001',
	city: 'Colombo',
	country: 'Sri Lanka',
	parametrs: '1.74 cm 67 kg',
	skills: ['skill-1.png', 'skill-2.png', 'skill-3.png', 'skill-4.png'],
	attributes: [
		{
			id: 1,
			name: EnumSkills.logicMathematics,
			precent: 77
		},
		{
			id: 2,
			name: EnumSkills.creativity,
			precent: 77
		},
		{
			id: 3,
			name: EnumSkills.athletics,
			precent: 54
		},
		{
			id: 4,
			name: EnumSkills.leadership,
			precent: 54
		},
		{
			id: 5,
			name: EnumSkills.resourcefulness,
			precent: 86
		},
		{
			id: 6,
			name: EnumSkills.socialization,
			precent: 86
		}
	]
};

export default aamirDatah;
