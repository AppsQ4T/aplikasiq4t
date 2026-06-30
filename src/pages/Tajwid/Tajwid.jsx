import "./Tajwid.css";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function Tajwid() {
  const navigate = useNavigate();

  return (
    <div className="tajwid-page">

      <div className="tajwid-header">
        <img src={logo} alt="Logo Q4T" className="tajwid-logo" />
        <h1>TAJWID</h1>
      </div>

      <div className="tajwid-buttons">

        <button
          className="level-btn"
          onClick={() => navigate("/tajwid/asas")}
        >
          ASAS
        </button>

        <button
          className="level-btn"
          onClick={() => navigate("/tajwid/pertengahan")}
        >
          PERTENGAHAN
        </button>

        <button
          className="level-btn"
          onClick={() => navigate("/tajwid/lanjutan")}
        >
          LANJUTAN
        </button>

        <button
          className="back-btn"
          onClick={() => navigate("/dashboard")}
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

export default Tajwid;