import EnumSkills from './EnumSkills';

const nameFolder = 'omar-trejo';

const omarTrejo = {
	id: 4102,
	cardImg: `${nameFolder}/card-omar-trejo.png`,
	bodyImg: `${nameFolder}/body-omar-trejo.png`,
	bodyMobileImg: `${nameFolder}/mobile-omar-trejo.png`,
	fingerPrintImg: `${nameFolder}/fingerprint-omar-trejo.svg`,
	name: 'Omar Trejo',
	type: 'classique',
	code: 'H9577LYI310LJHWEQ1SS6W',
	birth: '23.12.1990',
	location: 'León | Mexico',
	parametrs: '1.83 cm, 79 kg',
	skills: ['cap.png', 'drops.png', 'legs.png', 'handcuffs.png'],
	attributes: [
		{
			id: 1,
			name: EnumSkills.logicMathematics,
			precent: 66
		},
		{
			id: 2,
			name: EnumSkills.creativity,
			precent: 69
		},
		{
			id: 3,
			name: EnumSkills.athletics,
			precent: 82
		},
		{
			id: 4,
			name: EnumSkills.leadership,
			precent: 85
		},
		{
			id: 5,
			name: EnumSkills.resourcefulness,
			precent: 76
		},
		{
			id: 6,
			name: EnumSkills.socialization,
			precent: 90
		}
	]
};

export default omarTrejo;
