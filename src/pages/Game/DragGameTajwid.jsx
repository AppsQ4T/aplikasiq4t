import "./DragGameTajwid.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function DragGameTajwid() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevScore = location.state?.score || 0;

  const questions = [
    {
      instruction: "Nyatakan hukum tajwid dalam kalimah yang berikut.",
      arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ١ مَلِكِ ٱلنَّاسِ٢ إِلَٰهِ ٱلنَّاسِ٣ مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ٤",
      items: [
        { id: "q1", label: "1. Bacaan huruf nun (ن) dalam kalimah ٱلنَّاسِ.", answer: "wajibghunnah" },
        { id: "q2", label: "2. Huruf nun (ن) bertemu huruf syin (ش) dalam kalimah مِن شَرِّ.", answer: "ikhfa" },
      ],
      choices: [
        { id: "ikhfa", label: "Ikhfa' haqiqi" },
 { id: "wajibghunnah", label: "Wajibul ghunnah" },
      ],
    },
    {
      instruction: "Jelaskan hukum tajwid dalam kalimah yang berikut.",
      arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ١ مَلِكِ ٱلنَّاسِ٢ إِلَٰهِ ٱلنَّاسِ٣ مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ٤",
      items: [
        { id: "q1", label: "1. Bacaan huruf ra' (ر) pada kalimah شَرِّ ٱلۡوَسۡوَاسِ.", answer: "nipis" },
        { id: "q2", label: "2. Bacaan huruf ra' (ر) pada kalimah بِرَبِّ.", answer: "tebal" },
      ],
      choices: [
          { id: "tebal", label: "Ra' (ر) tebal" },
        { id: "nipis", label: "Ra' (ر) nipis" },
      
      ],
    },
    {
      instruction: "Terangkan hukum tajwid dalam kalimah yang berikut.",
      arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ١ مَلِكِ ٱلنَّاسِ٢ إِلَٰهِ ٱلنَّاسِ٣",
      items: [
        { id: "q1", label: "1. Nun bertasydid berbaris atas (نَّ) yang disusuli dengan huruf alif (ا) ٱلنَّاسِ apabila diwaqaf.", answer: "madarid" },
        { id: "q2", label: "2. Hukum alif kecil (ٰ) pada kalimah إِلَٰهِ.", answer: "madasli" },
      ],
      choices: [
        { id: "madarid", label: "Mad arid lissukun" },
        { id: "madasli", label: "Mad asli" },
        
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
      navigate("/resulttajwid", { state: { score, total: 9 } });
    }
  }

  const usedChoices = Object.values(dropped);

  return (
    <div className="draggametajwid-page">

      <div className="draggametajwid-header">
        <img src={logo} alt="Logo" className="draggametajwid-logo" />
        <h1>SURAH AL-NAS</h1>
      </div>

      <div className="draggametajwid-card">

        <div className="draggametajwid-badge">
          Soalan {currentQ + 4} / 6
        </div>

        <div className="draggametajwid-arabic">{q.arabic}</div>

        <p className="draggametajwid-instruction">{q.instruction}</p>

        {q.items.map((item) => {
          const val = dropped[item.id];
          const choiceLabel = q.choices.find((c) => c.id === val)?.label;
          const isCorrect = checked ? val === item.answer : null;

          return (
            <div key={item.id} className="drop-question">
              <p className="draggametajwid-question">{item.label}</p>
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
          <div className={`draggametajwid-result ${correctCount === q.items.length ? "betul" : "salah"}`}>
            {correctCount === q.items.length
              ? "✅ Tahniah! Semua jawapan betul!"
              : `❌ ${correctCount}/${q.items.length} betul. Kotak merah = jawapan salah.`}
          </div>
        )}

        {!checked ? (
          <button className="draggametajwid-submit" onClick={checkAnswers}>Semak Jawapan</button>
        ) : (
          <button className="draggametajwid-submit" onClick={nextQuestion}>
            {currentQ === questions.length - 1 ? "Lihat Keputusan ➜" : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="draggametajwid-score">Markah semasa: {score}</p>

      </div>

      <button className="draggametajwid-back" onClick={() => navigate("/gametajwid")}>
        ← Kembali
      </button>

      <div className="draggametajwid-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default DragGameTajwid;