import "./LanjutanTajwid.css";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../../images/logo.png";

function LanjutanTajwid() {
  const navigate = useNavigate();

  return (
    <div className="lanjutantajwid-page">

      <div className="lanjutantajwid-header">
        <img src={logo} alt="Logo Q4T" className="lanjutantajwid-logo" />
        <h1>TAJWID - LANJUTAN</h1>
      </div>

      <h3>Pilih Surah dan Topik</h3>

      <select>
        <option>Yasin</option>
      </select>

      <div className="menu">

       <button className="menu-btn" onClick={() => navigate("/video", { state: { surah: "yasin", modul: "tajwid" } })}>
  📹 Video
</button>

        <button className="menu-btn" onClick={() => navigate("/audio", { state: { surah: "yasin", modul: "tajwid" } })}>
  🎧 Audio
</button>

        <button className="menu-btn" onClick={() => navigate("/Enota", { state: { surah: "yasin", modul: "tajwid" } })}>
          📄 NotaQu
        </button>

        <button className="menu-btn" onClick={() => navigate("/gameltajwid")}>
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

export default LanjutanTajwid;