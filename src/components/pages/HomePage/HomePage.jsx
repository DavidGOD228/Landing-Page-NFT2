import { useEffect, useState } from 'react';
import {
  TopBlock,
  FataMorgana,
  Footer,
  FirstLiveSimulator,
  LikeHuman,
  Freedom,
  Earn,
  YourMorph,
  Personalize,
  MorphId,
  MorphsUnique,
  Wizard,
  Foto,
  CombinedGame,
  Roadmap,
  TypesCards,
  Privacy,
  Loader,
} from 'components';

import { useWindowWidth } from 'hooks/useWindowWidth';
import { media } from 'utils/media';
import {useLocation} from "react-router-dom";

export const HomePage = () => {
  const isDesktop = useWindowWidth(media.desktop);
  const isTablet = useWindowWidth(media.tablet);

  const [isLoading, setIsloading] = useState(true);

  const { pathname, hash, key } = useLocation();
  useEffect(() => {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
  }, [pathname, hash, key]);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    document.body.style.overflowY = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.pointerEvents = 'none';

    if(!isLoading) {
      document.body.style.pointerEvents = 'auto';
      document.body.style.overflowY = 'auto';
      document.body.style.height = 'auto';
    }
  }, [isLoading]);
  return (
    <>
      {isLoading && <Loader setIsloading={setIsloading} />}
      <TopBlock />
      <FirstLiveSimulator />
      <LikeHuman />
      {!isDesktop && <Privacy />}
      <FataMorgana />
      <Freedom />
      <Personalize />
      <Earn />
      <MorphId />
      <TypesCards />
      <YourMorph />
      <MorphsUnique />
      <Roadmap />
      <Wizard />
      {!isTablet && <Foto />}
      <CombinedGame />
      <Footer />
    </>
  );
};

