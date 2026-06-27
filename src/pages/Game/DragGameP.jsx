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
      arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ وَٱلَّيۡلِ إِذَا يَغۡشَىٰ١",
      items: [
        { id: "a", text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ" },
        { id: "b", text: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ" },
        { id: "c", text: "وَٱلَّيۡلِ إِذَا يَغۡشَىٰ١" },
      ],
      answer: ["a", "b", "c"],
    },
    {
      instruction: "Soalan 6: Susunkan cara membaca istia'zah dan basmalah di awal surah jika ingin menyambungkan basmalah dengan ayat pertama surah.",
      arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ وَٱلَّيۡلِ إِذَا يَغۡشَىٰ١",
      items: [
        { id: "a", text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ" },
        { id: "b", text: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ وَٱلَّيۡلِ إِذَا يَغۡشَىٰ١" },
      ],
      answer: ["a", "b"],
    },
    {
      instruction: "Soalan 7: Susunkan cara bacaan basmalah antara dua surah jika ingin menyambungkan ayat terakhir surah sebelumnya, basmalah, dan permulaan surah baharu.",
      arabic: "وَأَمَّا بِنِعۡمَةِ رَبِّكَ فَحَدِّثۡ١١ بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ وَٱلَّيۡلِ إِذَا يَغۡشَىٰ١",
      items: [
        { id: "a", text: "وَأَمَّا بِنِعۡمَةِ رَبِّكَ فَحَدِّثۡ بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ وَٱلَّيۡلِ إِذَا يَغۡشَىٰ١" },
      ],
      answer: ["a"],
    },
    {
      instruction: "Soalan 8: Susunkan cara bacaan basmalah antara dua surah jika ingin memutuskan ayat terakhir surah sebelumnya, dan menyambungkan basmalah dengan permulaan surah baharu.",
      arabic: "وَأَمَّا بِنِعۡمَةِ رَبِّكَ فَحَدِّثۡ١١ بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ وَٱلَّيۡلِ إِذَا يَغۡشَىٰ١",
      items: [
        { id: "a", text: "وَأَمَّا بِنِعۡمَةِ رَبِّكَ فَحَدِّثۡ١١" },
        { id: "b", text: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ وَٱلَّيۡلِ إِذَا يَغۡشَىٰ١" },
      ],
      answer: ["a", "b"],
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [arranged, setArranged] = useState([]);
  const [pool, setPool] = useState([...questions[0].items]);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(prevScore);

  const q = questions[currentQ];

  function addToArranged(item) {
    if (checked) return;
    setArranged((prev) => [...prev, item]);
    setPool((prev) => prev.filter((i) => i.id !== item.id));
  }

  function removeFromArranged(item) {
    if (checked) return;
    setPool((prev) => [...prev, item]);
    setArranged((prev) => prev.filter((i) => i.id !== item.id));
  }

  function checkAnswers() {
    if (arranged.length !== q.answer.length) {
      alert("Sila susun semua bahagian dahulu.");
      return;
    }
    const correct = arranged.every((item, i) => item.id === q.answer[i]);
    setIsCorrect(correct);
    if (correct) setScore((s) => s + 1);
    setChecked(true);
  }

  function nextQuestion() {
    if (currentQ < questions.length - 1) {
      const next = currentQ + 1;
      setCurrentQ(next);
      setArranged([]);
      setPool([...questions[next].items]);
      setChecked(false);
      setIsCorrect(false);
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

        <div className="arabic">{q.arabic}</div>

        <p className="instruction">{q.instruction}</p>

        {/* KAWASAN SUSUN URUTAN */}
        <div className="arrange-zone">
          <p className="zone-label">Susunan kamu:</p>
          {arranged.length === 0 ? (
            <p className="placeholder">Klik ayat di bawah untuk susun...</p>
          ) : (
            arranged.map((item, i) => (
              <div
                key={item.id}
                className={`arranged-item ${checked ? (isCorrect ? "correct" : "wrong") : ""}`}
                onClick={() => removeFromArranged(item)}
              >
                <span className="arrange-num">{i + 1}.</span>
                <span className="arrange-text">{item.text}</span>
                {!checked && <span className="remove-x">✕</span>}
              </div>
            ))
          )}
        </div>

        {/* POOL PILIHAN */}
        {pool.length > 0 && (
          <div className="pool-zone">
            <p className="zone-label">Pilihan:</p>
            <div className="pool-items">
              {pool.map((item) => (
                <div
                  key={item.id}
                  className="pool-item"
                  onClick={() => addToArranged(item)}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        )}

        {checked && (
          <div className={`result-msg ${isCorrect ? "betul" : "salah"}`}>
            {isCorrect
              ? "✅ Tahniah! Susunan anda BETUL."
              : "❌ Susunan SALAH. Cuba perhatikan semula."}
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