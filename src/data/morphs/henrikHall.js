import EnumSkills from './EnumSkills';

const nameFolder = 'henrik-hail';

const henrikHall = {
	id: 995,
	cardImg: `${nameFolder}/card-henrik-hail.png`,
	bodyImg: "https://res.cloudinary.com/dbbqyqt75/image/upload/v1667402614/morphs/Henrik_Hall_rhnpr9.png",
	bodyMobileImg: `${nameFolder}/mobile-henrik-hail.png`,
	fingerPrintImg: `${nameFolder}/fingerprint-henrik-hail.svg`,
	name: 'Henrik Hall',
	type: 'eternal',
	code: 'X1101AJXE572XJOPAZ1ZF5',
	birth: '20.05.1998',
	city: 'Los Angeles',
	country: 'United States',
	parametrs: '1.79 cm 76 kg',
	skills: ['candle.png', 'parrot.png', 'jump.png', 'mask.png', 'silence.png'],
	attributes: [
		{
			id: 1,
			name: EnumSkills.logicMathematics,
			precent: 72
		},
		{
			id: 2,
			name: EnumSkills.creativity,
			precent: 92
		},
		{
			id: 3,
			name: EnumSkills.athletics,
			precent: 70
		},
		{
			id: 4,
			name: EnumSkills.leadership,
			precent: 75
		},
		{
			id: 5,
			name: EnumSkills.resourcefulness,
			precent: 84
		},
		{
			id: 6,
			name: EnumSkills.socialization,
			precent: 81
		}
	]
};

export default henrikHall;
