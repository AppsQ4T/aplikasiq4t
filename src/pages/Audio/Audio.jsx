import "./Audio.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

const audioData = {
  // ASAS
  alnas:      { title: "Surah Al-Nas",      file: "/audio/alnas.MP3" },       // ✅ ada
  alfalaq:    { title: "Surah Al-Falaq",    file: "/audio/alfalaq.MP3" },     // ✅ ada
  alikhlas:   { title: "Surah Al-Ikhlas",   file: "/audio/alikhlas.MP3" },    // ✅ ada
  almasad:    { title: "Surah Al-Masad",    file: "/audio/almasad.mp3" },     // ⏳ belum
  alnasr:     { title: "Surah Al-Nasr",     file: "/audio/alnasr.mp3" },      // ⏳ belum
  alkafirun:  { title: "Surah Al-Kafirun",  file: "/audio/alkafirun.mp3" },   // ⏳ belum
  alkauthar:  { title: "Surah Al-Kauthar",  file: "/audio/alkauthar.mp3" },   // ⏳ belum
  almaun:     { title: "Surah Al-Maun",     file: "/audio/almaun.mp3" },      // ⏳ belum
  quraisy:    { title: "Surah Quraisy",     file: "/audio/quraisy.mp3" },     // ⏳ belum
  alfil:      { title: "Surah Al-Fil",      file: "/audio/alfil.mp3" },       // ⏳ belum
  alhumazah:  { title: "Surah Al-Humazah",  file: "/audio/alhumazah.mp3" },   // ⏳ belum
  alasr:      { title: "Surah Al-Asr",      file: "/audio/alasr.mp3" },       // ⏳ belum
  altakathur: { title: "Surah Al-Takathur", file: "/audio/altakathur.mp3" },  // ⏳ belum
  alqariah:   { title: "Surah Al-Qariah",   file: "/audio/alqariah.mp3" },    // ⏳ belum
  aladiyat:   { title: "Surah Al-Adiyat",   file: "/audio/aladiyat.mp3" },    // ⏳ belum
  alzalzalah: { title: "Surah Al-Zalzalah", file: "/audio/alzalzalah.mp3" },  // ⏳ belum
  albayyinah: { title: "Surah Al-Bayyinah", file: "/audio/albayyinah.mp3" },  // ⏳ belum
  alqadr:     { title: "Surah Al-Qadr",     file: "/audio/alqadr.mp3" },      // ⏳ belum
  alalaq:     { title: "Surah Al-Alaq",     file: "/audio/alalaq.mp3" },      // ⏳ belum
  altin:      { title: "Surah Al-Tin",      file: "/audio/altin.mp3" },       // ⏳ belum
  alinsyirah: { title: "Surah Al-Insyirah", file: "/audio/alinsyirah.mp3" },  // ⏳ belum
  alduha:     { title: "Surah Al-Duha",     file: "/audio/alduha.mp3" },      // ⏳ belum

  // PERTENGAHAN
  allail:       { title: "Surah Al-Lail",       file: "/audio/allail.MP3" },      // ✅ ada
  alsyams:      { title: "Surah Al-Syams",      file: "/audio/alsyams.MP3" },     // ✅ ada
  albalad:      { title: "Surah Al-Balad",      file: "/audio/albalad.MP3" },     // ✅ ada
  alfajr:       { title: "Surah Al-Fajr",       file: "/audio/alfajr.mp3" },      // ⏳ belum
  alghasyiah:   { title: "Surah Al-Ghasyiah",   file: "/audio/alghasyiah.mp3" },  // ⏳ belum
  alala:        { title: "Surah Al-A'la",       file: "/audio/alala.mp3" },       // ⏳ belum
  altariq:      { title: "Surah Al-Tariq",      file: "/audio/altariq.mp3" },     // ⏳ belum
  alburuj:      { title: "Surah Al-Buruj",      file: "/audio/alburuj.mp3" },     // ⏳ belum
  alinsyiqaq:   { title: "Surah Al-Insyiqaq",   file: "/audio/alinsyiqaq.mp3" },  // ⏳ belum
  almutaffifin: { title: "Surah Al-Mutaffifin", file: "/audio/almutaffifin.mp3" },// ⏳ belum
  alinfitar:    { title: "Surah Al-Infitar",    file: "/audio/alinfitar.mp3" },   // ⏳ belum
  altakwir:     { title: "Surah Al-Takwir",     file: "/audio/altakwir.mp3" },    // ⏳ belum
  abasa:        { title: "Surah Abasa",         file: "/audio/abasa.mp3" },       // ⏳ belum
  alnaziat:     { title: "Surah Al-Naziat",     file: "/audio/alnaziat.mp3" },    // ⏳ belum
  alnaba:       { title: "Surah Al-Naba",       file: "/audio/alnaba.mp3" },      // ⏳ belum

  // LANJUTAN
  alsajdah:  { title: "Surah Al-Sajdah",  file: "/audio/alsajdah.MP3" },  // ✅ ada
  yasin:     { title: "Surah Yasin",      file: "/audio/yasin.MP3" },     // ✅ ada
  aldukhan:  { title: "Surah Al-Dukhan",  file: "/audio/aldukhan.MP3" },  // ✅ ada
  alwaqiah:  { title: "Surah Al-Waqiah",  file: "/audio/alwaqiah.mp3" },  // ⏳ belum
  alsaff:    { title: "Surah Al-Saff",    file: "/audio/alsaff.mp3" },    // ⏳ belum
  aljumuah:  { title: "Surah Al-Jumuah",  file: "/audio/aljumuah.mp3" },  // ⏳ belum
  almulk:    { title: "Surah Al-Mulk",    file: "/audio/almulk.mp3" },    // ⏳ belum
  alinsan:   { title: "Surah Al-Insan",   file: "/audio/alinsan.mp3" },   // ⏳ belum
};

function Audio() {
  const navigate = useNavigate();
  const location = useLocation();
  const surah = location.state?.surah || "alnas";
  const currentAudio = audioData[surah] || audioData["alnas"];

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  function togglePlay() {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  }

  function onTimeUpdate() {
    setCurrent(audioRef.current.currentTime);
  }

  function onLoaded() {
    setDuration(audioRef.current.duration);
  }

  function onSeek(e) {
    audioRef.current.currentTime = e.target.value;
    setCurrent(Number(e.target.value));
  }

  function onEnded() {
    setPlaying(false);
    setCurrent(0);
  }

  function restart() {
    audioRef.current.currentTime = 0;
    setCurrent(0);
    audioRef.current.play();
    setPlaying(true);
  }

  function skipBack() {
    audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    setCurrent(audioRef.current.currentTime);
  }

  function skipForward() {
    audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10);
    setCurrent(audioRef.current.currentTime);
  }

  function onVolume(e) {
    const val = Number(e.target.value);
    audioRef.current.volume = val;
    setVolume(val);
  }

  function fmt(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }

  function volumeIcon() {
    if (volume === 0) return "🔇";
    if (volume < 0.5) return "🔈";
    return "🔊";
  }

  return (
    <div className="audio-page">

      <div className="audio-header">
        <img src={logo} alt="Logo" className="audio-logo" />
        <h1>TILAWAH - AURAL</h1>
      </div>

      <h2>{currentAudio.title}</h2>

      <div className="player-card">

        <div className="player-title">
          <div className="player-name">{currentAudio.title.toUpperCase()}</div>
          <div className="player-sub">MP3</div>
        </div>

        <audio
          ref={audioRef}
          src={currentAudio.file}
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onLoaded}
          onEnded={onEnded}
        />

        <div className="progress-row">
          <span>{fmt(current)}</span>
          <input
            className="progress"
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={current}
            onChange={onSeek}
          />
          <span>{fmt(duration)}</span>
        </div>

        <div className="controls">
          <button className="ctrl-btn" onClick={restart} title="Ulang semula">↺</button>
          <button className="ctrl-btn" onClick={skipBack} title="-10s">⏮</button>
          <button className="play-btn" onClick={togglePlay}>
            {playing ? "⏸" : "▶"}
          </button>
          <button className="ctrl-btn" onClick={skipForward} title="+10s">⏭</button>

          <div className="volume-wrap">
            <span className="vol-icon">{volumeIcon()}</span>
            <input
              className="volume"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={onVolume}
            />
          </div>
        </div>

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

export default Audio;