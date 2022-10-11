import {
  Routes,
  Route,
} from "react-router-dom";

import {
  Terms,
  Policy,
  HomePage
} from 'components';


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/policy" element={<Policy/>}/>
      </Routes>
    </>
  );
}

export default App;
