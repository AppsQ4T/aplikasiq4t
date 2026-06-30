import "./GamePTahfiz.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function GamePTahfiz() {
  const navigate = useNavigate();

  const questions = [
    {
      arabic: " وَٱلنَّهَارِ إِذَا_____ ",
      question: "Nyatakan kalimah yang betul bagi ayat di atas.",
      options: ["أَعۡطَىٰ", "تَجَلَّىٰ", "تُجۡزَىٰٓ"],
      answer: 1,
    },
    {
      arabic: " وَمَا ___ عَنۡهُ   _____  إِذَا تَرَدَّىٰٓ ",
      question: "Lengkapkan ayat di atas dengan kalimah yang betul.",
      options: [
       " يُغۡنِي ...  مَالُهُۥٓ ",
        "أَعۡطَىٰ … تَرَدَّىٰٓ",
        "يُؤۡتِي … ٱلۡأَعۡلَىٰ",
      ],
      answer: 0,
    },
    {
      arabic: " ____ عِندَهُۥ مِن نِّعۡمَةٖ تُجۡزَىٰٓ ",
      question: "Nyatakan kalimah yang betul bagi ayat di atas.",
      options: ["وَإِنَّ لَنَا", "ٱلَّذِي", "وَمَا لِأَحَدٍ"],
      answer: 2,
    },
    {
      arabic: "___ وَجۡهِ رَبِّهِ ____",
      question: "Lengkapkan ayat di atas dengan kalimah yang betul.",
      options: [
          "  إِلَّا ٱبۡتِغَآءَ ... ٱلۡأَعۡلَىٰ ",
        "ٱلَّذِي … ٱلۡأَتۡقَى",
        "وَأَمَّا مَنۢ … وَٱسۡتَغۡنَىٰ",
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
      navigate("/draggameptahfiz", { state: { score: score } });
    }
  }

  return (
    <div className="gameptahfiz-page">

      <div className="gameptahfiz-header">
        <img src={logo} alt="Logo" className="gameptahfiz-logo" />
        <h1>SURAH AL-LAIL</h1>
      </div>

      <div className="gameptahfiz-card">

        <div className="gameptahfiz-badge">
          Soalan {currentQuestion + 1} / {questions.length}
        </div>

        <div className="gameptahfiz-arabic">{q.arabic}</div>

        <p className="gameptahfiz-question">{q.question}</p>

        <div className="gameptahfiz-options">
          {q.options.map((opt, i) => (
            <div
              key={i}
              className={`gameptahfiz-option ${answer === i ? "selected" : ""} ${
                checked ? i === q.answer ? "correct" : answer === i ? "wrong" : "" : ""
              }`}
              onClick={() => !checked && setAnswer(i)}
            >
              <span className="gameptahfiz-label">{String.fromCharCode(65 + i)}.</span>
              <span>{opt}</span>
            </div>
          ))}
        </div>

        {checked && (
          <div className={`gameptahfiz-result ${result}`}>
            {result === "betul"
              ? "✅ Tahniah! Jawapan anda BETUL."
              : `❌ Jawapan SALAH. Jawapan betul: ${q.options[q.answer]}`}
          </div>
        )}

        {!checked ? (
          <button className="gameptahfiz-submit" onClick={checkAnswer}>
            Semak Jawapan
          </button>
        ) : (
          <button className="gameptahfiz-submit" onClick={nextQuestion}>
            {currentQuestion === questions.length - 1
              ? "Teruskan ke Drag & Drop ➜"
              : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="gameptahfiz-score">Markah: {score} / {questions.length}</p>

      </div>

      <button className="gameptahfiz-back" onClick={() => window.location.href = "/tahfiz/pertengahan"}>
        ← Kembali
      </button>

      <div className="gameptahfiz-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default GamePTahfiz;