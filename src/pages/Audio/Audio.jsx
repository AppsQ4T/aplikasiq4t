import "./Audio.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

const audioData = {
  // ASAS
  alnas:      { title: "Surah Al-Nas",      file: "/audio/alnas.MP3" },
  alfalaq:    { title: "Surah Al-Falaq",    file: "/audio/alfalaq.MP3" },
  alikhlas:   { title: "Surah Al-Ikhlas",   file: "/audio/alikhlas.MP3" },
  almasad:    { title: "Surah Al-Masad",    file: "/audio/almasad.mp3" },
  alnasr:     { title: "Surah Al-Nasr",     file: "/audio/alnasr.mp3" },
  alkafirun:  { title: "Surah Al-Kafirun",  file: "/audio/alkafirun.mp3" },
  alkauthar:  { title: "Surah Al-Kauthar",  file: "/audio/alkauthar.mp3" },
  almaun:     { title: "Surah Al-Maun",     file: "/audio/almaun.mp3" },
  quraisy:    { title: "Surah Quraisy",     file: "/audio/quraisy.mp3" },
  alfil:      { title: "Surah Al-Fil",      file: "/audio/alfil.mp3" },
  alhumazah:  { title: "Surah Al-Humazah",  file: "/audio/alhumazah.mp3" },
  alasr:      { title: "Surah Al-Asr",      file: "/audio/alasr.mp3" },
  altakathur: { title: "Surah Al-Takathur", file: "/audio/altakathur.mp3" },
  alqariah:   { title: "Surah Al-Qariah",   file: "/audio/alqariah.mp3" },
  aladiyat:   { title: "Surah Al-Adiyat",   file: "/audio/aladiyat.mp3" },
  alzalzalah: { title: "Surah Al-Zalzalah", file: "/audio/alzalzalah.mp3" },
  albayyinah: { title: "Surah Al-Bayyinah", file: "/audio/albayyinah.mp3" },
  alqadr:     { title: "Surah Al-Qadr",     file: "/audio/alqadr.mp3" },
  alalaq:     { title: "Surah Al-Alaq",     file: "/audio/alalaq.mp3" },
  altin:      { title: "Surah Al-Tin",      file: "/audio/altin.mp3" },
  alinsyirah: { title: "Surah Al-Insyirah", file: "/audio/alinsyirah.mp3" },
  alduha:     { title: "Surah Al-Duha",     file: "/audio/alduha.mp3" },
  allail:       { title: "Surah Al-Lail",       file: "/audio/allail.MP3" },
  alsyams:      { title: "Surah Al-Syams",      file: "/audio/alsyams.MP3" },
  albalad:      { title: "Surah Al-Balad",      file: "/audio/albalad.MP3" },
  alfajr:       { title: "Surah Al-Fajr",       file: "/audio/alfajr.mp3" },
  alghasyiah:   { title: "Surah Al-Ghasyiah",   file: "/audio/alghasyiah.mp3" },
  alala:        { title: "Surah Al-A'la",       file: "/audio/alala.mp3" },
  altariq:      { title: "Surah Al-Tariq",      file: "/audio/altariq.mp3" },
  alburuj:      { title: "Surah Al-Buruj",      file: "/audio/alburuj.mp3" },
  alinsyiqaq:   { title: "Surah Al-Insyiqaq",   file: "/audio/alinsyiqaq.mp3" },
  almutaffifin: { title: "Surah Al-Mutaffifin", file: "/audio/almutaffifin.mp3" },
  alinfitar:    { title: "Surah Al-Infitar",    file: "/audio/alinfitar.mp3" },
  altakwir:     { title: "Surah Al-Takwir",     file: "/audio/altakwir.mp3" },
  abasa:        { title: "Surah Abasa",         file: "/audio/abasa.mp3" },
  alnaziat:     { title: "Surah Al-Naziat",     file: "/audio/alnaziat.mp3" },
  alnaba:       { title: "Surah Al-Naba",       file: "/audio/alnaba.mp3" },
  alsajdah:  { title: "Surah Al-Sajdah",  file: "/audio/alsajdah.MP3" },
  yasin:     { title: "Surah Yasin",      file: "/audio/yasin.MP3" },
  aldukhan:  { title: "Surah Al-Dukhan",  file: "/audio/aldukhan.MP3" },
  alwaqiah:  { title: "Surah Al-Waqiah",  file: "/audio/alwaqiah.mp3" },
  alsaff:    { title: "Surah Al-Saff",    file: "/audio/alsaff.mp3" },
  aljumuah:  { title: "Surah Al-Jumuah",  file: "/audio/aljumuah.mp3" },
  almulk:    { title: "Surah Al-Mulk",    file: "/audio/almulk.mp3" },
  alinsan:   { title: "Surah Al-Insan",   file: "/audio/alinsan.mp3" },
};

const audioDataTajwid = {
  alnas:  { title: "Surah Al-Nas",  file: "/audio/alnas.MP3" },
  allail: { title: "Surah Al-Lail", file: "/audio/allail.MP3" },
  yasin:  { title: "Surah Yasin ",   file: "/audio/yasin.MP3" },
};

function Audio() {
  const navigate = useNavigate();
  const location = useLocation();
  const surah = location.state?.surah || "alnas";
  const modul = location.state?.modul || "tilawah";

  const currentAudio = modul === "tajwid"
    ? audioDataTajwid[surah] || audioDataTajwid["alnas"]
    : audioData[surah] || audioData["alnas"];

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  function togglePlay() {
    if (playing) { audioRef.current.pause(); }
    else { audioRef.current.play(); }
    setPlaying(!playing);
  }

  function onTimeUpdate() { setCurrent(audioRef.current.currentTime); }
  function onLoaded() { setDuration(audioRef.current.duration); }

  function onSeek(e) {
    audioRef.current.currentTime = e.target.value;
    setCurrent(Number(e.target.value));
  }

  function onEnded() { setPlaying(false); setCurrent(0); }

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

   const modulLabel = {
      tajwid: "TAJWID",
      tahfiz: "TAHFIZ",
      tafsir: "TAFSIR",
    };
  
    return (
      <div className="nota-page">
  
        <div className="nota-header">
          <img src={logo} alt="Logo" className="nota-logo" />
          <h1>{modulLabel[modul] ? `${modulLabel[modul]} - AURAL` : "TILAWAH - AURAL"}</h1>
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