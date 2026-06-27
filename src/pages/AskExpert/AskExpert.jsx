import "./AskExpert.css";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function AskExpert() {
  const navigate = useNavigate();

  return (
    <div className="ask-page">

      <div className="ask-header">
        <img src={logo} alt="Logo" className="ask-logo" />
        <h1>ANDA TANYA PAKAR JAWAB</h1>
      </div>

      <div className="ask-card">

        <p className="ask-desc">
          Kemukakan soalan anda berkaitan pembelajaran al-Quran
          di pautan link di bawah. Soalan anda akan dijawab oleh
          pakar bidang yang berkelayakan.
        </p>

        <a href="https://forms.gle/6vj8JzC9FcfryHmU7" target="_blank" rel="noopener noreferrer" className="ask-link-btn">
          Buka Link
        </a>

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

export default AskExpert;