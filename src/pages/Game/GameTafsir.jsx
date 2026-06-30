import "./GameTafsir.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function GameTafsir() {
  const navigate = useNavigate();

  const questions = [
    {
     
      question: "Surah al-Nas merupakan surah Makkiyyah.",
      answer: "Betul",
    },
    {
     
      question: "Surah al-Nas mempunyai enam ayat.",
      answer: "Betul",
    },
    {
    
      question: "Surah al-Nas merupakan surah ke-113 dalam al-Quran.",
      answer: "Salah",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(false);

  const q = questions[currentQuestion];

  function checkAnswer() {
    if (answer === "") { alert("Sila pilih jawapan dahulu."); return; }
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
      setAnswer("");
      setResult("");
      setChecked(false);
    } else {
      navigate("/draggametafsir", { state: { score: score } });
    }
  }

  return (
    <div className="gametafsir-page">

      <div className="gametafsir-header">
        <img src={logo} alt="Logo" className="gametafsir-logo" />
        <h1>SURAH AL-NAS</h1>
      </div>

      <div className="gametafsir-card">

        <div className="gametafsir-badge">
          Soalan {currentQuestion + 1} / {questions.length}
        </div>

        <div className="gametafsir-arabic">{q.arabic}</div>

        <p className="gametafsir-question">{q.question}</p>

        <div className="radio-group">
          <label className={`radio-card ${answer === "Betul" ? "selected" : ""}`}>
            <input
              type="radio"
              value="Betul"
              checked={answer === "Betul"}
              onChange={(e) => !checked && setAnswer(e.target.value)}
            />
            ✅ Betul
          </label>
          <label className={`radio-card ${answer === "Salah" ? "selected" : ""}`}>
            <input
              type="radio"
              value="Salah"
              checked={answer === "Salah"}
              onChange={(e) => !checked && setAnswer(e.target.value)}
            />
            ❌ Salah
          </label>
        </div>

        {checked && (
          <div className={`gametafsir-result ${result}`}>
            {result === "betul"
              ? "✅ Tahniah! Jawapan anda BETUL."
              : "❌ Jawapan anda SALAH."}
          </div>
        )}

        {!checked ? (
          <button className="gametafsir-submit" onClick={checkAnswer}>
            Semak Jawapan
          </button>
        ) : (
          <button className="gametafsir-submit" onClick={nextQuestion}>
            {currentQuestion === questions.length - 1
              ? "Teruskan ke Drag & Drop ➜"
              : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="gametafsir-score">Markah: {score} / {questions.length}</p>

      </div>

      <button className="gametafsir-back" onClick={() => window.location.href = "/tafsir/asas"}>
        ← Kembali
      </button>

      <div className="gametafsir-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default GameTafsir;