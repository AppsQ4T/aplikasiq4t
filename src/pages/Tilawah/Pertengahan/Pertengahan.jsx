import "./Pertengahan.css";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../../images/logo.png";

function Pertengahan() {
  const navigate = useNavigate();

  return (
    <div className="pertengahan-page">

      <div className="pertengahan-header">
        <img src={logo} alt="Logo Q4T" className="pertengahan-logo" />
        <h1>TILAWAH - PERTENGAHAN</h1>
      </div>

      <h3>Pilih Surah</h3>

      <select>
        <option>Al-Lail</option>
     {/*   <option>Al-Falaq</option> */}
      {/*  <option>Al-Ikhlas</option> */}
      </select>

        <div className="menu">

        <button className="menu-btn" onClick={() => navigate("/video", { state: { surah: "allail" } })}>
  📹 Video
</button>

        <button className="menu-btn" onClick={() => navigate("/audio", { state: { surah: "allail" } })}>
          🎧 Audio
        </button>

        <button className="menu-btn" onClick={() => navigate("/Enota", { state: { surah: "allail" } })}>
          📄 NotaQu
        </button>

        <button className="menu-btn" onClick={() => navigate("/gameP")}>
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

export default Pertengahan;