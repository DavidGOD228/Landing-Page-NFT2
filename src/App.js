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

function App() {
	const isDesktop = useWindowWidth(media.desktop);

  const [isLoading, setIsloading] = useState(true);

 /*  useEffect(() => {
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

  }, [isLoading]); */

	return (
		<>
			{/* {isLoading && <Loader setIsloading={setIsloading} />} */}
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
			{!isDesktop && <Foto />}
			<CombinedGame />
			<Footer />
		</>
	);
}

export default App;
