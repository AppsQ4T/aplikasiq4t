import "./Enota.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Enota() {

  const navigate = useNavigate();

  const pages = [
    "/enota/alnas/1.jpg",
    "/enota/alnas/2.jpg",
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);

  return (

    <div className="nota-page">

      <h1>TILAWAH - READ/WRITE</h1>

      <div className="zoom-control">

        <button
          onClick={() => {
            if (zoom > 0.5) {
              setZoom(zoom - 0.1);
            }
          }}
        >
          ➖
        </button>

        <span>{Math.round(zoom * 100)}%</span>

        <button
          onClick={() => {
            if (zoom < 3) {
              setZoom(zoom + 0.1);
            }
          }}
        >
          ➕
        </button>

      </div>

      <div className="image-container">

        <img
          src={pages[currentPage]}
          alt="Nota"
          className="nota-image"
          style={{
            transform: `scale(${zoom})`,
            transition: "0.3s ease"
          }}
        />

      </div>

      <div className="flipbook-buttons">

        <button
          onClick={() =>
            currentPage > 0 &&
            setCurrentPage(currentPage - 1)
          }
        >
          ⬅ Sebelum
        </button>

        <span>
          {currentPage + 1} / {pages.length}
        </span>

        <button
          onClick={() =>
            currentPage < pages.length - 1 &&
            setCurrentPage(currentPage + 1)
          }
        >
          Seterusnya ➡
        </button>

      </div>

      <button
        className="back-btn"
        onClick={() => navigate("/tilawah/asas")}
      >
        ← Kembali
      </button>

    </div>

  );

}

export default Enota;