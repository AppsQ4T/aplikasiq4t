import "./DragGamePTajwid.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function DragGamePTajwid() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevScore = location.state?.score || 0;

  const questions = [
    {
      instruction: "Susunkan kaedah yang betul untuk membaca istia'zah dan basmalah di awal surah jika ingin memutuskan semua bahagian.",
      choices: [
        { id: "b", text: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ." },
        { id: "a", text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ." },
        { id: "c", text: "وَٱلَّيۡلِ إِذَا يَغۡشَى١" },
      ],
      answer: ["a", "b", "c"],
    },
    {
      instruction: "Susunkan kaedah yang betul untuk membaca istia'zah dan basmalah di awal surah jika ingin menyambungkan basmalah dengan ayat pertama surah.",
      choices: [
         { id: "b", text: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ" },
        { id: "a", text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ." },
        { id: "c", text: "وَٱلَّيۡلِ إِذَا يَغۡشَى١" },
      ],
      answer: ["a", "b", "c"],
    },
    {
      instruction: "Susunkan kaedah untuk membaca basmalah antara dua surah jika ingin menyambungkan ayat terakhir surah sebelumnya dengan basmalah dan permulaan surah baharu.",
      choices: [
        { id: "a", text: "وَأَمَّا بِنِعۡمَةِ رَبِّكَ فَحَدِّثۡ" },
        { id: "c", text: "وَٱلَّيۡلِ إِذَا يَغۡشَى١" },
         { id: "b", text: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ" },
      ],
      answer: ["a", "b", "c"],
    },
    {
      instruction: "Susunkan kaedah untuk membaca basmalah antara dua surah jika ingin memutuskan ayat terakhir surah sebelumnya, dan menyambungkan basmalah dengan permulaan surah baharu.",
      choices: [
        { id: "b", text: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ" },
        { id: "c", text: "وَٱلَّيۡلِ إِذَا يَغۡشَى١" },
         { id: "a", text: "وَأَمَّا بِنِعۡمَةِ رَبِّكَ فَحَدِّثۡ١١" },
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

  function handleDragStart(choice) { setDragging(choice); }

  function handleDrop(zoneIndex) {
    if (!dragging || checked) return;
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
      navigate("/resultptajwid", { state: { score, total: 8 } });
    }
  }

  return (
    <div className="draggameptajwid-page">

      <div className="draggameptajwid-header">
        <img src={logo} alt="Logo" className="draggameptajwid-logo" />
        <h1>SURAH AL-LAIL</h1>
      </div>

      <div className="draggameptajwid-card">

        <div className="draggameptajwid-badge">
          Soalan {currentQ + 5} / 8
        </div>

        <p className="draggameptajwid-instruction">{q.instruction}</p>

        {/* DROP ZONES */}
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

        {/* POOL */}
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
          <div className={`draggameptajwid-result ${isCorrect ? "betul" : "salah"}`}>
            {isCorrect
              ? "✅ Tahniah! Susunan anda BETUL."
              : "❌ Susunan SALAH. Kotak merah = urutan salah."}
          </div>
        )}

        {!checked ? (
          <button className="draggameptajwid-submit" onClick={checkAnswers}>
            Semak Jawapan
          </button>
        ) : (
          <button className="draggameptajwid-submit" onClick={nextQuestion}>
            {currentQ === questions.length - 1 ? "Lihat Keputusan ➜" : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="draggameptajwid-score">Markah semasa: {score}</p>

      </div>

      <button className="draggameptajwid-back" onClick={() => navigate("/gameptajwid")}>
        ← Kembali
      </button>

      <div className="draggameptajwid-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default DragGamePTajwid;