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
import Tajwid from "./pages/Tajwid/Tajwid";
import AsasTajwid from "./pages/Tajwid/AsasTajwid/AsasTajwid";
import PertengahanTajwid from "./pages/Tajwid/PertengahanTajwid/PertengahanTajwid";
import LanjutanTajwid from "./pages/Tajwid/LanjutanTajwid/LanjutanTajwid";
import Tahfiz from "./pages/Tahfiz/Tahfiz";
import AsasTahfiz from "./pages/Tahfiz/AsasTahfiz/AsasTahfiz";
import PertengahanTahfiz from "./pages/Tahfiz/PertengahanTahfiz/PertengahanTahfiz";
import LanjutanTahfiz from "./pages/Tahfiz/LanjutanTahfiz/LanjutanTahfiz";
import Tafsir from "./pages/Tafsir/Tafsir";
import AsasTafsir from "./pages/Tafsir/AsasTafsir/AsasTafsir";
import PertengahanTafsir from "./pages/Tafsir/PertengahanTafsir/PertengahanTafsir";
import LanjutanTafsir from "./pages/Tafsir/LanjutanTafsir/LanjutanTafsir";
import GameTajwid from "./pages/Game/GameTajwid";
import DragGameTajwid from "./pages/Game/DragGameTajwid";
import ResultTajwid from "./pages/Game/ResultTajwid";
import GamePTajwid from "./pages/Game/GamePTajwid";
import DragGamePTajwid from "./pages/Game/DragGamePTajwid";
import ResultPTajwid from "./pages/Game/ResultPTajwid";
import GameLTajwid from "./pages/Game/GameLTajwid";
import ResultLTajwid from "./pages/Game/ResultLTajwid";
import GameTahfiz from "./pages/Game/GameTahfiz";
import DragGameTahfiz from "./pages/Game/DragGameTahfiz";
import ResultTahfiz from "./pages/Game/ResultTahfiz";
import GamePTahfiz from "./pages/Game/GamePTahfiz";
import DragGamePTahfiz from "./pages/Game/DragGamePTahfiz";
import ResultPTahfiz from "./pages/Game/ResultPTahfiz";
import GameLTahfiz from "./pages/Game/GameLTahfiz";
import ResultLTahfiz from "./pages/Game/ResultLTahfiz";
import GameTafsir from "./pages/Game/GameTafsir";
import DragGameTafsir from "./pages/Game/DragGameTafsir";
import ResultTafsir from "./pages/Game/ResultTafsir";
import GamePTafsir from "./pages/Game/GamePTafsir";
import ResultPTafsir from "./pages/Game/ResultPTafsir";
import GameLTafsir from "./pages/Game/GameLTafsir";
import ResultLTafsir from "./pages/Game/ResultLTafsir";








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
<Route path="/draggame"  element={<DragGame />} />
<Route path="/result"    element={<Result />} />
<Route path="/about" element={<About />} />
<Route path="/help" element={<Help />} />
<Route path="/askexpert" element={<AskExpert />} />
<Route path="/gameP" element={<GameP />} />
<Route path="/draggameP" element={<DragGameP />} />
<Route path="/gameL" element={<GameL />} />
<Route path="/resultP" element={<ResultP />} />
<Route path="/resultL" element={<ResultL />} />
<Route path="/tajwid" element={<Tajwid />} />
<Route path="/tajwid/asas" element={<AsasTajwid />} />
<Route path="/tajwid/pertengahan" element={<PertengahanTajwid />} />
<Route path="/tajwid/lanjutan" element={<LanjutanTajwid />} />
<Route path="/tahfiz" element={<Tahfiz />} />
<Route path="/tahfiz/asas" element={<AsasTahfiz />} />
<Route path="/tahfiz/pertengahan" element={<PertengahanTahfiz />} />
<Route path="/tahfiz/lanjutan" element={<LanjutanTahfiz />} />
<Route path="/tafsir" element={<Tafsir />} />
<Route path="/tafsir/asas" element={<AsasTafsir />} />
<Route path="/tafsir/pertengahan" element={<PertengahanTafsir />} />
<Route path="/tafsir/lanjutan" element={<LanjutanTafsir />} />
<Route path="/gametajwid" element={<GameTajwid />} />
<Route path="/draggametajwid" element={<DragGameTajwid />} />
<Route path="/resulttajwid" element={<ResultTajwid />} />
<Route path="/gameptajwid" element={<GamePTajwid />} />
<Route path="/draggameptajwid" element={<DragGamePTajwid />} />
<Route path="/resultptajwid" element={<ResultPTajwid />} />
<Route path="/gameltajwid" element={<GameLTajwid />} />
<Route path="/resultltajwid" element={<ResultLTajwid />} />
<Route path="/gametahfiz" element={<GameTahfiz />} />
<Route path="/draggametahfiz" element={<DragGameTahfiz />} />
<Route path="/resulttahfiz" element={<ResultTahfiz />} />
<Route path="/gameptahfiz" element={<GamePTahfiz />} />
<Route path="/draggameptahfiz" element={<DragGamePTahfiz />} />
<Route path="/resultptahfiz" element={<ResultPTahfiz />} />
<Route path="/gameltahfiz" element={<GameLTahfiz />} />
<Route path="/resultltahfiz" element={<ResultLTahfiz />} />
<Route path="/gametafsir" element={<GameTafsir />} />
<Route path="/draggametafsir" element={<DragGameTafsir />} />
<Route path="/resulttafsir" element={<ResultTafsir />} />
<Route path="/gameptafsir" element={<GamePTafsir />} />
<Route path="/resultptafsir" element={<ResultPTafsir />} />
<Route path="/gameltafsir" element={<GameLTafsir />} />
<Route path="/resultltafsir" element={<ResultLTafsir />} />






</Routes>
    </BrowserRouter>

  );

}

export default App;
