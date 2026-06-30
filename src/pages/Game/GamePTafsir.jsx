import "./GamePTafsir.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function GamePTafsir() {
  const navigate = useNavigate();

  const questions = [
    {
    
      question: "Surah al-Lail merupakan surah _______.",
      options: ["Makkiyyah", "Madaniyyah"],
      answer: 0,
    },
    {
      
      question: "Surah ini dinamakan sebagai al-Lail kerana ______.",
      options: [
        "Dimulai dengan sumpah Allah SWT terhadap siang.",
        "Dimulai dengan sumpah Allah SWT terhadap malam.",
        "Diturunkan pada waktu malam.",
      ],
      answer: 1,
    },
    {
   
      question: "Tema utama surah al-Lail ialah _______.",
      options: [
        "Hukum-hakam ibadah.",
        "Peristiwa kiamat secara terperinci.",
        "Perbezaan jalan hidup manusia dan akibatnya di akhirat.",
      ],
      answer: 2,
    },
    {
      arabic: "فَأَمَّا مَنۡ أَعۡطَىٰ وَٱتَّقَىٰ",
      question: "Maksud ayat فَأَمَّا مَنۡ أَعۡطَىٰ وَٱتَّقَىٰ ialah __________.",
      options: [
        "Seseorang yang mentaati Allah dengan kebaikan dan takwa.",
        "Seseorang yang tidak suka beramal.",
        "Seseorang yang tidak bertakwa.",
      ],
      answer: 0,
    },
    {
     
      question: "Nyatakan maksud kalimah لِلۡيُسۡرَىٰ dalam surah ini.",
      options: [
        "Jalan menuju kesusahan.",
        "Kemudahan untuk mendapat kesenangan (syurga).",
        "Jalan menuju kekayaan.",
      ],
      answer: 1,
    },
    {
      question: "Berdasarkan surah ini, nyatakan sebab utama seseorang mendapat petunjuk.",
      options: [
        "Banyak bersedekah.",
        "Kedudukan dan keturunan yang mulia.",
        "Usaha dan amalan baik.",
      ],
      answer: 2,
    },
    {
      arabic: "وَسَيُجَنَّبُهَا ٱلۡأَتۡقَى",
      question: "Nyatakan balasan bagi orang yang paling bertakwa berdasarkan ayat وَسَيُجَنَّبُهَا ٱلۡأَتۡقَى",
      options: [
        "Dijauhkan daripada api neraka.",
        "Diberikan umur yang panjang.",
        "Diberikan kemewahan dunia.",
      ],
      answer: 0,
    },
    {
      arabic: "وَأَمَّا مَنۢ بَخِلَ وَٱسۡتَغۡنَىٰ وَكَذَّبَ بِٱلۡحُسۡنَىٰ",
      question: "Nyatakan akibat yang berlaku kepada orang bakhil dan mendustakan kebaikan menurut tafsiran ayat di atas.",
      options: [
        "Dia akan diberi harta yang banyak.",
        "Allah memudahkan baginya jalan kejahatan.",
        "Dia akan diselamatkan daripada azab.",
      ],
      answer: 1,
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
      navigate("/resultptafsir", { state: { score, total: 8 } });
    }
  }

  return (
    <div className="gameptafsir-page">

      <div className="gameptafsir-header">
        <img src={logo} alt="Logo" className="gameptafsir-logo" />
        <h1>SURAH AL-LAIL</h1>
      </div>

      <div className="gameptafsir-card">

        <div className="gameptafsir-badge">
          Soalan {currentQuestion + 1} / {questions.length}
        </div>

        <div className="gameptafsir-arabic">{q.arabic}</div>

        <p className="gameptafsir-question">{q.question}</p>

        <div className="gameptafsir-options">
          {q.options.map((opt, i) => (
            <div
              key={i}
              className={`gameptafsir-option ${answer === i ? "selected" : ""} ${
                checked ? i === q.answer ? "correct" : answer === i ? "wrong" : "" : ""
              }`}
              onClick={() => !checked && setAnswer(i)}
            >
              <span className="gameptafsir-label">{String.fromCharCode(65 + i)}.</span>
              <span>{opt}</span>
            </div>
          ))}
        </div>

        {checked && (
          <div className={`gameptafsir-result ${result}`}>
            {result === "betul"
              ? "✅ Tahniah! Jawapan anda BETUL."
              : `❌ Jawapan SALAH. Jawapan betul: ${q.options[q.answer]}`}
          </div>
        )}

        {!checked ? (
          <button className="gameptafsir-submit" onClick={checkAnswer}>
            Semak Jawapan
          </button>
        ) : (
          <button className="gameptafsir-submit" onClick={nextQuestion}>
            {currentQuestion === questions.length - 1
              ? "Lihat Keputusan ➜"
              : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="gameptafsir-score">Markah: {score} / {questions.length}</p>

      </div>

      <button className="gameptafsir-back" onClick={() => window.location.href = "/tafsir/pertengahan"}>
        ← Kembali
      </button>

      <div className="gameptafsir-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default GamePTafsir;