import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import Title from '../../common/Title/Title'
import GreenText from '../../common/GreenText/GreenText'
import Paragraph from '../../common/Paragraph/Paragraph'
import AccordionWithIcon from '../../common/AccordionWithIcon/AccordionWithIcon'
import ColumnItem from './components/ColumnItem/ColumnItem'

import { useWindowWidth } from '../../../hooks/useWindowWidth'

import classes from './style.module.scss'

import { accordionData, tableData } from './data'

const LikeHuman = () => {
  const isDesktop = useWindowWidth(1024)

  return (
    <div className={classes.container}>
      <div className={classes.titleWrapper}>
        {
          isDesktop &&
          <Paragraph className={classes.paragraph}>Metamorph is an open-world exploration, NFT
            creature collector and life simulator game built on the Polygon Blockchain, releasing on IOS and
            Android in 2023. Play-to-earn in a graphically-rich sci-fi adventure and life builder that
            allows you to feel the life inside the game.
          </Paragraph>
        }
        <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
          <Title classname={classes.title}>
            {
              isDesktop ? <>it’s just like <br/> <GreenText> a human</GreenText></> : <> it’s just
                like a <GreenText>human</GreenText></>
            }
          </Title>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
        {
          isDesktop ? <div className={classes.table}>
            {
              tableData.map(({id, icon, title, subtitle}) => <ColumnItem key={id} icon={icon} title={title} subtitle={subtitle}/>)
            }
          </div> : <div className={classes.content}>
            <Paragraph className={classes.paragraph}>Metamorph is an open-world exploration, NFT
              creature collector and life simulator game built on the Polygon Blockchain, releasing on IOS and
              Android in 2023. Play-to-earn in a graphically-rich sci-fi adventure and life
              builder that allows you to feel the life inside the game.
            </Paragraph>
            <div className={classes.accordionContainer}>
              {
                accordionData.map(({id, icon, title, subtitle}) => <AccordionWithIcon key={id} icon={icon} title={title} subtitle={subtitle}/>)
              }
            </div>
          </div>
        }
      </ScrollAnimation>
    </div>
  )
}

export default LikeHuman
