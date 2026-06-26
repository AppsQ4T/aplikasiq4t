import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle } from "react-icons/fa";
import logo from "../../images/logo.png";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div className="dashboard">

      <div className="logo-area">

        <h1>🕌 Q4T</h1>

      </div>

      <div className="module-grid">

        <div
          className="module-card"
          onClick={() => navigate("/tilawah")}
        >
          <h2>تلاوة</h2>
          <h3>TILAWAH</h3>
        </div>

        <div className="module-card">
          <h2>تجويد</h2>
          <h3>TAJWID</h3>
        </div>

        <div className="module-card">
          <h2>تحفيظ</h2>
          <h3>TAHFIZ</h3>
        </div>

        <div className="module-card">
          <h2>تفسير</h2>
          <h3>TAFSIR</h3>
        </div>

      </div>

      <div className="bottom-nav">

        <FaBookOpen />

        <FaInfoCircle />

        <FaQuestionCircle />

      </div>

    </div>

  );

}

export default Dashboard;