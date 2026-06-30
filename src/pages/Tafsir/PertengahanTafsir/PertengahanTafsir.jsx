import "./PertengahanTafsir.css";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../../images/logo.png";

function PertengahanTafsir() {
  const navigate = useNavigate();

  return (
    <div className="pertengahantafsir-page">

      <div className="pertengahantafsir-header">
        <img src={logo} alt="Logo Q4T" className="pertengahantafsir-logo" />
        <h1>TAFSIR - PERTENGAHAN</h1>
      </div>

      <h3>Pilih Surah</h3>

      <select>
        <option>Al-Lail</option>
      </select>

      <div className="menu">

        <button className="menu-btn" onClick={() => navigate("/video", { state: { surah: "allail", modul: "tafsir" } })}>
          📹 Video
        </button>

        <button className="menu-btn" onClick={() => navigate("/audio", { state: { surah: "allail", modul: "tafsir" } })}>
          🎧 Audio
        </button>

        <button className="menu-btn" onClick={() => navigate("/Enota", { state: { surah: "allail", modul: "tafsir" } })}>
          📄 NotaQu
        </button>

        <button className="menu-btn" onClick={() => navigate("/gameptafsir")}>
          🎮 Uji Minda
        </button>

      </div>

      <div className="back-container">
        <button className="back-btn" onClick={() => navigate("/tafsir")}>
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

export default PertengahanTafsir;