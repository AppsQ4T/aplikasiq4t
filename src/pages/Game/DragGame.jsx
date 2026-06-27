import "./DragGame.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function DragGame() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevScore = location.state?.score || 0;

  const questions = [
    {
      arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ(١) مَلِكِ ٱلنَّاسِ(٢) إِلَٰهِ ٱلنَّاسِ(٣) مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ(٤)",
      items: [
        { id: "q1", label: "1. Nun bertasydid (نّ) dalam kalimah ٱلنَّاسِ dibaca dengan cara:", answer: "ghunnah" },
        { id: "q2", label: "2. Nun sakinah (نْ) bertemu huruf syin (ش) dalam kalimah مِن شَرِّ dibaca dengan cara:", answer: "ikhfa" },
      ],
      choices: [
        { id: "ikhfa", label: "Sembunyikan bunyi nun sakinah (ن) ke dalam huruf syin (ش) dan dengung dua harakat." },
        { id: "ghunnah", label: "Ghunnah (dengung)" },
      ],
    },
    {
      arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ(١) مَلِكِ ٱلنَّاسِ(٢) إِلَٰهِ ٱلنَّاسِ(٣) مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ(٤)",
      items: [
        { id: "q1", label: "1. Huruf ra' (ر) pada kalimah شَرِّ ٱلۡوَسۡوَاسِ dibaca dengan cara:", answer: "nipis" },
        { id: "q2", label: "2. Huruf ra' (ر) pada kalimah بِرَبِّ dibaca dengan cara:", answer: "tebal" },
      ],
      choices: [
        { id: "nipis", label: "Huruf ra' (ر) dibaca nipis" },
        { id: "tebal", label: "Huruf ra' (ر) dibaca tebal" },
      ],
    },
    {
      arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ(١) مَلِكِ ٱلنَّاسِ(٢) إِلَٰهِ ٱلنَّاسِ(٣)",
      items: [
        { id: "q1", label: "1. Nun bertasydid (نّ) berbaris atas pada kalimah ٱلنَّاسِ apabila diwaqaf dibaca dengan cara:", answer: "mad" },
        { id: "q2", label: "2. Huruf lam (ل) berbaris atas yang disusuli dengan huruf alif kecil (ٰ) pada kalimah إِلَٰهِ dibaca dengan cara:", answer: "harakat" },
      ],
      choices: [
        { id: "harakat", label: "Dipanjangkan dua harakat" },
        { id: "mad", label: "Dipanjangkan 2/4/6 harakat kerana mad arid lissukun" },
      ],
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [dropped, setDropped] = useState({});
  const [dragging, setDragging] = useState(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(prevScore);
  const [correctCount, setCorrectCount] = useState(0);

  const q = questions[currentQ];

  function handleDragStart(choiceId) { setDragging(choiceId); }

  function handleDrop(itemId) {
    if (!dragging) return;
    setDropped((prev) => ({ ...prev, [itemId]: dragging }));
    setDragging(null);
  }

  function handleRemove(itemId) {
    setDropped((prev) => { const next = { ...prev }; delete next[itemId]; return next; });
  }

  function checkAnswers() {
    const allFilled = q.items.every((item) => dropped[item.id]);
    if (!allFilled) { alert("Sila isi semua kotak dahulu."); return; }
    const correct = q.items.filter((item) => dropped[item.id] === item.answer).length;
    setScore((s) => s + correct);
    setCorrectCount(correct);
    setChecked(true);
  }

  function nextQuestion() {
    if (currentQ < questions.length - 1) {
      setCurrentQ((c) => c + 1);
      setDropped({});
      setChecked(false);
      setCorrectCount(0);
    } else {
      navigate("/result", { state: { score: score + 0, total: 9 } });
    }
  }

  const usedChoices = Object.values(dropped);

  return (
    <div className="draggame-page">

      <div className="game-header">
        <img src={logo} alt="Logo" className="game-logo" />
        <h1>SURAH AL-NAS</h1>
      </div>

      <div className="game-card">

        <div className="soalan-badge">
          Soalan {currentQ + 4} / 6
        </div>

        <div className="arabic">{q.arabic}</div>

        <p className="instruction">Seret jawapan ke dalam kotak yang betul.</p>

        {q.items.map((item) => {
          const val = dropped[item.id];
          const choiceLabel = q.choices.find((c) => c.id === val)?.label;
          const isCorrect = checked ? val === item.answer : null;

          return (
            <div key={item.id} className="drop-question">
              <p className="question">{item.label}</p>
              <div
                className={`drop-zone ${val ? "filled" : ""} ${checked ? (isCorrect ? "correct" : "wrong") : ""}`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(item.id)}
              >
                {val ? (
                  <>
                    <span>{choiceLabel}</span>
                    {!checked && (
                      <button className="remove-btn" onClick={() => handleRemove(item.id)}>✕</button>
                    )}
                  </>
                ) : (
                  <span className="placeholder">Lepaskan jawapan di sini...</span>
                )}
              </div>
            </div>
          );
        })}

        <div className="choices-pool">
          <p className="pool-label">Pilihan jawapan:</p>
          <div className="chips">
            {q.choices.map((choice) => (
              <div
                key={choice.id}
                className={`chip ${usedChoices.includes(choice.id) ? "used" : ""}`}
                draggable={!usedChoices.includes(choice.id)}
                onDragStart={() => handleDragStart(choice.id)}
              >
                {choice.label}
              </div>
            ))}
          </div>
        </div>

        {checked && (
          <div className={`result-msg ${correctCount === q.items.length ? "betul" : "salah"}`}>
            {correctCount === q.items.length
              ? "✅ Tahniah! Semua jawapan betul!"
              : `❌ ${correctCount}/${q.items.length} betul. Kotak merah = jawapan salah.`}
          </div>
        )}

        {!checked ? (
          <button className="submit-btn" onClick={checkAnswers}>Semak Jawapan</button>
        ) : (
          <button className="submit-btn" onClick={nextQuestion}>
            {currentQ === questions.length - 1 ? "Lihat Keputusan ➜" : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="score-display">Markah semasa: {score}</p>

      </div>

      <button className="back-btn" onClick={() => navigate("/game")}>← Kembali</button>

      <div className="bottom-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen />
        <FaInfoCircle />
        <FaQuestionCircle />
      </div>

    </div>
  );
}

export default DragGame;