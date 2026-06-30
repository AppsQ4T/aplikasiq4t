import "./AsasTahfiz.css";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../../images/logo.png";

function AsasTahfiz() {
  const navigate = useNavigate();

  return (
    <div className="asastahfiz-page">

      <div className="asastahfiz-header">
        <img src={logo} alt="Logo Q4T" className="asastahfiz-logo" />
        <h1>TAHFIZ - ASAS</h1>
      </div>

      <h3>Pilih Surah</h3>

      <select>
        <option>Al-Nas</option>
      </select>

      <div className="menu">

        <button className="menu-btn" onClick={() => navigate("/video", { state: { surah: "alnas" } })}>
          📹 Video
        </button>

        <button className="menu-btn" onClick={() => navigate("/audio", { state: { surah: "alnas" } })}>
          🎧 Audio
        </button>

        <button className="menu-btn" onClick={() => navigate("/Enota", { state: { surah: "alnas", modul: "tahfiz" } })}>
  📄 NotaQu
</button>

        <button className="menu-btn" onClick={() => navigate("/gametahfiz")}>
          🎮 Uji Minda
        </button>

      </div>

      <div className="back-container">
        <button className="back-btn" onClick={() => navigate("/tahfiz")}>
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

export default AsasTahfiz;