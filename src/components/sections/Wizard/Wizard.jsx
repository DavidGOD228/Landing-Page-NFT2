import React from 'react'

import WhiteTitle from './components/WhiteTitle/WhiteTitle'
import Member from './components/Member/Member'
import Dot from '../../common/Dot/Dot'

import Nazario from '../../../assets/images/nazario.png'
import Jonas from '../../../assets/images/jonas.png'

import classes from './style.module.scss'

const members = [
  {
    name: 'Nazario Vekhr',
    position: 'Co-Founder & CEO',
    image: Nazario,
    text: <p className={classes.text}>The game offers 2 experience scenarios based on the starting Morph ID card a player chooses<Dot/></p>,
    top: 7
  },
  {
    name: 'Jonas Weitzel',
    position: 'Co-Founder & CTO',
    image: Jonas,
    text: <p className={classes.text}>The game offers 2 experience scenarios based on the starting Morph ID card a player chooses<Dot/></p>
  },
]

const Wizard = () => {
  return (
    <>
      <div className={classes.titleWrapper}>
        <WhiteTitle/>
      </div>
      <div className={classes.members}>
        {
          members.map(({name, position, image, text, top}) => <Member style={top} name={name}
                                                                 position={position}
                                                                 image={image} text={text}/>)
        }
      </div>
    </>
  )
}

export default Wizard
