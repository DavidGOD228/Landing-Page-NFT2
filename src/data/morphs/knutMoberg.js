import EnumSkills from './EnumSkills';

const nameFolder = 'knut-moberg';

const knutMoberg = {
	id: 3665,
	cardImg: `${nameFolder}/card-knut-moberg.png`,
	bodyImg: `${nameFolder}/body-knut-moberg.png`,
	bodyMobileImg: `${nameFolder}/mobile-knut-moberg.png`,
	fingerPrintImg: `${nameFolder}/fingerprint-knut-moberg.svg`,
	name: 'Knut Moberg',
	type: 'classique',
	code: 'Y8104AJXE572LSAZJZ3ZT3',
	birth: '02.09.1979',
	location: 'Dublin | Ireland',
	parametrs: '1.81 cm, 86 kg',
	skills: ['comet.png', 'shark.png', 'shield.png', 'anarchism.png'],
	attributes: [
		{
			id: 1,
			name: EnumSkills.logicMathematics,
			precent: 32
		},
		{
			id: 2,
			name: EnumSkills.creativity,
			precent: 58
		},
		{
			id: 3,
			name: EnumSkills.athletics,
			precent: 69
		},
		{
			id: 4,
			name: EnumSkills.leadership,
			precent: 89
		},
		{
			id: 5,
			name: EnumSkills.resourcefulness,
			precent: 75
		},
		{
			id: 6,
			name: EnumSkills.socialization,
			precent: 86
		}
	]
};

export default knutMoberg;
