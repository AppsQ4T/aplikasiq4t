import "./Video.css";
import { useNavigate } from "react-router-dom";

function Video() {

  const navigate = useNavigate();

  return (

    <div className="video-page">

      <h1>TILAWAH - VISUAL</h1>

      <iframe
        width="900"
        height="500"
        src="https://www.youtube.com/embed/Fsfr_WnBcoA"
        title="Tilawah Visual"
        allowFullScreen
      ></iframe>

      <button
        className="back-btn"
        onClick={() => navigate("/tilawah/asas")}
      >
        ← Kembali
      </button>

    </div>

  );

}

export default Video;