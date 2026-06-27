import "./GameL.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function GameL() {
  const navigate = useNavigate();

  const questions = [
    {
      arabic: "وَجَعَلۡنَا مِنۢ بَيۡنِ أَيۡدِيهِمۡ سَدّٗا وَمِنۡ خَلۡفِهِمۡ سَدّٗا",
      question: "Nyatakan cara membaca kalimah yang terdapat di atasnya simbol mim kecil (م) di atas nun sakinah (نْ) atau tanwin (ًٌٍ).",
      options: [
        "Menukar bacaan sakinah (نْ) atau tanwin (ًٌٍ) kepada mim (م).",
        "Memasukkan nun sakinah (نْ) atau tanwin (ًٌٍ) ke dalam huruf ba (ب).",
        "Menukar bacaan nun sakinah (نْ) atau tanwin (ًٌٍ) kepada huruf ba (ب).",
        "Menghilangkan bacaan nun sakinah (نْ) atau tanwin (ًٌٍ).",
      ],
      answer: 0,
    },
    {
      arabic: "أَوَلَيۡسَ ٱلَّذِي خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ بِقَٰدِرٍ عَلَىٰٓ",
      question: "Nyatakan cara membaca waqaf qabih yang terdapat dalam ayat berikut.",
      options: [
        "Teruskan bacaan tanpa henti kerana waqaf qabih tidak boleh diberhentikan.",
        "Hentikan nafas seketika dan mulakan ayat baru dengan nafas yang sama.",
        "Hentikan nafas dan mulakan ayat baru.",
        "Hentikan bacaan sepenuhnya dan tidak perlu sambung. Ayat sudah tamat.",
      ],
      answer: 0,
    },
    {
      arabic: "فَلَا يَحۡزُنكَ قَوۡلُهُمۡۘ",
      question: "Nyatakan sama ada wajib atau tidak untuk memberhentikan bacaan pada ayat yang mengandungi simbol waqaf lazim (ۘ).",
      options: [
        "Tidak wajib berhenti.",
        "Wajib berhenti.",
        "Tidak wajib berhenti dan perlu menyambungnya semula bacaan dengan nafas yang sama.",
        "Wajib berhenti tetapi perlu menyambungnya semula bacaan dengan nafas yang sama.",
      ],
      answer: 1,
    },
    {
      arabic: "مَنۢ بَعَثَنَا مِن مَّرۡقَدِنَاۜۗ هَٰذَا مَا وَعَدَ ٱلرَّحۡمَٰنُ",
      question: "Bagaimanakah cara bacaan saktah (س) pada ayat ini jika diwakaf (dimatikan)?",
      options: [
        "Hentikan bacaan dan kemudian, baca ayat seterusnya seperti biasa.",
        "Hentikan seketika bacaan pada huruf nun kemudian sambung semula bacaan dengan nafas yang sama.",
        "Hentikan seketika bacaan pada huruf nun kemudian sambung semula bacaan dengan nafas berlainan.",
        "Baca ayat seterusnya dengan nafas yang sama.",
      ],
      answer: 1,
    },
    {
      arabic: "مَنۢ بَعَثَنَا مِن مَّرۡقَدِنَاۜۗ هَٰذَا مَا وَعَدَ ٱلرَّحۡمَٰنُ",
      question: "Apakah hukum bacaan saktah (س) pada ayat ini jika diwasal (disambung)?",
      options: [
        "Hentikan seketika bacaan pada huruf nun dalam kadar 2 harakat, kemudian sambung semula bacaan dengan nafas yang sama.",
        "Hentikan bacaan seperti biasa.",
        "Hentikan seketika bacaan pada huruf nun dalam kadar 2 harakat kemudian menyambung semula bacaan dengan nafas yang berlainan.",
        "Hentikan bacaan seperti biasa dan sambung bacaan dengan nafas yang sama.",
      ],
      answer: 0,
    },
    {
      arabic: "إِنَّمَا تُنذِرُ مَنِ ٱتَّبَعَ ٱلذِّكۡرَ وَخَشِيَ ٱلرَّحۡمَٰنَ بِٱلۡغَيۡبِۖ",
      question: "Pilih cara bacaan waqaf hasan yang betul bagi ayat ini.",
      options: [
        "Hentikan bacaan, ambil nafas, kemudian sambung semula bacaan ayat selepasnya.",
        "Sambung bacaan tanpa mengambil nafas baru.",
        "Berhenti membaca ayat tersebut dan mulakan surah lain.",
        "Ambil nafas, kemudian sambung semula bacaan ayat surah lain.",
      ],
      answer: 0,
    },
    {
      arabic: "مَا قَدَّمُواْ وَءَاثَٰرَهُمۡۚ وَكُلَّ شَيۡءٍ أَحۡصَيۡنَٰهُ فِيٓ إِمَامٖ مُّبِينٖ",
      question: "Apakah sebab bacaan ayat di bawah dikategorikan sebagai ibtida' qabih?",
      options: [
        "Memulakan bacaan pada kalimah yang sempurna maksud.",
        "Memulakan bacaan pada kalimah yang mempunyai maksud berkait dengan ayat sebelumnya.",
        "Memulakan bacaan pada kalimah yang tidak sempurna maksud.",
        "Memulakan bacaan pada kalimah yang tidak mempunyai maksud berkait dengan ayat sebelumnya.",
      ],
      answer: 2,
    },
    {
      arabic: "وَجَعَلۡنَا فِيهَا جَنَّٰتٖ",
      question: "Apakah sebab bacaan ayat di bawah dikategorikan sebagai waqaf qabih?",
      options: [
        "Menghentikan bacaan pada kalimah yang sempurna maksud.",
        "Menghentikan bacaan pada kalimah yang mempunyai maksud berkait dengan ayat sebelumnya.",
        "Menghentikan bacaan pada kalimah yang tidak sempurna maksud.",
        "Menghentikan bacaan pada kalimah yang tidak mempunyai maksud berkait dengan ayat sebelumnya.",
      ],
      answer: 2,
    },
    {
      arabic: "قَالُواْ يَٰوَيۡلَنَا مَنۢ بَعَثَنَا مِن مَّرۡقَدِنَاۜۗ",
      question: "Kenal pasti cara membaca ayat yang mengandungi jenis waqaf yang ditanda dengan simbol قلى.",
      options: [
        "Berhenti sekejap dan ambil nafas jika perlu, kemudian sambung bacaan.",
        "Hentikan sepenuhnya bacaan, ambil nafas baru dan mulakan ayat seterusnya.",
        "Wajib berhenti, ambil nafas, dan baca ayat seterusnya.",
        "Hentikan bacaan, ambil nafas, kemudian sambung semula bacaan ayat selepasnya.",
      ],
      answer: 0,
    },
    {
      arabic: "مَّرۡقَدِنَاۜۗ",
      question: "Kenal pasti cara membaca kalimah yang mengandungi simbol س.",
      options: [
        "Teruskan bacaan seperti biasa.",
        "Berhenti seketika dan bernafas seperti biasa.",
        "Berhenti seketika bacaan dalam kadar dua harakat, kemudian meneruskan bacaan dengan nafas yang sama.",
        "Berhenti seketika dan mengambil nafas baru.",
      ],
      answer: 2,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(false);

  const q = questions[currentQuestion];

  function checkAnswer() {
    if (answer === null) { alert("Sila pilih jawapan dahulu."); return; }
    if (answer === q.answer) {
      setResult("betul");
      setScore(score + 1);
    } else {
      setResult("salah");
    }
    setChecked(true);
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer(null);
      setResult("");
      setChecked(false);
    } else {
      navigate("/resultL", { state: { score, total: 10 } });
    }
  }

  return (
    <div className="gamel-page">

      <div className="gamel-header">
        <img src={logo} alt="Logo" className="gamel-logo" />
        <h1>SURAH YASIN</h1>
      </div>

      <div className="gamel-card">

        <div className="gamel-badge">
          Soalan {currentQuestion + 1} / {questions.length}
        </div>

        <div className="gamel-arabic">{q.arabic}</div>

        <p className="gamel-question">{q.question}</p>

        <div className="gamel-options">
          {q.options.map((opt, i) => (
            <div
              key={i}
              className={`gamel-option ${answer === i ? "selected" : ""} ${
                checked ? i === q.answer ? "correct" : answer === i ? "wrong" : "" : ""
              }`}
              onClick={() => !checked && setAnswer(i)}
            >
              <span className="gamel-label">{String.fromCharCode(65 + i)}.</span>
              <span>{opt}</span>
            </div>
          ))}
        </div>

        {checked && (
          <div className={`gamel-result ${result}`}>
            {result === "betul"
              ? "✅ Tahniah! Jawapan anda BETUL."
              : `❌ Jawapan SALAH. Jawapan betul: ${q.options[q.answer]}`}
          </div>
        )}

        {!checked ? (
          <button className="gamel-submit" onClick={checkAnswer}>
            Semak Jawapan
          </button>
        ) : (
          <button className="gamel-submit" onClick={nextQuestion}>
            {currentQuestion === questions.length - 1
              ? "Lihat Keputusan ➜"
              : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="gamel-score">Markah: {score} / {questions.length}</p>

      </div>

      <button className="gamel-back" onClick={() => navigate("/tilawah/lanjutan")}>
        ← Kembali
      </button>

      <div className="gamel-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default GameL;