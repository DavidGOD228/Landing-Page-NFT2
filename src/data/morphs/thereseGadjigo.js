import EnumSkills from './EnumSkills';

const nameFolder = 'therese-gadjigo';

const thereseGadjigo = {
	id: 7077,
	cardImg: `${nameFolder}/card-therese-gadjigo.png`,
	bodyImg: `${nameFolder}/body-therese-gadjigo.png`,
	bodyMobileImg: `${nameFolder}/mobile-therese-gadjigo.png`,
	fingerPrintImg: `${nameFolder}/fingerprint-therese-gadjigo.svg`,
	name: 'Therese Gadjigo',
	type: 'eternal',
	code: 'Y0144AAXE272LSAWFY3TQ8',
	birth: '11.07.2000',
	location: 'Dakar | Senegal',
	parametrs: '1.82 cm, 55 kg',
	skills: ['decoration.png', 'vector.png', 'woman.png', 'cross.png', 'pearl.png'],
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

export default thereseGadjigo;
