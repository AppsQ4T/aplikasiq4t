import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/logo.png";

function Login() {
  const navigate = useNavigate();
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">

        <img src={logo} alt="Logo Q4T" className="logo" />
        <h1>Aplikasi Q4T</h1>

        <button onClick={() => navigate("/dashboard")}>
          👨‍🎓 Pelajar
        </button>

        <button>
          👤 Tetamu
        </button>

        <button>
          👨‍🏫 Admin
        </button>

        {/* IKON PENAFIAN */}
        <div className="disclaimer-wrap">
          <div
            className="disclaimer-icon"
            onMouseEnter={() => setShowDisclaimer(true)}
            onMouseLeave={() => setShowDisclaimer(false)}
            onClick={() => setShowDisclaimer(!showDisclaimer)}
          >
            ⚠️
          </div>

          {showDisclaimer && (
            <div className="disclaimer-box">
              <p className="disclaimer-title">PENAFIAN</p>
              <p className="disclaimer-text">
                Pihak pentadbir Aplikasi Q4T tidak bertanggungjawab atas sebarang
                kehilangan, kerosakan, atau masalah yang timbul akibat penggunaan
                aplikasi ini. Segala maklumat yang diminta adalah untuk tujuan
                pembelajaran sahaja. Pengguna bertanggungjawab sepenuhnya ke atas
                cara dan tujuan penggunaan Aplikasi Q4T.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Login;