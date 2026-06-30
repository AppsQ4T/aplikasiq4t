import "./AsasTajwid.css";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../../images/logo.png";

function AsasTajwid() {
  const navigate = useNavigate();

  return (
    <div className="asastajwid-page">

      <div className="asastajwid-header">
        <img src={logo} alt="Logo Q4T" className="asastajwid-logo" />
        <h1>TAJWID - ASAS</h1>
      </div>

      <h3>Pilih Surah dan Topik</h3>

      <select>
        <option>Al-Nas</option>
      </select>

      <div className="menu">

        <button className="menu-btn" onClick={() => navigate("/video", { state: { surah: "alnas", modul: "tajwid" } })}>
  📹 Video
</button>

        <button className="menu-btn" onClick={() => navigate("/audio", { state: { surah: "alnas", modul: "tajwid" } })}>
  🎧 Audio
</button>

        <button className="menu-btn" onClick={() => navigate("/Enota", { state: { surah: "alnas", modul: "tajwid" } })}>
          📄 NotaQu
        </button>

        <button className="menu-btn" onClick={() => navigate("/gametajwid")}>
          🎮 Uji Minda
        </button>

      </div>

      <div className="back-container">
        <button className="back-btn" onClick={() => navigate("/tajwid")}>
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

export default AsasTajwid;