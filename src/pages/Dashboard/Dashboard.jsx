import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <div className="logo-area">
        <img src={logo} alt="Logo Q4T" className="logo-img" />
        <h1>Aplikasi Q4T</h1>
      </div>

      <div className="module-grid">

        <div className="module-card" onClick={() => navigate("/tilawah")}>
          <img src="/tilawah.png" alt="Tilawah" />
        </div>

        <div className="module-card" onClick={() => navigate("/tajwid")}>
          <img src="/tajwid.png" alt="Tajwid" />
        </div>

        <div className="module-card" onClick={() => navigate("/tahfiz")}>
          <img src="/tahfiz.png" alt="Tahfiz" />
        </div>

        <div className="module-card" onClick={() => navigate("/tafsir")}>
          <img src="/tafsir.png" alt="Tafsir" />
        </div>

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

export default Dashboard;