import Dot from '../../common/Dot/Dot'

import line3 from '../../../assets/images/line-3.png'
import line4 from '../../../assets/images/line-4.png'
import line5 from '../../../assets/images/line-5.png'
import line6 from '../../../assets/images/line-6.png'
import line7 from '../../../assets/images/line-7.png'
import line8 from '../../../assets/images/line-8.png'
import line9 from '../../../assets/images/line-9.png'
import line10 from '../../../assets/images/line-10.png'
import line11 from '../../../assets/images/line-11.png'
import line12 from '../../../assets/images/line-12.png'
import line13 from '../../../assets/images/line-13.png'


import ThreeZippers from '../../../assets/images/threeZippers.svg'
import CoinFlip from '../../../assets/images/coinFlip.svg'
import Wolf from '../../../assets/images/wolf.svg'
import TwoPeople from '../../../assets/images/twoPeople.svg'
import BigMan from '../../../assets/images/bigMan.svg'
import Dragons from '../../../assets/images/dragons.svg'
import Skull from '../../../assets/images/skullSkill.svg'
import Anonymous from '../../../assets/images/anonymous.svg'
import Toy from '../../../assets/images/toy.svg'
import Zipper from '../../../assets/images/zipper.svg'
import Woman from '../../../assets/images/woman.svg'
import CrossMan from '../../../assets/images/crossMan.svg'
import Pearl from '../../../assets/images/pearl.svg'
import PrayingMan from '../../../assets/images/prayingMan.svg'
import Marionette from '../../../assets/images/marionette.svg'
import ThreeLines from '../../../assets/images/threeLines.svg'
import Eye from '../../../assets/images/eye.svg'

import AamirImage from '../../../assets/images/aamir.png'
import FrankImage from '../../../assets/images/frank.png'
import ThereseImage from '../../../assets/images/therese.png'
import SvenImage from '../../../assets/images/sven.png'

export const morphsData = [
  {
    id: 2933,
    name: 'Aamir Datah',
    code: 'X1012CRVA472LSCWFF5ZX5',
    city: 'Colombo',
    country: 'Sri Lanka',
    dateOfBirth: <>08<Dot/>10<Dot/>2001</>,
    height: <>1<Dot/>74 cm</>,
    weight: 67,
    skills: <>
      <img src={ThreeZippers} alt=""/>
      <img src={CoinFlip} alt=""/>
      <img src={Wolf} alt=""/>
      <img src={TwoPeople} alt=""/>
    </>,
    image: AamirImage,
    attributes: [
      {
        title: 'Logic/mathematics',
        image: line10,
        percentage: '71%'
      },
      {
        title: 'Creativity',
        image: line9,
        percentage: '64%'
      },
      {
        title: 'Athletics',
        image: line5,
        percentage: '31%'
      },
      {
        title: 'Leadership',
        image: line4,
        percentage: '22%'
      },
      {
        title: 'Resourcefulness',
        image: line11,
        percentage: '83%'
      },
      {
        title: 'Socialization',
        image: line9,
        percentage: '62%'
      }
    ],
  },
  {
    id: 153,
    name: 'Frank Murphy',
    code: 'S2144AAXE772LSAWFZ3ZQ0',
    city: 'Los Angeles',
    country: 'United States',
    dateOfBirth: <>23<Dot/>04<Dot/>1995</>,
    height: <>1<Dot/>86 cm</>,
    weight: 85,
    skills: <>
      <img src={BigMan} alt=""/>
      <img src={Dragons} alt=""/>
      <img src={Skull} alt=""/>
      <img src={Anonymous} alt=""/>
    </>,
    image: FrankImage,
    attributes: [
      {
        title: 'Logic/mathematics',
        image: line9,
        percentage: '61%'
      },
      {
        title: 'Creativity',
        image: line7,
        percentage: '46%'
      },
      {
        title: 'Athletics',
        image: line12,
        percentage: '88%'
      },
      {
        title: 'Leadership',
        image: line11,
        percentage: '79%'
      },
      {
        title: 'Resourcefulness',
        image: line9,
        percentage: '65%'
      },
      {
        title: 'Socialization',
        image: line10,
        percentage: '77%'
      }
    ],
  },
  {
    id: 7077,
    name: 'Therese Gadjigo',
    code: 'Y0144AAXE272LSAWFY3TQ8',
    city: 'Dakar',
    country: 'Senegal',
    dateOfBirth: <>11<Dot/>07<Dot/>2000</>,
    height: <>1<Dot/>82 cm</>,
    weight: 55,
    skills: <>
      <img src={Toy} alt=""/>
      <img src={Zipper} alt=""/>
      <img src={Woman} alt=""/>
      <img src={CrossMan} alt=""/>
      <img src={Pearl} alt=""/>
    </>,
    image: ThereseImage,
    attributes: [
      {
        title: 'Logic/mathematics',
        image: line9,
        percentage: '66%'
      },
      {
        title: 'Creativity',
        image: line12,
        percentage: '89%'
      },
      {
        title: 'Athletics',
        image: line12,
        percentage: '83%'
      },
      {
        title: 'Leadership',
        image: line10,
        percentage: '75%'
      },
      {
        title: 'Resourcefulness',
        image: line12,
        percentage: '81%'
      },
      {
        title: 'Socialization',
        image: line12,
        percentage: '80%'
      }
    ],
  },
  {
    id: 365,
    name: 'Sven Aronsson',
    code: 'F2124AJXE772LSAWFZ3ZF9',
    city: 'Copenhagen',
    country: 'Denmark',
    dateOfBirth: <>28<Dot/>02<Dot/>1999</>,
    height: <>1<Dot/>83 cm</>,
    weight: 78,
    skills: <>
      <img src={PrayingMan} alt=""/>
      <img src={Marionette} alt=""/>
      <img src={ThreeLines} alt=""/>
      <img src={Eye} alt=""/>
    </>,
    image: SvenImage,
    attributes: [
      {
        title: 'Logic/mathematics',
        image: line13,
        percentage: '91%'
      },
      {
        title: 'Creativity',
        image: line3,
        percentage: '20%'
      },
      {
        title: 'Athletics',
        image: line6,
        percentage: '43%'
      },
      {
        title: 'Leadership',
        image: line7,
        percentage: '57%'
      },
      {
        title: 'Resourcefulness',
        image: line12,
        percentage: '85%'
      },
      {
        title: 'Socialization',
        image: line8,
        percentage: '64%'
      }
    ],
  },
]
