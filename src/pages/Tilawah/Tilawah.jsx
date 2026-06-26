import { useNavigate } from "react-router-dom";

function Tilawah() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px"
      }}
    >

      <h1>TILAWAH</h1>

      <button onClick={() => navigate("/tilawah/asas")}>
        ASAS
      </button>

      <button onClick={() => navigate("/tilawah/pertengahan")}>
        PERTENGAHAN
      </button>

      <button onClick={() => navigate("/tilawah/lanjutan")}>
        LANJUTAN
      </button>

    </div>

  );

}

export default Tilawah;