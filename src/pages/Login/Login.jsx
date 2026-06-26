import "./Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">

       <img
  src={logo}
  alt="Logo Q4T"
  className="logo"
/>

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

        
      </div>
    </div>
  );
}

export default Login;