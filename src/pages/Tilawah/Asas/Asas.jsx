import "./Asas.css";
import { useNavigate } from "react-router-dom";

function Asas() {

  const navigate = useNavigate();

  return (

    <div className="asas-page">

      <h1>TILAWAH - ASAS</h1>

      <h3>Pilih Surah</h3>

      <select>
        <option>Al-Nas</option>
        <option>Al-Falaq</option>
        <option>Al-Ikhlas</option>
      </select>

      <div className="menu">

        <button onClick={() => navigate("/video")}>

📹 Video

</button>

        <button onClick={() => navigate("/audio")}>

🎧 Audio

</button>

       <button onClick={() => navigate("/Enota")}>

📄 NotaQu

</button>

      <button onClick={() => navigate("/game")}>
  🎮 Uji Minda
</button>

      </div>

      <button
        className="back-btn"
        onClick={() => navigate("/tilawah")}
      >
        ← Kembali
      </button>

    </div>

  );

}

export default Asas;