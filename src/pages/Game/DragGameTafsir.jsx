import "./DragGameTafsir.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function DragGameTafsir() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevScore = location.state?.score || 0;

  const questions = [
    {
      instruction: "Padankan ringkasan bahagian surah al-Nas.",
      items: [
        { id: "q1", label: "Bahagian awal (ayat 1-4)", answer: "awal" },
        { id: "q2", label: "Bahagian akhir (ayat 5-6)", answer: "akhir" },
      ],
      choices: [
         { id: "akhir", label: ".Jenis syaitan yang membisik, sama ada daripada kalangan jin atau manusia" },
        { id: "awal",  label: ".Permohonan perlindungan kepada Allah daripada kejahatan syaitan" },
       
        
      ],
    },
    {
      instruction: "Nyatakan makna bagi kalimah yang berikut.",
      items: [
        { id: "q1", label: "رَبِّ ٱلنَّاسِ", answer: "rabb" },
        { id: "q2", label: "ٱلۡوَسۡوَاسِ", answer: "waswas" },
      ],
      choices: [
        { id: "rabb",   label: ".Tuhan yang memelihara manusia" },
        { id: "waswas", label: ".Yang menggoda, membisikkan kejahatan ke dalam hati" },
      ],
    },
    {
      instruction: "Kenal pasti terjemahan ayat yang berikut.",
      items: [
        { id: "q1", label: "مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ", answer: "sharr" },
        { id: "q2", label: "مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ", answer: "jinn" },
      ],
      choices: [
         { id: "jinn",  label: ".Daripada kalangan jin dan manusia" },
        { id: "sharr", label: ".Daripada kejahatan pembisik, penghasut yang timbul tenggelam" },
       
      
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
      navigate("/resulttafsir", { state: { score, total: 9 } });
    }
  }

  const usedChoices = Object.values(dropped);

  return (
    <div className="draggametafsir-page">

      <div className="draggametafsir-header">
        <img src={logo} alt="Logo" className="draggametafsir-logo" />
        <h1>SURAH AL-NAS</h1>
      </div>

      <div className="draggametafsir-card">

        <div className="draggametafsir-badge">
          Soalan {currentQ + 4} / 6
        </div>

        <p className="draggametafsir-instruction">{q.instruction}</p>

        {q.items.map((item) => {
          const val = dropped[item.id];
          const choiceLabel = q.choices.find((c) => c.id === val)?.label;
          const isCorrect = checked ? val === item.answer : null;

          return (
            <div key={item.id} className="drop-question">
              <p className="draggametafsir-question">{item.label}</p>
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
          <div className={`draggametafsir-result ${correctCount === q.items.length ? "betul" : "salah"}`}>
            {correctCount === q.items.length
              ? "✅ Tahniah! Semua jawapan betul!"
              : `❌ ${correctCount}/${q.items.length} betul. Kotak merah = jawapan salah.`}
          </div>
        )}

        {!checked ? (
          <button className="draggametafsir-submit" onClick={checkAnswers}>Semak Jawapan</button>
        ) : (
          <button className="draggametafsir-submit" onClick={nextQuestion}>
            {currentQ === questions.length - 1 ? "Lihat Keputusan ➜" : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="draggametafsir-score">Markah semasa: {score}</p>

      </div>

      <button className="draggametafsir-back" onClick={() => window.location.href = "/gametafsir"}>
        ← Kembali
      </button>

      <div className="draggametafsir-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default DragGameTafsir;