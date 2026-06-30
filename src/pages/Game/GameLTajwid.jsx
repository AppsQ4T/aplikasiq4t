import "./GameLTajwid.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function GameLTajwid() {
  const navigate = useNavigate();

  const questions = [
    {
      arabic: "وَجَعَلۡنَا مِنۢ بَيۡنِ أَيۡدِيهِمۡ سَدّٗا وَمِنۡ خَلۡفِهِمۡ سَدّٗا فَأَغۡشَيۡنَٰهُمۡ فَهُمۡ لَا يُبۡصِرُونَ",
      question: "Nyatakan fungsi simbol mim kecil di atas nun atau tanwin seperti dalam ayat berikut.",
      options: [
        "Menunjukkan bacaan iqlab.",
        "Menunjukkan bacaan raum.",
        "Menunjukkan bacaan imalah.",
        "Menunjukkan bacaan saktah.",
      ],
      answer: 0,
    },
    {

      arabic: "أَوَلَيۡسَ ٱلَّذِي خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ بِقَٰدِرٍ عَلَىٰٓ أَن يَخۡلُقَ مِثۡلَهُمۚ بَلَىٰ وَهُوَ ٱلۡخَلَّٰقُ ٱلۡعَلِيمُ",
      question: "Nyatakan jenis waqaf yang terdapat pada ayat أَوَلَيۡسَ ٱلَّذِي خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ بِقَٰدِرٍ عَلَىٰٓ.",
      options: [
        "Waqaf tam",
        "Waqaf hasan",
        "Waqaf qabih",
        "Waqaf kafi",
      ],
      answer: 2,
    },
    {
      arabic: "فَلَا يَحۡزُنكَ قَوۡلُهُمۡۘ إِنَّا نَعۡلَمُ مَا يُسِرُّونَ وَمَا يُعۡلِنُونَ",
      question: "Nyatakan jenis waqaf yang terdapat pada ayat فَلَا يَحۡزُنكَ قَوۡلُهُمۡۘ.",
      options: [
        "Waqaf tam",
        "Waqaf kafi",
        "Waqaf qabih",
        "Waqaf hasan",
      ],
      answer: 1,
    },
    {
      arabic: "قَالُواْ يَٰوَيۡلَنَا مَنۢ بَعَثَنَا مِن مَّرۡقَدِنَاۜۗ هَٰذَا مَا وَعَدَ ٱلرَّحۡمَٰنُ وَصَدَقَ ٱلۡمُرۡسَلُونَ",
      question: "Bagaimanakah hukum bacaan saktah pada ayat ini jika diwaqaf (dimatikan)?",
      options: [
        "Hentikan bacaan dan kemudian, baca ayat seterusnya seperti biasa.",
        "Hentikan seketika bacaan pada huruf nun kemudian sambung semula bacaan dengan nafas yang sama.",
        "Hentikan seketika bacaan pada huruf nun kemudian sambung semula bacaan dengan nafas berlainan.",
        "Baca ayat seterusnya dengan nafas yang sama.",
      ],
      answer: 1,
    },
    {
      arabic: "قَالُواْ يَٰوَيۡلَنَا مَنۢ بَعَثَنَا مِن مَّرۡقَدِنَاۜۗ هَٰذَا مَا وَعَدَ ٱلرَّحۡمَٰنُ وَصَدَقَ ٱلۡمُرۡسَلُونَ",
      question: "Bagaimanakah hukum bacaan saktah pada ayat ini jika diwasal (disambung)?",
      options: [
        "Hentikan seketika bacaan pada huruf nun dalam kadar 2 harakat kemudian menyambung semula bacaan dengan nafas yang sama.",
        "Hentikan bacaan seperti biasa.",
        "Hentikan seketika bacaan pada huruf nun dalam kadar 2 harakat kemudian menyambung semula bacaan dengan nafas yang berlainan.",
        "Hentikan bacaan seperti biasa dan sambung bacaan dengan nafas yang sama.",
      ],
      answer: 0,
    },
    {
      arabic: "إِنَّمَا تُنذِرُ مَنِ ٱتَّبَعَ ٱلذِّكۡرَ وَخَشِيَ ٱلرَّحۡمَٰنَ بِٱلۡغَيۡبِۖ فَبَشِّرۡهُ بِمَغۡفِرَةٖ وَأَجۡرٖ كَرِيمٍ",
      question: "Pilih jenis waqaf yang betul bagi ayat إِنَّمَا تُنذِرُ مَنِ ٱتَّبَعَ ٱلذِّكۡرَ وَخَشِيَ ٱلرَّحۡمَٰنَ بِٱلۡغَيۡبِۖ .",
      options: [
        "Waqaf hasan",
        "Waqaf kafi",
        "Waqaf qabih",
        "Waqaf tam",
      ],
      answer: 0,
    },
    {
      arabic: "مَا قَدَّمُواْ وَءَاثَٰرَهُمۡۚ وَكُلَّ شَيۡءٍ أَحۡصَيۡنَٰهُ فِيٓ إِمَامٖ مُّبِينٖ",
      question: "Klasifikasikan jenis ibtida' apabila memulakan bacaan pada ayat ini.",
      options: [
        "Ibtida' kafi",
        "Ibtida' hasan",
        "Ibtida' qabih",
        "Ibtida' tam",
      ],
      answer: 2,
    },
    {
      arabic: "وَجَعَلۡنَا فِيهَا جَنَّٰتٖ",
      question: "Klasifikasikan jenis waqaf yang berlaku apabila menghentikan bacaan pada ayat di bawah.",
      options: [
        "Waqaf tam",
        "Waqaf kafi",
        "Waqaf qabih",
        "Waqaf hasan",
      ],
      answer: 2,
    },
    {
      arabic: "قَالُواْ يَٰوَيۡلَنَا مَنۢ بَعَثَنَا مِن مَّرۡقَدِنَاۜۗ",
      question: "Kenal pasti jenis waqaf yang ditanda dengan simbol قلى seperti ayat di bawah.",
      options: [
        "Waqaf kafi",
        "Waqaf tam",
        "Waqaf qabih",
        "Waqaf hasan",
      ],
      answer: 0,
    },
    {
      arabic: "مَّرۡقَدِنَاۜۗ",
      question: "Kenal pasti nama bagi simbol س seperti yang terdapat dalam kalimah di bawah.",
      options: [
        "Tashil",
        "Ibdal",
        "Saktah",
        "Isymam",
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
      navigate("/resultltajwid", { state: { score, total: 10 } });
    }
  }

  return (
    <div className="gameltajwid-page">

      <div className="gameltajwid-header">
        <img src={logo} alt="Logo" className="gameltajwid-logo" />
        <h1>SURAH YASIN</h1>
      </div>

      <div className="gameltajwid-card">

        <div className="gameltajwid-badge">
          Soalan {currentQuestion + 1} / {questions.length}
        </div>

        <div className="gameltajwid-arabic">{q.arabic}</div>

        <p className="gameltajwid-question">{q.question}</p>

        <div className="gameltajwid-options">
          {q.options.map((opt, i) => (
            <div
              key={i}
              className={`gameltajwid-option ${answer === i ? "selected" : ""} ${
                checked ? i === q.answer ? "correct" : answer === i ? "wrong" : "" : ""
              }`}
              onClick={() => !checked && setAnswer(i)}
            >
              <span className="gameltajwid-label">{String.fromCharCode(65 + i)}.</span>
              <span>{opt}</span>
            </div>
          ))}
        </div>

        {checked && (
          <div className={`gameltajwid-result ${result}`}>
            {result === "betul"
              ? "✅ Tahniah! Jawapan anda BETUL."
              : `❌ Jawapan SALAH. Jawapan betul: ${q.options[q.answer]}`}
          </div>
        )}

        {!checked ? (
          <button className="gameltajwid-submit" onClick={checkAnswer}>
            Semak Jawapan
          </button>
        ) : (
          <button className="gameltajwid-submit" onClick={nextQuestion}>
            {currentQuestion === questions.length - 1
              ? "Lihat Keputusan ➜"
              : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="gameltajwid-score">Markah: {score} / {questions.length}</p>

      </div>

      <button className="gameltajwid-back" onClick={() => navigate("/tajwid/lanjutan")}>
        ← Kembali
      </button>

      <div className="gameltajwid-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default GameLTajwid;