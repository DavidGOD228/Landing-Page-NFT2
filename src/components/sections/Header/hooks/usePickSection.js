import useGetCurrentScroll from 'hooks/useGetCurrentScroll';
import { useEffect, useState } from 'react'
import getPositionsSections from './../helper/getPositionsSections';
import getActiveSection from './../helper/getActiveSection';

export default function usePickSection() {
  const { scrollPosition } = useGetCurrentScroll();
  const [positionSections, setPositionSections] = useState({});
  const [activeSection, setActiveSection] = useState('');

  /**
   * @info
   * init positions of sections
   */
	useEffect(() => {
    if(document.readyState === 'complete') {
      /**
       * @info
       * take them from header
       * it is anchors
       */
       const ids = ['game', 'features', 'fataMorgana', 'marketplace', 'morphID', 'roadmap'];
       const positionsData = getPositionsSections(ids);
 
       setPositionSections(s => ({
         ...s,
         ...positionsData
       }));
    }
	}, [document.readyState]);

  /**
   * @info
   * listener
   * when you should turn another section
   */
  useEffect(() => {
    const checkSection = () => {
      const activeSectionId = getActiveSection(scrollPosition, positionSections);
      if(activeSectionId) setActiveSection(activeSectionId);
    }

    document.addEventListener('scroll', checkSection);
    return () => {
      document.removeEventListener('scroll', checkSection);
    }
    
	}, [scrollPosition, positionSections]);

  return { activeSection }
}
