import {GlobalContainer, Paragraph} from 'components';

import classes from './styles.module.scss';

import first from 'assets/images/first.svg';
import second from 'assets/images/second.svg';

import MihoMorph from 'assets/images/morphs/miho-ikuta/miho-morph-presentation.png';
import MihoMorphMobile from 'assets/images/miho-morph.png';
import MihoID from 'assets/video/white_card.video.mp4';
import HenriMorph from 'assets/images/morphs/henrik-hail/henrik-hail-presentation.png';
import HenriMorphDesktop from 'assets/images/henri-morph.png';
import HenriID from 'assets/video/green_card.video.mp4';
import {useWindowWidth} from 'hooks/useWindowWidth';
import {morphIDText} from 'data/morphID/text';

export function TypesCards() {
  const isDesktop = useWindowWidth(1024);
  return (
    <div className={classes.wrapper}>
      <GlobalContainer>
        <div className={classes.containerTypesCards}>
          <div className={classes.morphBlock}>
            <img
              className={classes.mihoMainImage}
              src={isDesktop ? MihoMorph : MihoMorphMobile}
              alt='miho'
            />

            <div className={classes.contentBlock}>
              <h4 className={classes.classiqueParagraph}>
                <img
                  className={classes.classiqueBorder}
                  src={first}
                  alt='classique'
                />
                <p className={classes.title}>CLASSIQUE</p>
              </h4>
              <Paragraph className={`${classes.descr} ${classes.mihoText}`}>
                {isDesktop
                  ? morphIDText.classiqueDesktop
                  : morphIDText.classiqueMobile}
              </Paragraph>
              <video src={MihoID}
                     className={classes.idImage}
                     autoPlay
                     loop
                     muted/>
            </div>
          </div>

          <div className={`${classes.morphBlock} ${classes.eternalBlock}`}>
            <div className={classes.contentBlock}>
              <h4 className={classes.eternalParagraph}>
                <img
                  className={classes.eternalBorder}
                  src={second}
                  alt='eternal border'
                />
                <p className={`${classes.title} ${classes.eternalTitle}`}>
                  ETERNAL
                </p>
              </h4>
              <Paragraph className={`${classes.descr} ${classes.henriText}`}>
                {isDesktop
                  ? morphIDText.eternalDesktop
                  : morphIDText.eternalMobile}
              </Paragraph>
              <video
                className={`${classes.idImage} ${classes.idImageHenri}`}
                src={HenriID}
								autoPlay
								loop
								muted
              />
            </div>

            <img
              className={classes.henriMainImage}
              src={isDesktop ? HenriMorph : HenriMorphDesktop}
              alt='henri morph'
            />
          </div>
        </div>
      </GlobalContainer>
    </div>
  );
}
