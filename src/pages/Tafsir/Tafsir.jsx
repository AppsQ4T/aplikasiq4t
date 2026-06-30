import "./Tafsir.css";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function Tafsir() {
  const navigate = useNavigate();

  return (
    <div className="tafsir-page">

      <div className="tafsir-header">
        <img src={logo} alt="Logo Q4T" className="tafsir-logo" />
        <h1>TAFSIR</h1>
      </div>

      <div className="tafsir-buttons">

        <button className="level-btn" onClick={() => navigate("/tafsir/asas")}>
          ASAS
        </button>

        <button className="level-btn" onClick={() => navigate("/tafsir/pertengahan")}>
          PERTENGAHAN
        </button>

        <button className="level-btn" onClick={() => navigate("/tafsir/lanjutan")}>
          LANJUTAN
        </button>

        <button className="back-btn" onClick={() => navigate("/dashboard")}>
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

export default Tafsir;