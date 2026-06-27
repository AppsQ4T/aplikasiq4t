import "./GameP.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function GameP() {
  const navigate = useNavigate();

  const questions = [
    {
      arabic: "يَغۡشَىٰ",
      question: "Huruf syin (ش) dalam kalimah يَغۡشَىٰ bersifat al-Hams, iaitu _____.",
      options: [
        "Udara mengalir ketika sebutan huruf.",
        "Suara keluar jelas tanpa mengalirkan udara.",
        "Lidah menyentuh penuh langit-langit mulut.",
      ],
      answer: 0,
    },
    {
      arabic: "خَلَقَ",
      question: "Huruf qaf (ق) dalam kalimah خَلَقَ bersifat al-Isti'la, iaitu _____.",
      options: [
        "Udara mengalir ketika sebutan huruf.",
        "Suara keluar jelas tanpa mengalirkan udara.",
        "Lidah terangkat ke langit mulut.",
      ],
      answer: 2,
    },
    {
      arabic: "أَمَّا",
      question: "Huruf mim (م) dalam kalimah أَمَّا bersifat al-Ghunnah, iaitu _____.",
      options: [
        "Pantulan apabila huruf sukun atau berhenti.",
        "Dengung dalam rongga hidung.",
        "Lembut dan mudah dilafaz.",
      ],
      answer: 1,
    },
    {
      arabic: "ٱبۡتِغَآءَ",
      question: "Hamzah wasal (ٱ) dalam kalimah ٱبۡتِغَآءَ dibaca dengan _____.",
      options: [
        "Kasrah",
        "Fathah",
        "Dammah",
      ],
      answer: 0,
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
      navigate("/draggameP", { state: { score: score } });
    }
  }

  return (
    <div className="game-page">

      <div className="game-header">
        <img src={logo} alt="Logo" className="game-logo" />
        <h1>SURAH AL-LAIL</h1>
      </div>

      <div className="game-card">

        <div className="soalan-badge">
          Soalan {currentQuestion + 1} / {questions.length}
        </div>

        <div className="arabic">{q.arabic}</div>

        <p className="question">{q.question}</p>

        <div className="options-group">
          {q.options.map((opt, i) => (
            <div
              key={i}
              className={`option-card ${answer === i ? "selected" : ""} ${
                checked
                  ? i === q.answer
                    ? "correct"
                    : answer === i
                    ? "wrong"
                    : ""
                  : ""
              }`}
              onClick={() => !checked && setAnswer(i)}
            >
              <span className="option-label">{String.fromCharCode(65 + i)}.</span>
              <span>{opt}</span>
            </div>
          ))}
        </div>

        {checked && (
          <div className={`result-msg ${result}`}>
            {result === "betul"
              ? "✅ Tahniah! Jawapan anda BETUL."
              : `❌ Jawapan SALAH. Jawapan betul: ${q.options[q.answer]}`}
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

      <button className="back-btn" onClick={() => navigate("/tilawah/pertengahan")}>
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

export default GameP;