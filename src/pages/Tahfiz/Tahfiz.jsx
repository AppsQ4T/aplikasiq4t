import "./Tahfiz.css";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function Tahfiz() {
  const navigate = useNavigate();

  return (
    <div className="tahfiz-page">

      <div className="tahfiz-header">
        <img src={logo} alt="Logo Q4T" className="tahfiz-logo" />
        <h1>TAHFIZ</h1>
      </div>

      <div className="tahfiz-buttons">

        <button className="level-btn" onClick={() => navigate("/tahfiz/asas")}>
          ASAS
        </button>

        <button className="level-btn" onClick={() => navigate("/tahfiz/pertengahan")}>
          PERTENGAHAN
        </button>

        <button className="level-btn" onClick={() => navigate("/tahfiz/lanjutan")}>
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

export default Tahfiz;