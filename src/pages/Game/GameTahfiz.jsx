import "./GameTahfiz.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function GameTahfiz() {
  const navigate = useNavigate();

  const questions = [
    {
      
      question: "إِلَٰهِ ٱلنَّاسِAyat ketiga dalam surah al-Nas ialah  ",
      answer: "Betul",
    },
    {
      arabic: "مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ",
      question: "Ayat di atas terletak pada akhir surah al-Nas.",
      answer: "Betul",
    },
    {
      arabic: "مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ",
      question: "Ayat di atas adalah betul bagi ayat kelima surah al-Nas",
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
      navigate("/draggametahfiz", { state: { score: score } });
    }
  }

  return (
    <div className="gametahfiz-page">

      <div className="gametahfiz-header">
        <img src={logo} alt="Logo" className="gametahfiz-logo" />
        <h1>SURAH AL-NAS</h1>
      </div>

      <div className="gametahfiz-card">

        <div className="gametahfiz-badge">
          Soalan {currentQuestion + 1} / {questions.length}
        </div>

        <div className="gametahfiz-arabic">{q.arabic}</div>

        <p className="gametahfiz-question">{q.question}</p>

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
          <div className={`gametahfiz-result ${result}`}>
            {result === "betul"
              ? "✅ Tahniah! Jawapan anda BETUL."
              : "❌ Jawapan anda SALAH."}
          </div>
        )}

        {!checked ? (
          <button className="gametahfiz-submit" onClick={checkAnswer}>
            Semak Jawapan
          </button>
        ) : (
          <button className="gametahfiz-submit" onClick={nextQuestion}>
            {currentQuestion === questions.length - 1
              ? "Teruskan ke Drag & Drop ➜"
              : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="gametahfiz-score">Markah: {score} / {questions.length}</p>

      </div>

      <button className="gametahfiz-back" onClick={() => window.location.href = "/tahfiz/asas"}>
        ← Kembali
      </button>

      <div className="gametahfiz-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default GameTahfiz;