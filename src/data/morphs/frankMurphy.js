import EnumSkills from './EnumSkills';

const nameFolder = 'frank-murphy';

const frankMurphy = {
	id: 153,
	cardImg: `${nameFolder}/card-frank-murphy.png`,
	bodyImg: `${nameFolder}/body-frank-murphy.png`,
	bodyMobileImg: `${nameFolder}/mobile-frank-murphy.png`,
	fingerPrintImg: `${nameFolder}/fingerprint-frank-murphy.svg`,
	name: 'Frank Murphy',
	type: 'classique',
	code: 'S2144AAXE772LSAWFZ3ZQ0',
	birth: '23.04.1995',
	location: 'Atlanta | United States',
	parametrs: '1.86 cm, 85 kg',
	skills: ['strength.png', 'dragons.png', 'skull.png', 'human.png'],
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

export default frankMurphy;
