import "./Game.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Game() {

  const navigate = useNavigate();

  const questions = [

    {
      arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
      question: "Nun bertasydid (نّ) dalam kalimah ٱلنَّاسِ dibaca dengan dengung.",
      answer: "Betul",
    },

    {
      arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
      question: "Kadar harakat bacaan huruf ain (ع) berbaris depan yang disusuli dengan huruf wau (و) dalam kalimah أَعُوذُ adalah empat harakat.",
      answer: "Salah",
    },

    {
      arabic: "مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ",
      question: "Kalimah ٱلۡخَنَّاسِ dibunyikan huruf lam mati (لْ).",
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

    if (answer === "") {

      alert("Sila pilih jawapan dahulu.");
      return;

    }

    if (answer === q.answer) {

      setResult("✅ Tahniah! Jawapan anda BETUL.");
      setScore(score + 1);

    } else {

      setResult("❌ Jawapan anda SALAH.");

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

      // Nanti tukar ke game drag & drop
      navigate("/draggame", {
        state: {
          score: score
        }
      });

    }

  }

  return (

    <div className="game-page">

      <h1>🎮 SURAH AL-NAS</h1>

      <h2>
        Soalan {currentQuestion + 1} / {questions.length}
      </h2>

      <p className="instruction">

        Pilih sama ada pernyataan ini <b>Betul</b> atau <b>Salah</b>.

      </p>

      <div className="arabic">

        {q.arabic}

      </div>

      <div className="question">

        {q.question}

      </div>

      <label>

        <input
          type="radio"
          value="Betul"
          checked={answer === "Betul"}
          onChange={(e) => setAnswer(e.target.value)}
        />

        Betul

      </label>

      <label>

        <input
          type="radio"
          value="Salah"
          checked={answer === "Salah"}
          onChange={(e) => setAnswer(e.target.value)}
        />

        Salah

      </label>

      <br /><br />

      {!checked ? (

        <button
          className="submit-btn"
          onClick={checkAnswer}
        >
          Semak Jawapan
        </button>

      ) : (

        <button
          className="submit-btn"
          onClick={nextQuestion}
        >
          {currentQuestion === questions.length - 1
            ? "Teruskan ke Game Drag & Drop ➜"
            : "Soalan Seterusnya ➜"}
        </button>

      )}


      <h2>{result}</h2>

      <h3>Markah : {score} / {questions.length}</h3>

      <button
        className="back-btn"
        onClick={() => navigate("/tilawah/asas")}
      >
        ← Kembali
      </button>

    </div>

  );

}

export default Game;

