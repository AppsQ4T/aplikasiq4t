import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Tilawah from "./pages/Tilawah/Tilawah";
import Asas from "./pages/Tilawah/Asas/Asas";
import Pertengahan from "./pages/Tilawah/Pertengahan/Pertengahan";
import Lanjutan from "./pages/Tilawah/Lanjutan/Lanjutan";
import Video from "./pages/Video/Video";
import Audio from "./pages/Audio/Audio";
import Enota from "./pages/Enota/Enota";
import Game from "./pages/Game/Game";
import DragGame from "./pages/Game/DragGame";
import Result   from "./pages/Game/Result";
import About from "./pages/About/About";
import Help from "./pages/Help/Help";
import AskExpert from "./pages/AskExpert/AskExpert";
import GameP from "./pages/Game/GameP";
import DragGameP from "./pages/Game/DragGameP";
import GameL from "./pages/Game/GameL";
import ResultP from "./pages/Game/ResultP";
import ResultL from "./pages/Game/ResultL";


function App() {

  return (

    <BrowserRouter>

<Routes>

  <Route path="/" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/tilawah" element={<Tilawah />} />
  <Route path="/tilawah/asas" element={<Asas />} />
  <Route path="/tilawah/pertengahan" element={<Pertengahan />} />
  <Route path="/tilawah/lanjutan" element={<Lanjutan />} />
  <Route path="/video" element={<Video />} />
  <Route path="/audio" element={<Audio />} />
  <Route path="/enota" element={<Enota />} />
  <Route path="/game" element={<Game />} />
<Route path="draggame"  element={<DragGame />} />
<Route path="/result"    element={<Result />} />
<Route path="/about" element={<About />} />
<Route path="/help" element={<Help />} />
<Route path="/askexpert" element={<AskExpert />} />
<Route path="/gameP" element={<GameP />} />
<Route path="/draggameP" element={<DragGameP />} />
<Route path="/gameL" element={<GameL />} />
<Route path="/resultP" element={<ResultP />} />
<Route path="/resultL" element={<ResultL />} />


</Routes>
    </BrowserRouter>

  );

}

export default App;
