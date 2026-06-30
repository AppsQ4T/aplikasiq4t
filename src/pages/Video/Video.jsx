import "./Video.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";



const videoData = {
  alnas:    { title: "Surah Al-Nas",   url: "https://www.youtube.com/embed/Fsfr_WnBcoA" },
  allail:   { title: "Surah Al-Lail",  url: "https://www.youtube.com/embed/kVLPVjyVdT0" },
  alsajdah: { title: "Surah Al-Sajdah",url: "https://www.youtube.com/embed/A5w2Ln4lYrY" },
  yasin:    { title: "Surah Yasin",    url: "https://www.youtube.com/embed/sw3dlWKjuXs" },
};

const videoDataTajwid = {
  alnas:  { title: "Surah Al-Nas",  url: "https://www.youtube.com/embed/6wBL17BC6wA" },
  allail: { title: "Surah Al-Lail", url: "https://www.youtube.com/embed/XtO7w3wbVUs" },
  yasin:  { title: "Surah Yasin",   url: "https://www.youtube.com/embed/ma7nGx7LVxA" },
};

const videoDataTafsir = {
  alnas:  { title: "Surah Al-Nas",  url: "https://www.youtube.com/embed/MG-eiIQ5xkM" },
  allail: { title: "Surah Al-Lail", url: "https://www.youtube.com/embed/3lg7rLFCGGQ" },
  yasin:  { title: "Surah Yasin",   url: "https://www.youtube.com/embed/Gc9qvIQN5p8" },
};

function Video() {
  const navigate = useNavigate();
  const location = useLocation();
  const surah = location.state?.surah || "alnas";
  const modul = location.state?.modul || "tilawah";

  const video =
  modul === "tajwid" ? videoDataTajwid[surah] || videoDataTajwid["alnas"] :
  modul === "tafsir" ? videoDataTafsir[surah] || videoDataTafsir["alnas"] :
  videoData[surah] || videoData["alnas"];

   const modulLabel = {
      tajwid: "TAJWID",
      tahfiz: "TAHFIZ",
      tafsir: "TAFSIR",
    };
  
    return (
      <div className="nota-page">
  
        <div className="nota-header">
          <img src={logo} alt="Logo" className="video-logo" />
          <h1>{modulLabel[modul] ? `${modulLabel[modul]} - VISUAL` : "TILAWAH - VISUAL"}</h1>
        </div>
  

      <h2>{video.title}</h2>

      <div className="video-wrapper">
        <iframe
          src={video.url}
          title={video.title}
          allowFullScreen
        ></iframe>
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

export default Video;