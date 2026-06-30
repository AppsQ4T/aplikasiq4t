import "./ResultTajwid.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

const TOTAL = 9;

function getGrade(score, total) {
  const pct = (score / total) * 100;
  if (pct >= 90) return { label: "Cemerlang", icon: "🏆", msg: "Luar biasa! Penguasaan tajwid kamu sangat baik. Teruskan!" };
  if (pct >= 70) return { label: "Kepujian",  icon: "⭐", msg: "Prestasi yang baik! Ulangkaji bahagian yang kurang jelas." };
  if (pct >= 50) return { label: "Baik",      icon: "👍", msg: "Usaha yang bagus! Teruskan belajar dan ulangkaji tajwid." };
  return          { label: "Cuba Lagi",        icon: "📖", msg: "Jangan putus asa! Baca semula nota tajwid dan cuba lagi." };
}

function ResultTajwid() {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score ?? 0;
  const total = location.state?.total ?? TOTAL;
  const wrong = total - score;
  const pct   = Math.round((score / total) * 100);
  const grade = getGrade(score, total);

  return (
    <div className="resulttajwid-page">

      <div className="resulttajwid-header">
        <img src={logo} alt="Logo" className="resulttajwid-logo" />
        <h1>SURAH AL-NAS</h1>
      </div>

      <div className="resulttajwid-trophy">
        <div className="trophy">{grade.icon}</div>
        <h2>{pct >= 90 ? "Tahniah, Hebat!" : pct >= 70 ? "Tahniah, Pelajar!" : pct >= 50 ? "Teruskan Usaha!" : "Jangan Putus Asa!"}</h2>
        <p className="subtitle">Kamu telah menamatkan kuiz Tajwid Surah Al-Nas</p>
      </div>

      <div className="resulttajwid-scorecard">
        <p className="score-label">Jumlah Markah</p>
        <p className="score-num">{score} <span className="score-total">/ {total}</span></p>
        <span className="grade-badge">{grade.label}</span>
      </div>

      <div className="resulttajwid-stats">
        <div className="stat-box">
          <p className="stat-val">{pct}%</p>
          <p className="stat-lbl">Peratus</p>
        </div>
        <div className="stat-box">
          <p className="stat-val" style={{color:"#2e7d32"}}>{score}</p>
          <p className="stat-lbl">Betul</p>
        </div>
        <div className="stat-box">
          <p className="stat-val" style={{color:"#c62828"}}>{wrong}</p>
          <p className="stat-lbl">Salah</p>
        </div>
      </div>

      <div className="resulttajwid-msg">{grade.msg}</div>

      <button className="resulttajwid-submit" onClick={() => navigate("/gametajwid")}>
        Cuba Semula
      </button>

      <button className="resulttajwid-back" onClick={() => navigate("/tajwid/asas")}>
        ← Kembali ke Menu
      </button>

      <div className="resulttajwid-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default ResultTajwid;