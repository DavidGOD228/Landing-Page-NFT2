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
  Loader
} from 'components';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { media } from 'utils/media';
import { AnimatePresence } from 'framer-motion'

function App() {
	const isDesktop = useWindowWidth(media.desktop);

  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    window.offsetTop = 0;

    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
      setIsloading(false);
    }, 5000);

  }, [isLoading])


	return (
		<>
      {isLoading && <Loader />}
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
