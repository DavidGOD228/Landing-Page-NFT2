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
  Wizard,
  Foto,
  CombinedGame,
  Roadmap,
  TypesCards,
  Privacy,
  FirstLiveSimulatorDesktop,
  Private
} from 'components';

import { useWindowWidth } from 'hooks/useWindowWidth';
import { media } from 'utils/media';

export const HomePage = () => {
  const isDesktop = useWindowWidth(media.desktop);
  const isTablet = useWindowWidth(media.tablet);

  return (
    <>
      <TopBlock />
      <FirstLiveSimulator />
      {isDesktop && <FirstLiveSimulatorDesktop />}
      <LikeHuman />
      {!isDesktop && <Privacy />}
      <FataMorgana />
      <Freedom />
      <Personalize />
      <Earn />
      <MorphId/>
      <TypesCards />
      <YourMorph />
      {!isDesktop && <Private />}
      <Roadmap />
      <Wizard />
      {!isTablet && <Foto />}
      <CombinedGame />
      <Footer />
    </>
  );
};

