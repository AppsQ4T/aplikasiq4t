import "./Audio.css";
import { useNavigate } from "react-router-dom";

import audio from "../../assets/audio/1. al-nas.mp3";

function Audio() {

  const navigate = useNavigate();

  return (

    <div className="audio-page">

      <h1>TILAWAH - AURAL</h1>

      <audio controls>

        <source src={audio} type="audio/mpeg" />

      </audio>

      <button
        className="back-btn"
        onClick={() => navigate("/tilawah/asas")}
      >
        ← Kembali
      </button>

    </div>

  );

}

export default Audio;