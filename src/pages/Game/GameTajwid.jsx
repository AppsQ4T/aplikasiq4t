import "./GameTajwid.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function GameTajwid() {
  const navigate = useNavigate();

  const questions = [
    {
      arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ١",
      question: "Makhraj huruf nun bertasydid (نّ) dalam kalimah ٱلنَّاسِ ialah al-khaisyum.",
      answer: "Betul",
    },
    {
      arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ١",
      question: "Hukum mad yang terdapat pada huruf wau (و) selepas huruf ain berbaris dammah (عُ) dalam kalimah أَعُوذُ ialah mad far'ie.",
      answer: "Salah",
    },
    {
      arabic: "مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ٤",
      question: "Alif lam dalam kalimah ٱلْخَنَّاسِ ialah alif lam qamariah.",
      answer: "Betul",
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
      navigate("/draggametajwid", { state: { score: score } });
    }
  }

  return (
    <div className="gametajwid-page">

      <div className="gametajwid-header">
        <img src={logo} alt="Logo" className="gametajwid-logo" />
        <h1>SURAH AL-NAS</h1>
      </div>

      <div className="gametajwid-card">

        <div className="gametajwid-badge">
          Soalan {currentQuestion + 1} / {questions.length}
        </div>

        <div className="gametajwid-arabic">{q.arabic}</div>

        <p className="gametajwid-question">{q.question}</p>

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
          <div className={`gametajwid-result ${result}`}>
            {result === "betul"
              ? "✅ Tahniah! Jawapan anda BETUL."
              : "❌ Jawapan anda SALAH."}
          </div>
        )}

        {!checked ? (
          <button className="gametajwid-submit" onClick={checkAnswer}>
            Semak Jawapan
          </button>
        ) : (
          <button className="gametajwid-submit" onClick={nextQuestion}>
            {currentQuestion === questions.length - 1
              ? "Teruskan ke Drag & Drop ➜"
              : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="gametajwid-score">Markah: {score} / {questions.length}</p>

      </div>

      <button className="gametajwid-back" onClick={() => navigate("/tajwid/asas")}>
        ← Kembali
      </button>

      <div className="gametajwid-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default GameTajwid;