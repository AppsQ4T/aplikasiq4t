import "./DragGameTahfiz.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function DragGameTahfiz() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevScore = location.state?.score || 0;

  const questions = [
    {
      instruction: "Padankan ayat kedua dan keempat dalam surah al-Nas.",
      items: [
        { id: "q1", label: "Ayat kedua", answer: "malikannas" },
        { id: "q2", label: "Ayat keempat", answer: "minsharri" },
      ],
      choices: [
        { id: "minsharri",  label: "مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ" },
        { id: "malikannas", label: "مَلِكِ ٱلنَّاسِ" },
        
      ],
    },
    {
      instruction: "Nyatakan nombor ayat di bawah.",
      items: [
        { id: "q1", label: "إِلَٰهِ ٱلنَّاسِ", answer: "ayat3" },
        { id: "q2", label: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ", answer: "ayat1" },
      ],
      choices: [
        { id: "ayat1", label: "Ayat pertama" },
        { id: "ayat3", label: "Ayat ketiga" },
      ],
    },
    {
      instruction: "Kenal pasti susunan bahagian ayat yang berikut.",
      items: [
        { id: "q1", label: "رَبِّ ٱلنَّاسِ - مَلِكِ ٱلنَّاسِ - إِلَٰهِ ٱلنَّاسِ", answer: "awalawal" },
        { id: "q2", label: "مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ", answer: "akhirsurah" },
      ],
      choices: [
        { id: "akhirsurah", label: "Bahagian akhir surah" },
       { id: "awalawal",   label: "Bahagian awal surah" },
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
      navigate("/resulttahfiz", { state: { score, total: 9 } });
    }
  }

  const usedChoices = Object.values(dropped);

  return (
    <div className="draggametahfiz-page">

      <div className="draggametahfiz-header">
        <img src={logo} alt="Logo" className="draggametahfiz-logo" />
        <h1>SURAH AL-NAS</h1>
      </div>

      <div className="draggametahfiz-card">

        <div className="draggametahfiz-badge">
          Soalan {currentQ + 4} / 6
        </div>

        <p className="draggametahfiz-instruction">{q.instruction}</p>

        {q.items.map((item) => {
          const val = dropped[item.id];
          const choiceLabel = q.choices.find((c) => c.id === val)?.label;
          const isCorrect = checked ? val === item.answer : null;

          return (
            <div key={item.id} className="drop-question">
              <p className="draggametahfiz-question">{item.label}</p>
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
          <div className={`draggametahfiz-result ${correctCount === q.items.length ? "betul" : "salah"}`}>
            {correctCount === q.items.length
              ? "✅ Tahniah! Semua jawapan betul!"
              : `❌ ${correctCount}/${q.items.length} betul. Kotak merah = jawapan salah.`}
          </div>
        )}

        {!checked ? (
          <button className="draggametahfiz-submit" onClick={checkAnswers}>Semak Jawapan</button>
        ) : (
          <button className="draggametahfiz-submit" onClick={nextQuestion}>
            {currentQ === questions.length - 1 ? "Lihat Keputusan ➜" : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="draggametahfiz-score">Markah semasa: {score}</p>

      </div>

      <button className="draggametahfiz-back" onClick={() => window.location.href = "/gametahfiz"}>
        ← Kembali
      </button>

      <div className="draggametahfiz-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default DragGameTahfiz;