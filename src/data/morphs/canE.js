import EnumSkills from './EnumSkills';

const nameFolder = 'can-e';

const canE = {
	id: 902,
	cardImg: `${nameFolder}/card-can-e.png`,
	bodyImg: "https://res.cloudinary.com/dbbqyqt75/image/upload/v1666085732/morphs/body-can-e_vuza9q.png",
	bodyMobileImg: `${nameFolder}/mobile-can-e.png`,
	fingerPrintImg: `${nameFolder}/fingerprint-can-e.svg`,
	name: 'Can E',
	type: 'classique',
	code: 'U1201JXI512XDYPAZ1ZF21',
	birth: '10.07.1994',
	location: 'Los Angeles | United States',
	parametrs: '1.74 cm, 69 kg',
	skills: ['shurikens.png', 'ruler.png', 'eye-2.png', 'puzzle.png'],
	attributes: [
		{
			id: 1,
			name: EnumSkills.logicMathematics,
			precent: 83
		},
		{
			id: 2,
			name: EnumSkills.creativity,
			precent: 43
		},
		{
			id: 3,
			name: EnumSkills.athletics,
			precent: 69
		},
		{
			id: 4,
			name: EnumSkills.leadership,
			precent: 79
		},
		{
			id: 5,
			name: EnumSkills.resourcefulness,
			precent: 92
		},
		{
			id: 6,
			name: EnumSkills.socialization,
			precent: 73
		}
	]
};

export default canE;
