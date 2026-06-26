import "./DragGame.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function DragGame() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevScore = location.state?.score || 0;

  const questions = [
    // SOALAN 4
    {
      arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ ۝ مَلِكِ ٱلنَّاسِ ۝ إِلَٰهِ ٱلنَّاسِ ۝ مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ",
      items: [
        {
          id: "q1",
          label: "1. Nun bertasydid (نّ) dalam kalimah ٱلنَّاسِ dibaca dengan cara:",
          answer: "ghunnah",
        },
        {
          id: "q2",
          label: "2. Nun sakinah (نْ) bertemu huruf syin (ش) dalam kalimah مِن شَرِّ dibaca dengan cara:",
          answer: "ikhfa",
        },
      ],
      choices: [
        { id: "ghunnah", label: "Ghunnah (dengung)" },
        { id: "ikhfa",   label: "Ikhfa' (samar)" },
        { id: "izhar",   label: "Izhar (jelas)" },
        { id: "idgham",  label: "Idgham (masuk)" },
      ],
    },
    // SOALAN 5 — tukar ikut kehendak kau
    {
      arabic: "مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ",
      items: [
        {
          id: "q1",
          label: "1. Lam mati (لْ) dalam kalimah ٱلۡوَسۡوَاسِ bertemu huruf wau (و) dibaca dengan cara:",
          answer: "izhar",
        },
        {
          id: "q2",
          label: "2. Nun bertasydid (نّ) dalam kalimah ٱلۡخَنَّاسِ dibaca dengan cara:",
          answer: "ghunnah",
        },
      ],
      choices: [
        { id: "ghunnah", label: "Ghunnah (dengung)" },
        { id: "ikhfa",   label: "Ikhfa' (samar)" },
        { id: "izhar",   label: "Izhar (jelas)" },
        { id: "idgham",  label: "Idgham (masuk)" },
      ],
    },
    // SOALAN 6 — tukar ikut kehendak kau
    {
      arabic: "ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ ۝ مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ",
      items: [
        {
          id: "q1",
          label: "1. Nun bertasydid (نّ) dalam kalimah ٱلۡجِنَّةِ dibaca dengan cara:",
          answer: "ghunnah",
        },
        {
          id: "q2",
          label: "2. Nun berbaris atas (نَ) dalam kalimah مِنَ bertemu alif (ا) dalam ٱلۡجِنَّةِ dibaca dengan cara:",
          answer: "izhar",
        },
      ],
      choices: [
        { id: "ghunnah", label: "Ghunnah (dengung)" },
        { id: "ikhfa",   label: "Ikhfa' (samar)" },
        { id: "izhar",   label: "Izhar (jelas)" },
        { id: "idgham",  label: "Idgham (masuk)" },
      ],
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [dropped, setDropped]   = useState({});
  const [dragging, setDragging] = useState(null);
  const [checked, setChecked]   = useState(false);
  const [score, setScore]       = useState(prevScore);
  const [correctCount, setCorrectCount] = useState(0);

  const q = questions[currentQ];

  function handleDragStart(choiceId) {
    setDragging(choiceId);
  }

  function handleDrop(itemId) {
    if (!dragging) return;
    setDropped((prev) => ({ ...prev, [itemId]: dragging }));
    setDragging(null);
  }

  function handleRemove(itemId) {
    setDropped((prev) => {
      const next = { ...prev };
      delete next[itemId];
      return next;
    });
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
      navigate("/result", { state: { score } });
    }
  }

  const usedChoices = Object.values(dropped);
  const isLastQuestion = currentQ === questions.length - 1;

  return (
    <div className="draggame-page">
      <h1>🎮 SURAH AL-NAS</h1>
      <h2>Soalan {currentQ + 4} / 6</h2>
      <p className="instruction">Seret jawapan ke dalam kotak yang betul.</p>

      <div className="arabic">{q.arabic}</div>

      {q.items.map((item) => {
        const val = dropped[item.id];
        const choiceLabel = q.choices.find((c) => c.id === val)?.label;
        const isCorrect = checked ? val === item.answer : null;

        return (
          <div key={item.id} className="drop-question">
            <p className="question">{item.label}</p>
            <div
              className={`drop-zone ${val ? "filled" : ""} ${
                checked ? (isCorrect ? "correct" : "wrong") : ""
              }`}
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

      {/* RESULT MESSAGE */}
      {checked && (
        <div className={`result-msg ${correctCount === q.items.length ? "correct" : "wrong"}`}>
          {correctCount === q.items.length
            ? "✅ Tahniah! Semua jawapan betul!"
            : `❌ ${correctCount}/${q.items.length} betul. Kotak merah = jawapan salah.`}
        </div>
      )}

      {/* BUTTON: tukar antara Semak / Seterusnya */}
      {!checked ? (
        <button className="submit-btn" onClick={checkAnswers}>
          Semak Jawapan
        </button>
      ) : (
        <button className="submit-btn" onClick={nextQuestion}>
          {isLastQuestion ? "Lihat Keputusan ➜" : "Soalan Seterusnya ➜"}
        </button>
      )}

      <h3>Markah semasa: {score}</h3>

      <button className="back-btn" onClick={() => navigate("/game")}>
        ← Kembali
      </button>
    </div>
  );

  navigate("/result", {
  state: {
    score: score,
    total: 9  // 3 soalan betul/salah (1 markah each) + 3 soalan drag (2 markah each)
  }
});
}

export default DragGame;