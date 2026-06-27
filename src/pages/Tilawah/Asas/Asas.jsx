import "./Asas.css";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../../images/logo.png";

function Asas() {
  const navigate = useNavigate();

  return (
    <div className="asas-page">

      <div className="asas-header">
        <img src={logo} alt="Logo Q4T" className="asas-logo" />
        <h1>TILAWAH - ASAS</h1>
      </div>

      <h3>Pilih Surah</h3>

      <select>
        <option>Al-Nas</option>
       {/* <option>Al-Falaq</option>
        <option>Al-Ikhlas</option>*/}
      </select>

      <div className="menu">

        <button className="menu-btn" onClick={() => navigate("/video", { state: { surah: "alnas" } })}>
  📹 Video
</button>

        <button className="menu-btn" onClick={() => navigate("/audio", { state: { surah: "alnas" } })}>
          🎧 Audio
        </button>

        <button className="menu-btn" onClick={() => navigate("/Enota", { state: { surah: "alnas" } })}>
          📄 NotaQu
        </button>

        <button className="menu-btn" onClick={() => navigate("/game")}>
          🎮 Uji Minda
        </button>

      </div>

      <div className="back-container">
  <button
    className="back-btn"
    onClick={() => navigate("/tilawah")}
  >
    ← Kembali
  </button>
</div>

      <div className="bottom-nav">
        <FaHome onClick={() => navigate("/dashboard")} title="Home" />
        <FaBookOpen onClick={() => navigate("/askexpert")} title="Tanya Pakar" />
        <FaInfoCircle onClick={() => navigate("/about")} title="Info" />
        <FaQuestionCircle onClick={() => navigate("/help")} title="Bantuan" />
      </div>

    </div>
  );
}

export default Asas;