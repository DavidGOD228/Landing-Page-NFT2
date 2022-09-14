import Dot from "../../common/Dot/Dot"
import Paragraph from "../../common/Paragraph/Paragraph"

import classes from './styles.module.scss';

import One from '../../../assets/images/one.svg'
import Two from '../../../assets/images/two.svg'

import MihoMorph from '../../../assets/images/miho-morph.png'
import MihoID from '../../../assets/images/miho-id.png'
import HenriMorph from '../../../assets/images/henri-morph.png'
import HenriID from '../../../assets/images/henri-id.png'

export default function TypesCards() {
  return (
    <div className={classes.containerTypesCards}>
      <div className={classes.morphBlock}>
        <img className={classes.mihoMainImage} src={MihoMorph} alt=""/>

        <div className={classes.classiqueContent}>
          <p className={classes.classiqueParagraph}>
            <img className={classes.classiqueBorder} src={One} alt=""/>
            <h4 className={classes.title}>CLASSIQUE</h4>
          </p>
          <Paragraph className={classes.mihoText}>
            Metamorph è un avventura dinamica giocabile in terza persona di genere life simulator
            ambientato nel mondo virtuale Fata Morgana<Dot/>
          </Paragraph>
          <img className={classes.idImage} src={MihoID} alt=""/>
        </div>
      </div>

      <div className={`${classes.morphBlock} ${classes.eternalBlock}`}>
        <div className={classes.eternalContent}>
          <p className={classes.eternalParagraph}>
            <img className={classes.eternalBorder} src={Two} alt=""/>
            <h4 className={`${classes.title} ${classes.eternalTitle}`}>ETERNAL</h4>
          </p>
          <Paragraph className={classes.henriText}>
            Metamorph è un avventura dinamica giocabile in terza persona di genere life simulator
            ambientato nel mondo virtuale Fata Morgana<Dot/>
          </Paragraph>
          <img className={classes.idImage} src={HenriID} alt=""/>
        </div>
        <img src={HenriMorph} alt=""/>
      </div> 
    </div>
    
  )
}
