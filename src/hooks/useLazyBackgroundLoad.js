import { useState, useEffect } from 'react';
import useScrollPosition from '@react-hook/window-scroll'

const offsetStartLazyload = 150; //in px

// source: https://stackoverflow.com/questions/51607043/how-to-lazy-load-the-background-image-inside-the-inline-style-property-react
export const useLazyBackgroundLoad = (src, ref) => {
	const [sourceLoaded, setSourceLoaded] = useState(null);
  const currScrollY = useScrollPosition(60);

	useEffect(() => {
    if(!ref.current || !src) return;

    const heightRef = ref.current.scrollHeight;
    const positionfRef = ref.current.offsetTop;
    const startCordinatorsRef = positionfRef - heightRef;

    if(currScrollY + offsetStartLazyload > startCordinatorsRef) {
      const img = new Image();
      img.src = src;
      img.onload = () => setSourceLoaded(src);
    };
	}, [src, ref, currScrollY]);

	return sourceLoaded;
};