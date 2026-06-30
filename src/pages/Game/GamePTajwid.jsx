import "./GamePTajwid.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function GamePTajwid() {
  const navigate = useNavigate();

  const questions = [
    {
      question: "Huruf syin (ش) dalam kalimah يَغۡشَىٰ ialah _____ dan lawannya ialah al-Jahr.",
      options: [
        "Al-Hams",
        "Al-Syiddah",
        "Al-Isti'la",
      ],
      answer: 0,
    },
    {
  
      question: "Sifat huruf bagi huruf qaf (ق) dalam kalimah خَلَقَ ialah al-Isti'la dan lawannya ialah ______.",
      options: [
        "Al-Hams",
        "Al-Syiddah",
        "Al-Istifal",
      ],
      answer: 2,
    },
    {
     
      question: "Sifat huruf bagi huruf mim (م) dalam kalimah أَمَّا ialah ______.",
      options: [
        "Al-Lin",
        "Al-Qalqalah",
        "Al-Ghunnah",
      ],
      answer: 2,
    },
    {
     
      question: "Hukum tajwid bagi kalimah ٱبۡتِغَآءَ ialah _____.",
      options: [
        "Hamzah wasal",
        "Hamzah qat'i",
        "Hamzah sakinah",
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
      navigate("/draggameptajwid", { state: { score: score } });
    }
  }

  return (
    <div className="gameptajwid-page">

      <div className="gameptajwid-header">
        <img src={logo} alt="Logo" className="gameptajwid-logo" />
        <h1>SURAH AL-LAIL</h1>
      </div>

      <div className="gameptajwid-card">

        <div className="gameptajwid-badge">
          Soalan {currentQuestion + 1} / {questions.length}
        </div>

        <div className="gameptajwid-arabic">{q.arabic}</div>

        <p className="gameptajwid-question">{q.question}</p>

        <div className="gameptajwid-options">
          {q.options.map((opt, i) => (
            <div
              key={i}
              className={`gameptajwid-option ${answer === i ? "selected" : ""} ${
                checked ? i === q.answer ? "correct" : answer === i ? "wrong" : "" : ""
              }`}
              onClick={() => !checked && setAnswer(i)}
            >
              <span className="gameptajwid-label">{String.fromCharCode(65 + i)}.</span>
              <span>{opt}</span>
            </div>
          ))}
        </div>

        {checked && (
          <div className={`gameptajwid-result ${result}`}>
            {result === "betul"
              ? "✅ Tahniah! Jawapan anda BETUL."
              : `❌ Jawapan SALAH. Jawapan betul: ${q.options[q.answer]}`}
          </div>
        )}

        {!checked ? (
          <button className="gameptajwid-submit" onClick={checkAnswer}>
            Semak Jawapan
          </button>
        ) : (
          <button className="gameptajwid-submit" onClick={nextQuestion}>
            {currentQuestion === questions.length - 1
              ? "Teruskan ke Drag & Drop ➜"
              : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="gameptajwid-score">Markah: {score} / {questions.length}</p>

      </div>

      <button className="gameptajwid-back" onClick={() => navigate("/tajwid/pertengahan")}>
        ← Kembali
      </button>

      <div className="gameptajwid-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default GamePTajwid;