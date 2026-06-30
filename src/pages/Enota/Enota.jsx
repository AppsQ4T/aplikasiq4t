import "./Enota.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

const enotaData = {
  alnas:    { title: "Surah Al-Nas",    pages: ["/enota/alnas/1.jpg"] },
  alfalaq:  { title: "Surah Al-Falaq",  pages: ["/enota/alfalaq/1.png"] },
  alikhlas: { title: "Surah Al-Ikhlas", pages: ["/enota/alikhlas/1.png"] },
  allail:   { title: "Surah Al-Lail",   pages: ["/enota/allail/1.jpg", "/enota/allail/2.jpg", "/enota/allail/3.jpg"] },
  alsajdah: { title: "Surah Al-Sajdah", pages: ["/enota/alsajdah/1.png"] },
  yasin:    { title: "Surah Yasin",     pages: Array.from({length: 15}, (_, i) => `/enota/yasin/${i+1}.jpg`) },
};

// fail 1.jpg huruf kecil, selebihnya .JPG huruf besar
const makePagesTajwid = (folder, count) =>
  Array.from({length: count}, (_, i) => {
    const num = i + 1;
    const ext = num === 1 ? "jpg" : "JPG";
    return `/enota/${folder}/${num}.${ext}`;
  });

// semua huruf kecil .jpg
const makePagesLower = (folder, count) =>
  Array.from({length: count}, (_, i) => `/enota/${folder}/${i+1}.jpg`);

const enotaDataTajwid = {
  alnas:  { title: "Surah Al-Nas",  pages: makePagesTajwid("tajwidalnas", 7) },
  allail: { title: "Surah Al-Lail ", pages: makePagesTajwid("tajwidallail", 22) },
  yasin:  { title: "Surah Yasin ",   pages: makePagesTajwid("tajwidyasin", 110) },
};

const enotaDataTahfiz = {
  alnas:  { title: "Surah Al-Nas",  pages: makePagesLower("tahfizalnas", 2) },
  allail: { title: "Surah Al-Lail", pages: makePagesLower("tahfizallail", 3) },
  yasin:  { title: "Surah Yasin",   pages: makePagesLower("tahfizyasin", 7) },
};

const enotaDataTafsir = {
  alnas:  { title: "Surah Al-Nas",  pages: makePagesLower("tafsiralnas", 5) },
  allail: { title: "Surah Al-Lail", pages: makePagesLower("tafsirallail", 5) },
  yasin:  { title: "Surah Yasin",   pages: makePagesLower("tafsiryasin", 14) },
};

function Enota() {
  const navigate = useNavigate();
  const location = useLocation();
  const surah = location.state?.surah || "alnas";
  const modul = location.state?.modul || "tilawah";

  const currentNota =
    modul === "tajwid" ? enotaDataTajwid[surah] || enotaDataTajwid["alnas"] :
    modul === "tahfiz" ? enotaDataTahfiz[surah] || enotaDataTahfiz["alnas"] :
    modul === "tafsir" ? enotaDataTafsir[surah] || enotaDataTafsir["alnas"] :
    enotaData[surah] || enotaData["alnas"];

  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);

  const modulLabel = {
    tajwid: "TAJWID",
    tahfiz: "TAHFIZ",
    tafsir: "TAFSIR",
  };

  return (
    <div className="nota-page">

      <div className="nota-header">
        <img src={logo} alt="Logo" className="nota-logo" />
        <h1>{modulLabel[modul] ? `${modulLabel[modul]} - READ/WRITE` : "TILAWAH - READ/WRITE"}</h1>
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