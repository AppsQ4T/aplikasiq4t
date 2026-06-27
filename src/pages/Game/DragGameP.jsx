import "./DragGameP.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function DragGameP() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevScore = location.state?.score || 0;

  const questions = [
    {
      instruction: "Soalan 5: Susunkan cara membaca istia'zah dan basmalah di awal surah jika ingin memutuskan semua bahagian.",
      choices: [
        { id: "c", text: "وَٱلَّيۡلِ إِذَا يَغۡشَىٰ(١)" },
        { id: "a", text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ." },
        { id: "b", text: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ." },
        
      ],
      answer: ["a", "b", "c"],
    },
    {
      instruction: "Soalan 6: Susunkan cara membaca istia'zah dan basmalah di awal surah jika ingin menyambungkan basmalah dengan ayat pertama surah.",
      choices: [
          { id: "b", text: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ" },
        { id: "a", text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ." },
        { id: "c", text: " وَٱلَّيۡلِ إِذَا يَغۡشَىٰ(١)" },
      ],
      answer: ["a", "b", "c"],
    },
    {
      instruction: "Soalan 7: Susunkan cara bacaan basmalah antara dua surah jika ingin menyambungkan ayat terakhir surah sebelumnya, basmalah, dan permulaan surah baharu.",
      choices: [
        { id: "a", text: "وَأَمَّا بِنِعۡمَةِ رَبِّكَ فَحَدِّثۡ  " },
        { id: "c", text: "  وَٱلَّيۡلِ إِذَا يَغۡشَىٰ(١) " },
        { id: "b", text: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ" },
      ],
      answer: ["a", "b", "c"],
    },
    {
      instruction: "Soalan 8: Susunkan cara bacaan basmalah antara dua surah jika ingin memutuskan ayat terakhir surah sebelumnya, dan menyambungkan basmalah dengan permulaan surah baharu.",
      choices: [
        { id: "b", text: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ " },
        { id: "c", text: "وَٱلَّيۡلِ إِذَا يَغۡشَىٰ (١)" },
                { id: "a", text: "وَأَمَّا بِنِعۡمَةِ رَبِّكَ فَحَدِّثۡ(١١)" },
      ],
      answer: ["a", "b", "c"],
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [dropZones, setDropZones] = useState({ 0: null, 1: null, 2: null });
  const [dragging, setDragging] = useState(null);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(prevScore);

  const q = questions[currentQ];
  const usedIds = Object.values(dropZones).filter(Boolean).map((v) => v.id);
  const pool = q.choices.filter((c) => !usedIds.includes(c.id));

  function handleDragStart(choice) {
    setDragging(choice);
  }

  function handleDrop(zoneIndex) {
    if (!dragging || checked) return;

    // Kalau zone dah ada isi, kembalikan ke pool
    const existing = dropZones[zoneIndex];
    setDropZones((prev) => ({ ...prev, [zoneIndex]: dragging }));
    setDragging(null);
  }

  function handleRemove(zoneIndex) {
    if (checked) return;
    setDropZones((prev) => ({ ...prev, [zoneIndex]: null }));
  }

  function checkAnswers() {
    const allFilled = Object.values(dropZones).every((v) => v !== null);
    if (!allFilled) { alert("Sila isi semua kotak dahulu."); return; }

    const correct =
      dropZones[0]?.id === q.answer[0] &&
      dropZones[1]?.id === q.answer[1] &&
      dropZones[2]?.id === q.answer[2];

    setIsCorrect(correct);
    if (correct) setScore((s) => s + 1);
    setChecked(true);
  }

  function nextQuestion() {
    if (currentQ < questions.length - 1) {
      setCurrentQ((c) => c + 1);
      setDropZones({ 0: null, 1: null, 2: null });
      setChecked(false);
      setIsCorrect(false);
      setDragging(null);
    } else {
      navigate("/resultP", { state: { score, total: 8 } });
    }
  }

  return (
    <div className="draggamep-page">

      <div className="game-header">
        <img src={logo} alt="Logo" className="game-logo" />
        <h1>SURAH AL-LAIL</h1>
      </div>

      <div className="game-card">

        <div className="soalan-badge">
          Soalan {currentQ + 5} / 8
        </div>

        <p className="instruction">{q.instruction}</p>

        {/* DROP ZONES — 3 kotak bernombor */}
        <div className="dropzones">
          <p className="zone-label">Susun jawapan:</p>
          {[0, 1, 2].map((i) => {
            const val = dropZones[i];
            const isZoneCorrect = checked ? val?.id === q.answer[i] : null;

            return (
              <div
                key={i}
                className={`dropzone ${val ? "filled" : ""} ${
                  checked ? (isZoneCorrect ? "correct" : "wrong") : ""
                }`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(i)}
              >
                <span className="zone-num">{i + 1}.</span>
                {val ? (
                  <div className="zone-content">
                    <span className="zone-text">{val.text}</span>
                    {!checked && (
                      <button className="remove-btn" onClick={() => handleRemove(i)}>✕</button>
                    )}
                  </div>
                ) : (
                  <span className="placeholder">Lepaskan ayat di sini...</span>
                )}
              </div>
            );
          })}
        </div>

        {/* POOL — pilihan ayat berselerak */}
        {pool.length > 0 && !checked && (
          <div className="pool-zone">
            <p className="zone-label">Pilihan ayat:</p>
            <div className="pool-items">
              {pool.map((choice) => (
                <div
                  key={choice.id}
                  className="pool-item"
                  draggable
                  onDragStart={() => handleDragStart(choice)}
                >
                  {choice.text}
                </div>
              ))}
            </div>
          </div>
        )}

        {checked && (
          <div className={`result-msg ${isCorrect ? "betul" : "salah"}`}>
            {isCorrect
              ? "✅ Tahniah! Susunan anda BETUL."
              : "❌ Susunan SALAH. Kotak merah = urutan salah."}
          </div>
        )}

        {!checked ? (
          <button className="submit-btn" onClick={checkAnswers}>
            Semak Jawapan
          </button>
        ) : (
          <button className="submit-btn" onClick={nextQuestion}>
            {currentQ === questions.length - 1 ? "Lihat Keputusan ➜" : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="score-display">Markah semasa: {score}</p>

      </div>

      <button className="back-btn" onClick={() => navigate("/gameP")}>
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

export default DragGameP;