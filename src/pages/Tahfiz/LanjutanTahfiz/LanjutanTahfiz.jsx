import "./LanjutanTahfiz.css";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../../images/logo.png";

function LanjutanTahfiz() {
  const navigate = useNavigate();

  return (
    <div className="lanjutantahfiz-page">

      <div className="lanjutantahfiz-header">
        <img src={logo} alt="Logo Q4T" className="lanjutantahfiz-logo" />
        <h1>TAHFIZ - LANJUTAN</h1>
      </div>

      <h3>Pilih Surah</h3>

      <select>
        <option>Yasin</option>
      </select>

      <div className="menu">

        <button className="menu-btn" onClick={() => navigate("/video", { state: { surah: "yasin" } })}>
          📹 Video
        </button>

        <button className="menu-btn" onClick={() => navigate("/audio", { state: { surah: "yasin" } })}>
          🎧 Audio
        </button>

        <button className="menu-btn" onClick={() => navigate("/Enota", { state: { surah: "yasin", modul: "tahfiz" } })}>
  📄 NotaQu
</button>

        <button className="menu-btn" onClick={() => navigate("/gameltahfiz")}>
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

export default LanjutanTahfiz;