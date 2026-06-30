import "./DragGamePTahfiz.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function DragGamePTahfiz() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevScore = location.state?.score || 0;

  const questions = [
    {
      instruction: "Soalan 5: Padankan mengikut ayat yang betul. Ayat (4), (6) dan (8) dalam surah Al-Lail.",
      context: [
        { num: 4, text: "________" },
        { num: 5, text: "فَأَمَّا مَنۡ أَعۡطَىٰ وَٱتَّقَىٰ" },
        { num: 6, text: "________" },
        { num: 7, text: "فَسَنُيَسِّرُهُۥ لِلۡيُسۡرَىٰ" },
        { num: 8, text: "________" },
      ],
      items: [
        { id: "q1", label: "Ayat 4", answer: "ayat4" },
        { id: "q2", label: "Ayat 6", answer: "ayat6" },
        { id: "q3", label: "Ayat 8", answer: "ayat8" },
      ],
      choices: [
        { id: "ayat4", label: "إِنَّ سَعۡيَكُمۡ لَشَتَّىٰ" },
        { id: "ayat6", label: "وَصَدَّقَ بِٱلۡحُسۡنَىٰ" },
        { id: "ayat8", label: "وَأَمَّا مَنۢ بَخِلَ وَٱسۡتَغۡنَىٰ" },
      ],
    },
    {
      instruction: "Padankan nombor ayat di bawah ke ayat yang betul.",
      items: [
        { id: "q1", label: "Ayat 12", answer: "ayat12" },
        { id: "q2", label: "Ayat 13", answer: "ayat13" },
        { id: "q3", label: "Ayat 14", answer: "ayat14" },
      ],
      choices: [
 { id: "ayat14", label: "فَأَنذَرۡتُكُمۡ نَارٗا تَلَظَّىٰ" },
        { id: "ayat13", label: "وَإِنَّ لَنَا لَلۡأٓخِرَةَ وَٱلۡأُولَىٰ" },
      { id: "ayat12", label: "إِنَّ عَلَيۡنَا لَلۡهُدَىٰ" },
      ],
    },
    {
      instruction: "Padankan ayat di bawah ke nombor ayat yang betul.",
      items: [
        { id: "q1", label: "وَأَمَّا مَنۢ بَخِلَ وَٱسۡتَغۡنَىٰ", answer: "nombor8" },
        { id: "q2", label: "وَكَذَّبَ بِٱلۡحُسۡنَىٰ", answer: "nombor9" },
        { id: "q3", label: "فَسَنُيَسِّرُهُۥ لِلۡعُسۡرَىٰ", answer: "nombor10" },
      ],
      choices: [
        { id: "nombor8",  label: "Nombor 8" },
        { id: "nombor10", label: "Nombor 10" },
        { id: "nombor9",  label: "Nombor 9" },
      ],
    },
    {
         instruction: "Susun semula potongan ayat yang berikut: إِلَّا - ٱلۡأَعۡلَىٰ – وَجۡهِ - ٱبۡتِغَآءَ – رَبِّهِ",
      items: [
        { id: "q1", label: "Perkataan keempat", answer: "illa" },
         { id: "q2", label: "Perkataan kelima", answer: "ibtighaa" },
        { id: "q3", label: "Perkataan ketiga", answer: "wajhi" },
        { id: "q4", label: "Perkataan kedua", answer: "rabbi" },
         { id: "q5", label: "Perkataan pertama", answer: "alaala" },
         
      ],
      choices: [
        { id: "alaala",    label: "ٱلۡأَعۡلَىٰ" },
       { id: "ibtighaa",  label: "ٱبۡتِغَآءَ" },
        { id: "wajhi",     label: "وَجۡهِ" },
         { id: "illa",  label: "إِلَّا " },
            { id: "rabbi",     label: "رَبِّهِ" },
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
      navigate("/resultptahfiz", { state: { score, total: 14 } });
    }
  }

  const usedChoices = Object.values(dropped);

  return (
    <div className="draggameptahfiz-page">

      <div className="draggameptahfiz-header">
        <img src={logo} alt="Logo" className="draggameptahfiz-logo" />
        <h1>SURAH AL-LAIL</h1>
      </div>

      <div className="draggameptahfiz-card">

        <div className="draggameptahfiz-badge">
          Soalan {currentQ + 5} / 8
        </div>

        <p className="draggameptahfiz-instruction">{q.instruction}</p>

        {/* CONTEXT BOX — papar bila ada */}
        {q.context && (
          <div className="context-box">
            {q.context.map((row) => (
              <div key={row.num} className="context-row">
                <span className="context-num">({row.num})</span>
                <span className={`context-text ${row.text === "________" ? "blank" : ""}`}>
                  {row.text}
                </span>
              </div>
            ))}
          </div>
        )}

        {q.items.map((item) => {
          const val = dropped[item.id];
          const choiceLabel = q.choices.find((c) => c.id === val)?.label;
          const isCorrect = checked ? val === item.answer : null;

          return (
            <div key={item.id} className="drop-question">
              <p className="draggameptahfiz-question">{item.label}</p>
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
          <div className={`draggameptahfiz-result ${correctCount === q.items.length ? "betul" : "salah"}`}>
            {correctCount === q.items.length
              ? "✅ Tahniah! Semua jawapan betul!"
              : `❌ ${correctCount}/${q.items.length} betul. Kotak merah = jawapan salah.`}
          </div>
        )}

        {!checked ? (
          <button className="draggameptahfiz-submit" onClick={checkAnswers}>Semak Jawapan</button>
        ) : (
          <button className="draggameptahfiz-submit" onClick={nextQuestion}>
            {currentQ === questions.length - 1 ? "Lihat Keputusan ➜" : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="draggameptahfiz-score">Markah semasa: {score}</p>

      </div>

      <button className="draggameptahfiz-back" onClick={() => window.location.href = "/gameptahfiz"}>
        ← Kembali
      </button>

      <div className="draggameptahfiz-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default DragGamePTahfiz;