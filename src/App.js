import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Stopwatch from "./Components/Stopwatch";


function App() {
  return (
    <>

      <div class="w-screen h-screen bg-[#1E2140] -z- ">
        <Stopwatch />
      </div>

    </>
  );
}

export default App;
