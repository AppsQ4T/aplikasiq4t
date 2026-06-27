import "./Game.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function Game() {
  const navigate = useNavigate();

  const questions = [
    {
      arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
      question: "Nun bertasydid (نّ) dalam kalimah ٱلنَّاسِ dibaca dengan dengung.",
      answer: "Betul",
    },
    {
      arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
      question: "Kadar harakat bacaan huruf ain (ع) berbaris depan yang disusuli dengan huruf wau (و) dalam kalimah أَعُوذُ adalah empat harakat.",
      answer: "Salah",
    },
    {
      arabic: "مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ",
      question: "Kalimah ٱلۡخَنَّاسِ dibunyikan huruf lam mati (لْ).",
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
      navigate("/draggame", { state: { score: score } });
    }
  }

  return (
    <div className="game-page">

      <div className="game-header">
        <img src={logo} alt="Logo" className="game-logo" />
        <h1>SURAH AL-NAS</h1>
      </div>

      <div className="game-card">

        <div className="soalan-badge">
          Soalan {currentQuestion + 1} / {questions.length}
        </div>

        <div className="arabic">{q.arabic}</div>

        <p className="question">{q.question}</p>

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
          <div className={`result-msg ${result}`}>
            {result === "betul"
              ? "✅ Tahniah! Jawapan anda BETUL."
              : "❌ Jawapan anda SALAH."}
          </div>
        )}

        {!checked ? (
          <button className="submit-btn" onClick={checkAnswer}>
            Semak Jawapan
          </button>
        ) : (
          <button className="submit-btn" onClick={nextQuestion}>
            {currentQuestion === questions.length - 1
              ? "Teruskan ke Drag & Drop ➜"
              : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="score-display">Markah: {score} / {questions.length}</p>

      </div>

      <button className="back-btn" onClick={() => navigate("/tilawah/asas")}>
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

export default Game;