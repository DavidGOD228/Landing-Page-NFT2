import React from 'react'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'

import personImage from '../../../assets/images/your-morph.png'

import bar54Image from '../../../assets/images/54.png'
import bar31Image from '../../../assets/images/31.png'
import bar87Image from '../../../assets/images/87.png'
import bar73Image from '../../../assets/images/73.png'
import bar91Image from '../../../assets/images/91.png'
import bar67Image from '../../../assets/images/67.png'

import Card1 from '../../../assets/images/unique-card1.png'
import Card2 from '../../../assets/images/unique-card2.png'
import Card3 from '../../../assets/images/unique-card3.png'
import Card4 from '../../../assets/images/unique-card4.png'
import Card5 from '../../../assets/images/unique-card5.png'
import Card6 from '../../../assets/images/unique-card6.png'

import Skill1 from '../../../assets/images/skill-1.svg'
import Skill2 from '../../../assets/images/skill-2.svg'
import Skill3 from '../../../assets/images/skill-3.svg'
import Skill4 from '../../../assets/images/skill-4.svg'

import classes from './style.module.scss'

const barData = [
  {
    title: 'Logic/mathematics',
    image: bar54Image,
    percentage: '54%'
  },
  {
    title: 'Creativity',
    image: bar31Image,
    percentage: '31%'
  },
  {
    title: 'Athletics',
    image: bar87Image,
    percentage: '87%'
  },
  {
    title: 'Leadership',
    image: bar73Image,
    percentage: '73%'
  },
  {
    title: 'Resourcefulness',
    image: bar91Image,
    percentage: '91%'
  },
  {
    title: 'Socialization',
    image: bar67Image,
    percentage: '67%'
  }
]

const YourMorph = () => {

  return (
    <div className={classes.container}>
      <div style={{padding: "0 22px"}}>
        <Title>
          <GreenText>Unique CyberDNA </GreenText>
          of your Morph
        </Title>
      </div>
      <div className={classes.cards}>
        <img src={Card1} alt=""/>
        <img src={Card2} alt=""/>
        <img src={Card3} alt=""/>
        <img src={Card4} alt=""/>
        <img src={Card5} alt=""/>
        <img src={Card6} alt=""/>
      </div>
      <div className={classes.person}>
        <div>
          <img className={classes.image} src={personImage} alt=""/>
        </div>
        <div className={classes.about}>
          <div>
            <div className={classes.aboutPerson}>
              <h5 className={classes.number}>
                <span>#153</span>
              </h5>
              <div className={classes.bioContainer}>
                <h3 className={classes.bioTitle}>BIO</h3>
                <span className={classes.bioLine}/>
              </div>
              <div className={classes.column}>
                <h3 className={classes.title}>
                  Name
                </h3>
                <h4 className={classes.name}>
                  Frank Murphy
                </h4>
                <div className={classes.numeric}>
                  S2144AAXE772LSAWFZ3ZQ0
                </div>
              </div>
            </div>
          </div>
          <div className={classes.location}>
            <h3 className={classes.title}>
              Location
            </h3>
            <h4 className={classes.description}>
              Los Angeles
            </h4>
            <h4 className={classes.description}>
              United States
            </h4>
          </div>
          <div className={classes.birth}>
            <h5 className={classes.title}>Birth</h5>
            <h4 className={classes.description}>
              23.04.1995
            </h4>
          </div>
          <div className={classes.parameters}>
            <h5 className={classes.title}>Parametres</h5>
            <div className={classes.row}>
              <h4 className={classes.description}>
                1.86 cm
              </h4>
              <h4 style={{marginLeft: 16}} className={classes.description}>
                85 kg
              </h4>
            </div>
          </div>
          <div className={classes.skill}>
            <h5 className={classes.title}>Traits & Skill</h5>
            <div className={classes.skillsContainer}>
              <img src={Skill1} alt=""/>
              <img src={Skill2} alt=""/>
              <img src={Skill3} alt=""/>
              <img src={Skill4} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.attributesContainer}>
        <h3 className={classes.attributesTitle}>
          Attributes
        </h3>
        <span className={classes.bioLine}/>
      </div>
      <div className={classes.barWrap}>
        {
          barData.map(item => (
            <div key={item.title}>
              <h6 className={classes.barTitle}>{item.title}</h6>
              <div className={classes.barProgress}>
                <img className={classes.barImage} src={item.image} alt=""/>
                <span className={classes.barPercentage}>{item.percentage}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default YourMorph

