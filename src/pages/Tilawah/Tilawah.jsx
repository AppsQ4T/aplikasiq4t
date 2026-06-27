import "./Tilawah.css";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function Tilawah() {
  const navigate = useNavigate();

  return (
    <div className="tilawah-page">

      <div className="tilawah-header">
        <img src={logo} alt="Logo Q4T" className="tilawah-logo" />
        <h1>TILAWAH</h1>
      </div>

      <div className="tilawah-buttons">

        <button
          className="level-btn"
          onClick={() => navigate("/tilawah/asas")}
        >
          ASAS
        </button>

        <button
          className="level-btn"
          onClick={() => navigate("/tilawah/pertengahan")}
        >
          PERTENGAHAN
        </button>

        <button
          className="level-btn"
          onClick={() => navigate("/tilawah/lanjutan")}
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

export default Tilawah;