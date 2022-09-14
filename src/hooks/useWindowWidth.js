import {useEffect, useState} from 'react'

export const useWindowWidth = (width) => {
  const [windowWidth, setWindowWidth] = useState(undefined);
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowWidth(
        window.innerWidth
      )
    }

    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowWidth >= width;
}
