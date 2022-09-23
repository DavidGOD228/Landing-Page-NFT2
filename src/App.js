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
  Privacy
} from 'components';
import {useWindowWidth} from 'hooks/useWindowWidth';
import {media} from 'utils/media';

function App() {
  const isDesktop = useWindowWidth(media.desktop);

  return (
    <>
      <TopBlock/>
      <FirstLiveSimulator/>
      <LikeHuman/>
      {
        !isDesktop && <Privacy/>
      }
      <FataMorgana/>
      <Freedom/>
      <Personalize/>
      <Earn/>
      <MorphId/>
      <TypesCards/>
      <YourMorph/>
      <MorphsUnique/>
      <Roadmap/>
      <Wizard/>
      {!isDesktop && <Foto/>}
      <CombinedGame/>
      <Footer/>
    </>
  );
}

export default App;
