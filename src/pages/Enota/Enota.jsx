import "./Enota.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

const enotaData = {
  // ASAS
  alnas:    { title: "Surah Al-Nas",    pages: ["/enota/alnas/1.jpg"] },
  alfalaq:  { title: "Surah Al-Falaq",  pages: ["/enota/alfalaq/1.png"] },
  alikhlas: { title: "Surah Al-Ikhlas", pages: ["/enota/alikhlas/1.png"] },
  // tambah lain2 nanti

  // PERTENGAHAN
  allail: { title: "Surah Al-Lail", pages: ["/enota/allail/1.jpg", "/enota/allail/2.jpg", "/enota/allail/3.jpg"] },
  // tambah lain2 nanti

  // LANJUTAN
  alsajdah: { title: "Surah Al-Sajdah", pages: ["/enota/alsajdah/1.png"] },
  yasin: { title: "Surah Yasin", pages: ["/enota/yasin/1.jpg", "/enota/yasin/2.jpg", "/enota/yasin/3.jpg", "/enota/yasin/4.jpg", "/enota/yasin/5.jpg", "/enota/yasin/6.jpg", "/enota/yasin/7.jpg", "/enota/yasin/8.jpg", "/enota/yasin/9.jpg", 
    "/enota/yasin/10.jpg", "/enota/yasin/11.jpg", "/enota/yasin/12.jpg", "/enota/yasin/13.jpg", "/enota/yasin/14.jpg", "/enota/yasin/15.jpg"]
  },
  // tambah lain2 nanti
};

function Enota() {
  const navigate = useNavigate();
  const location = useLocation();
  const surah = location.state?.surah || "alnas";
  const currentNota = enotaData[surah] || enotaData["alnas"];

  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);

  return (
    <div className="nota-page">

      <div className="nota-header">
        <img src={logo} alt="Logo" className="nota-logo" />
        <h1>TILAWAH - READ/WRITE</h1>
      </div>

      <h2>{currentNota.title}</h2>

      <div className="zoom-control">
        <button
          className="zoom-btn"
          onClick={() => zoom > 0.5 && setZoom(Number((zoom - 0.1).toFixed(1)))}
        >
          ➖
        </button>
        <span>{Math.round(zoom * 100)}%</span>
        <button
          className="zoom-btn"
          onClick={() => zoom < 3 && setZoom(Number((zoom + 0.1).toFixed(1)))}
        >
          ➕
        </button>
      </div>

      <div className="image-container">
        <img
          src={currentNota.pages[currentPage]}
          alt="Nota"
          className="nota-image"
          style={{ transform: `scale(${zoom})`, transition: "0.3s ease" }}
        />
      </div>

      <div className="flipbook-buttons">
        <button
          className="flip-btn"
          disabled={currentPage === 0}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ⬅ Sebelum
        </button>

        <span className="page-indicator">
          {currentPage + 1} / {currentNota.pages.length}
        </span>

        <button
          className="flip-btn"
          disabled={currentPage === currentNota.pages.length - 1}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Seterusnya ➡
        </button>
      </div>

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Kembali
      </button>

      <div className="bottom-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default Enota;