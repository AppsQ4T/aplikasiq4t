import "./Help.css";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

const steps = [
  {
    num: "1",
    text: "Lakukan Ujian Gaya Pembelajaran di pautan yang disediakan untuk mengenali jenis gaya pembelajaran anda sama ada Visual, Aural, Read/Write, atau Kinestetik.",
  },
  {
    num: "2",
    text: "Isi maklumat sesi penggunaan aplikasi di ruangan yang disediakan.",
  },
  {
    num: "3",
    text: "Pilih modul elemen pembelajaran al-Quran yang dikehendaki sama ada TILAWAH, TAJWID, TAHFIZ, atau TAFSIR.",
  },
  {
    num: "4",
    text: "Pilih aktiviti pembelajaran yang disediakan berdasarkan gaya Pembelajaran mengikut tahap ASAS, PERTENGAHAN, atau LANJUTAN.",
  },
  {
    num: "5",
    text: "Mulakan eksplorasi pembelajaran al-Quran yang menyeronokkan di AppsQ4T.",
  },
];

function Help() {
  const navigate = useNavigate();

  return (
    <div className="help-page">

      <div className="help-header">
        <img src={logo} alt="Logo" className="help-logo" />
        <h1>PANDUAN PENGGUNAAN</h1>
      </div>

      <div className="help-section">
        <h2>Panduan Penggunaan Aplikasi Q4T</h2>

        {steps.map((step) => (
          <div key={step.num} className="step-card">
            <div className="step-num">{step.num}</div>
            <p className="step-text">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="bottom-nav">
        <FaHome onClick={() => navigate("/dashboard")} title="Home" />
        <FaBookOpen onClick={() => navigate("/askexpert")} title="Tanya Pakar" />
        <FaInfoCircle onClick={() => navigate("/about")} title="Info" />
        <FaQuestionCircle onClick={() => navigate("/help")} title="Bantuan" />
      </div>

    </div>
  );
}

export default Help;