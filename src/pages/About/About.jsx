import "./About.css";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

const team = [
  {
    img: "/1.jpg",
    name: "Profesor Madya Dr. Sharifah Norshah Bani Syed Bidin",
    uni: "Fakulti Pengajian Kontemporari Islam, Universiti Sultan Zainal Abidin, Malaysia",
    expertise: "Pengajian al-Quran",
    role: "Ketua",
  },
  {
    img: "/2.jpg",
    name: "Prof. Madya Dr. Mohammed Muneer 'deen Olodo al Shafi'i",
    uni: "Fakulti Pengajian Kontemporari Islam, Universiti Sultan Zainal Abidin, Malaysia",
    expertise: "Falsafah, Teologi, Etika, dan Isu-isu Kontemporari",
    role: "Ahli",
  },
  {
    img: "/3.jpg",
    name: "Dr. Mohamed Fathy Mohamed Abdelgelil",
    uni: "Fakulti Usuluddin, Universiti Islam Sultan Sharif Ali, Brunei Darussalam",
    expertise: "Qiraat, Ulum Quran",
    role: "Ahli",
  },
  {
    img: "/4.jpg",
    name: "Dr. Tasnim Abdul Rahman",
    uni: "Fakulti Pengajian Kontemporari Islam, Universiti Sultan Zainal Abidin, Malaysia",
    expertise: "Pengajian Al-Quran",
    role: "Ahli",
  },
  {
    img: "/5.jpg",
    name: "Profesor Madya Dr. Noor Najihan Jaafar",
    uni: "Fakulti Pengajian al-Quran dan al-Sunnah, Universiti Sains Islam Malaysia",
    expertise: "Pendidikan Quran & Sunnah, Pendidikan Quran bagi OKU, Profesionalisme Pendidikan",
    role: "Ahli",
  },
];

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      <div className="about-header">
        <img src={logo} alt="Logo" className="about-logo" />
        <h1>MENGENAI APLIKASI</h1>
      </div>

      {/* KETERANGAN APLIKASI */}
      <div className="about-section">
        <h2>Tentang Aplikasi Q4T</h2>
        <p>
          Pembangunan Aplikasi Pembelajaran al-Quran Berasaskan Gaya Pembelajaran VARK (Aplikasi Q4T)
          ini adalah di bawah pembiayaan oleh Kementerian Pendidikan Tinggi melalui Skim Geran
          Penyelidikan Fundamental <strong>(FRGS/2023/SSI13/UNISZA/02/1)</strong>.
        </p>
      </div>

      {/* KETERANGAN */}
      <div className="about-section">
        <h2>Keterangan</h2>
        <ul>
          <li>
            Bacaan ayat-ayat al-Quran dalam aplikasi ini dipersembahkan oleh
            <strong> Dr. Mohamed Fathy Mohamed Abdelgelil</strong>, seorang qari bertauliah
            dan pemegang sanad al-Quran yang sah dan bersambung secara mutawatir hingga Rasulullah SAW.
          </li>
          <li>
            Semua kandungan dalam AppsQ4T telah disahkan oleh kumpulan pakar bidang yang berkaitan.
          </li>
          <li>
            Watak visual dan suara latar dalam modul Tafsir serta topik-topik dalam modul Tajwid
            dijana menggunakan teknologi kecerdasan buatan (AI) sebagai medium penyampaian pembelajaran.
          </li>
          <li>
            Setiap komponen Tilawah, Tajwid, Tahfiz dan Tafsir dibahagikan kepada tiga tahap
            pembelajaran iaitu <strong>Asas, Pertengahan</strong> dan <strong>Lanjutan</strong>.
          </li>
        </ul>
      </div>

     {/* KUMPULAN PENYELIDIKAN */}
<div className="about-section">
  <h2>Kumpulan Penyelidikan</h2>

  {/* KETUA */}
  <div className="team-group">
    <p className="team-role-title">KETUA</p>
    <div className="member-portrait">
      <img src="/1.jpg" alt="Ketua" className="portrait-img" />
      <p className="portrait-name">Profesor Madya Dr. Sharifah Norshah Bani Syed Bidin</p>
      <p className="portrait-uni">(Fakulti Pengajian Kontemporari Islam, Universiti Sultan Zainal Abidin, Malaysia)</p>
      <p className="portrait-expertise">Bidang Kepakaran: Pengajian al-Quran</p>
    </div>
  </div>

  {/* AHLI-AHLI */}
  <div className="team-group">
    <p className="team-role-title">AHLI-AHLI</p>
    {team.slice(1).map((member, i) => (
      <div key={i} className="member-portrait">
        <img src={member.img} alt={member.name} className="portrait-img" />
        <p className="portrait-name">{member.name}</p>
        <p className="portrait-uni">({member.uni})</p>
        <p className="portrait-expertise">Bidang Kepakaran: {member.expertise}</p>
      </div>
    ))}
  </div>

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

export default About;