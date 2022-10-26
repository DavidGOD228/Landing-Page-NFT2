import useGetCurrentScroll from 'hooks/useGetCurrentScroll';
import { useEffect, useState } from 'react'
import getPositionsSections from './../helper/getPositionsSections';

export default function usePickSection() {
  const { scrollPosition } = useGetCurrentScroll();
  const [positionSections, setPositionSections] = useState({});
  const [activeSection, setActiveSection] = useState('');

  /**
   * @info
   * init positions of sections
   */
	useEffect(() => {
    window.onload = function() {
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
	}, []);

  /**
   * @info
   * listener
   * when you should turn another section
   */
  useEffect(() => {
    const checkSection = () => {
      // console.log(scrollPosition)
      for(const section in positionSections) {
        const start = positionSections[section].start;
        const finish = positionSections[section].finish;
        if(scrollPosition > start && scrollPosition < finish) {
          setActiveSection(positionSections[section].id)
        }
      }
    }

    document.addEventListener('scroll', checkSection);
    return () => {
      document.removeEventListener('scroll', checkSection);
    }
    
	}, [scrollPosition, positionSections]);

  return { activeSection }
}
