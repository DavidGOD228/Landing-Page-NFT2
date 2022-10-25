import {useEffect, useState} from "react";
import {
  Routes,
  Route, useLocation,
} from "react-router-dom";

import {
  Terms,
  Policy,
  HomePage, Loader
} from 'components';


function App() {
  const [isLoading, setIsloading] = useState(false);

  const { hash } = useLocation();

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.pointerEvents = 'none';

    if(!isLoading) {
      document.body.style.pointerEvents = 'auto';
      document.body.style.overflowY = 'auto';
      document.body.style.height = 'auto';
    }
  }, [isLoading]);

  useEffect(() => {
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }, 0);
  }, [hash]);

  return (
    <>
      {isLoading && <Loader setIsloading={setIsloading}/> }
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/policy" element={<Policy/>}/>
        </Routes>
    </>
  );
}

export default App;
