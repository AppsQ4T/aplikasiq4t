import "./Video.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";


const videoData = {
  // ASAS
  alnas:     { title: "Surah Al-Nas",      url: "https://www.youtube.com/embed/Fsfr_WnBcoA" },
 /* alfalaq:   { title: "Surah Al-Falaq",    url: "https://www.youtube.com/embed/LINK_SINI" },
  alikhlas:  { title: "Surah Al-Ikhlas",   url: "https://www.youtube.com/embed/LINK_SINI" },
  almasad:   { title: "Surah Al-Masad",    url: "https://www.youtube.com/embed/LINK_SINI" },
  alnasr:    { title: "Surah Al-Nasr",     url: "https://www.youtube.com/embed/LINK_SINI" },
  alkafirun: { title: "Surah Al-Kafirun",  url: "https://www.youtube.com/embed/LINK_SINI" },
  alkauthar: { title: "Surah Al-Kauthar",  url: "https://www.youtube.com/embed/LINK_SINI" },
  almaun:    { title: "Surah Al-Maun",     url: "https://www.youtube.com/embed/LINK_SINI" },
  quraisy:   { title: "Surah Quraisy",     url: "https://www.youtube.com/embed/LINK_SINI" },
  alfil:     { title: "Surah Al-Fil",      url: "https://www.youtube.com/embed/LINK_SINI" },
  alhumazah: { title: "Surah Al-Humazah",  url: "https://www.youtube.com/embed/LINK_SINI" },
  alasr:     { title: "Surah Al-Asr",      url: "https://www.youtube.com/embed/LINK_SINI" },
  altakathur:{ title: "Surah Al-Takathur", url: "https://www.youtube.com/embed/LINK_SINI" },
  alqariah:  { title: "Surah Al-Qariah",   url: "https://www.youtube.com/embed/LINK_SINI" },
  aladiyat:  { title: "Surah Al-Adiyat",   url: "https://www.youtube.com/embed/LINK_SINI" },
  alzalzalah:{ title: "Surah Al-Zalzalah", url: "https://www.youtube.com/embed/LINK_SINI" },
  albayyinah:{ title: "Surah Al-Bayyinah", url: "https://www.youtube.com/embed/LINK_SINI" },
  alqadr:    { title: "Surah Al-Qadr",     url: "https://www.youtube.com/embed/LINK_SINI" },
  alalaq:    { title: "Surah Al-Alaq",     url: "https://www.youtube.com/embed/LINK_SINI" },
  altin:     { title: "Surah Al-Tin",      url: "https://www.youtube.com/embed/LINK_SINI" },
  alinsyirah:{ title: "Surah Al-Insyirah", url: "https://www.youtube.com/embed/LINK_SINI" },
  alduha:    { title: "Surah Al-Duha",     url: "https://www.youtube.com/embed/LINK_SINI" },*/

  // PERTENGAHAN
  allail:    { title: "Surah Al-Lail",     url: "https://www.youtube.com/embed/kVLPVjyVdT0" },
 /* alsyams:   { title: "Surah Al-Syams",    url: "https://www.youtube.com/embed/LINK_SINI" },
  albalad:   { title: "Surah Al-Balad",    url: "https://www.youtube.com/embed/LINK_SINI" },
  alfajr:    { title: "Surah Al-Fajr",     url: "https://www.youtube.com/embed/LINK_SINI" },
  alghasyiah:{ title: "Surah Al-Ghasyiah", url: "https://www.youtube.com/embed/LINK_SINI" },
  alala:     { title: "Surah Al-A'la",     url: "https://www.youtube.com/embed/LINK_SINI" },
  altariq:   { title: "Surah Al-Tariq",    url: "https://www.youtube.com/embed/LINK_SINI" },
  alburuj:   { title: "Surah Al-Buruj",    url: "https://www.youtube.com/embed/LINK_SINI" },
  alinsyiqaq:{ title: "Surah Al-Insyiqaq", url: "https://www.youtube.com/embed/LINK_SINI" },
  almutaffifin:{ title: "Surah Al-Mutaffifin", url: "https://www.youtube.com/embed/LINK_SINI" },
  alinfitar: { title: "Surah Al-Infitar",  url: "https://www.youtube.com/embed/LINK_SINI" },
  altakwir:  { title: "Surah Al-Takwir",   url: "https://www.youtube.com/embed/LINK_SINI" },
  abasa:     { title: "Surah Abasa",       url: "https://www.youtube.com/embed/LINK_SINI" },
  alnaziat:  { title: "Surah Al-Naziat",   url: "https://www.youtube.com/embed/LINK_SINI" },
  alnaba:    { title: "Surah Al-Naba",     url: "https://www.youtube.com/embed/LINK_SINI" },*/

  // LANJUTAN
  alsajdah:  { title: "Surah Al-Sajdah",   url: "https://www.youtube.com/embed/A5w2Ln4lYrY" },
  yasin:     { title: "Surah Yasin",       url: "https://www.youtube.com/embed/sw3dlWKjuXs" },
 /* aldukhan:  { title: "Surah Al-Dukhan",   url: "https://www.youtube.com/embed/LINK_SINI" },
  alwaqiah:  { title: "Surah Al-Waqiah",   url: "https://www.youtube.com/embed/LINK_SINI" },
  alsaff:    { title: "Surah Al-Saff",     url: "https://www.youtube.com/embed/LINK_SINI" },
  aljumuah:  { title: "Surah Al-Jumuah",   url: "https://www.youtube.com/embed/LINK_SINI" },
  almulk:    { title: "Surah Al-Mulk",     url: "https://www.youtube.com/embed/LINK_SINI" },
  alinsan:   { title: "Surah Al-Insan",    url: "https://www.youtube.com/embed/LINK_SINI" },*/
};

function Video() {
  const navigate = useNavigate();
  const location = useLocation();
  const surah = location.state?.surah || "alnas";
  const video = videoData[surah] || videoData["alnas"];

  return (
    <div className="video-page">

      <div className="video-header">
        <img src={logo} alt="Logo" className="video-logo" />
        <h1>TILAWAH - VISUAL</h1>
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
        <FaBookOpen />
        <FaInfoCircle />
        <FaQuestionCircle />
      </div>

    </div>
  );
}

export default Video;