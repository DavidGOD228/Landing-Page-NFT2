import {useEffect} from "react";

export const useResetScroll = () => {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  },[])
}
