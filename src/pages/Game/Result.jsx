import "./Result.css";
import { useLocation, useNavigate } from "react-router-dom";

const TOTAL = 12; // 3 soalan betul/salah + 3 soalan drag (2 item each) = 3 + (3×2) = 9... tukar ikut total kau

function getGrade(score, total) {
  const pct = (score / total) * 100;
  if (pct >= 90) return { label: "Cemerlang",  icon: "🏆", msg: "Luar biasa! Penguasaan tajwid kamu sangat baik. Teruskan!" };
  if (pct >= 70) return { label: "Kepujian",   icon: "⭐", msg: "Prestasi yang baik! Ulangkaji bahagian yang kurang jelas untuk hasil lebih baik." };
  if (pct >= 50) return { label: "Baik",       icon: "👍", msg: "Usaha yang bagus! Teruskan belajar dan ulangkaji tajwid dengan lebih kerap." };
  return         { label: "Cuba Lagi",          icon: "📖", msg: "Jangan putus asa! Baca semula nota tajwid dan cuba lagi." };
}

function Result() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const score     = location.state?.score ?? 0;
  const total     = location.state?.total ?? TOTAL;

  const wrong     = total - score;
  const pct       = Math.round((score / total) * 100);
  const grade     = getGrade(score, total);

  return (
    <div className="result-page">
      <div className="trophy">{grade.icon}</div>

      <h1>{pct >= 90 ? "Tahniah, Hebat!" : pct >= 70 ? "Tahniah, Pelajar!" : pct >= 50 ? "Teruskan Usaha!" : "Jangan Putus Asa!"}</h1>
      <p className="subtitle">Kamu telah menamatkan kuiz Surah Al-Nas</p>

      <div className="score-card">
        <p className="score-label">Jumlah Markah</p>
        <p className="score-num">
          {score} <span className="score-total">/ {total}</span>
        </p>
        <span className="grade-badge">{grade.label}</span>
      </div>

      <div className="stats-row">
        <div className="stat-box">
          <p className="stat-val">{pct}%</p>
          <p className="stat-lbl">Peratus</p>
        </div>
        <div className="stat-box">
          <p className="stat-val correct">{score}</p>
          <p className="stat-lbl">Betul</p>
        </div>
        <div className="stat-box">
          <p className="stat-val wrong">{wrong}</p>
          <p className="stat-lbl">Salah</p>
        </div>
      </div>

      <div className="msg-box">{grade.msg}</div>

      <button
        className="submit-btn"
        onClick={() => navigate("/game")}
      >
        Cuba Semula
      </button>

      <button
        className="back-btn"
        onClick={() => navigate("/tilawah/asas")}
      >
        ← Kembali ke Menu
      </button>
    </div>
  );
}

export default Result;