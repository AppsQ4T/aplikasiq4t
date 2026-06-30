import "./GameLTahfiz.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function GameLTahfiz() {
  const navigate = useNavigate();

  const questions = [
    {
      arabic: "عَلَيۡهِمۡ – أَمۡ – تُنذِرۡهُمۡ – لَمۡ – يُؤۡمِنُونَ - وَسَوَآءٌ – لَا – ءَأَنذَرۡتَهُمۡ",
      question: "Susun semula ayat berikut mengikut susunan yang betul.",
      options: [
        "وَسَوَآءٌ ءَأَنذَرۡتَهُمۡ عَلَيۡهِمۡ أَمۡ لَمۡ تُنذِرۡهُمۡ لَا يُؤۡمِنُونَ",
        "وَسَوَآءٌ عَلَيۡهِمۡ ءَأَنذَرۡتَهُمۡ تُنذِرۡهُمۡ أَمۡ لَمۡ لَا يُؤۡمِنُونَ",
        "وَسَوَآءٌ عَلَيۡهِمۡ ءَأَنذَرۡتَهُمۡ أَمۡ لَمۡ تُنذِرۡهُمۡ لَا يُؤۡمِنُونَ",
        "وَسَوَآءٌ عَلَيۡهِمۡ ءَأَنذَرۡتَهُمۡ أَمۡ لَمۡ يُؤۡمِنُونَ لَا تُنذِرۡهُمۡ",
      ],
      answer: 2,
    },
    {
      arabic: "وَجَآءَ مِنۡ أَقۡصَا ٱلۡمَدِينَةِ رَجُلٞ يَسۡعَىٰ ________ ٢٠",
      question: "Lengkapkan ayat yang berikut.",
      options: [
        "مَن لَّا يَسۡـَٔلُكُمۡ أَجۡرٗا وَهُم مُّهۡتَدُونَ",
        "قَالَ يَٰقَوۡمِ ٱتَّبِعُواْ ٱلۡمُرۡسَلِينَ",
        "لَّا تُغۡنِ عَنِّي شَفَٰعَتُهُمۡ شَيۡـٔٗا وَلَا يُنقِذُونِ",
        "وَإِلَيۡهِ تُرۡجَعُونَ",
      ],
      answer: 1,
    },
    {
      arabic: "لِيَأۡكُلُواْ مِن ثَمَرِهِۦ وَمَا عَمِلَتۡهُ أَيۡدِيهِمۡۚ أَفَلَا يَشۡكُرُونَ ٣٥  ________ ٣٦",
      question: "Lengkapkan ayat yang berikut.",
      options: [
        "وَجَعَلۡنَا فِيهَا جَنَّٰتٖ مِّن نَّخِيلٖ وَأَعۡنَٰبٖ وَفَجَّرۡنَا فِيهَا مِنَ ٱلۡعُيُونِ",
        "سُبۡحَٰنَ ٱلَّذِي خَلَقَ ٱلۡأَزۡوَٰجَ كُلَّهَا مِمَّا تُنۢبِتُ ٱلۡأَرۡضُ وَمِنۡ أَنفُسِهِمۡ وَمِمَّا لَا يَعۡلَمُونَ",
        "وَٱلشَّمۡسُ تَجۡرِي لِمُسۡتَقَرّٖ لَّهَاۚ ذَٰلِكَ تَقۡدِيرُ ٱلۡعَزِيزِ ٱلۡعَلِيمِ",
        "وَءَايَةٞ لَّهُمُ ٱلَّيۡلُ نَسۡلَخُ مِنۡهُ ٱلنَّهَارَ فَإِذَا هُم مُّظۡلِمُونَ",
      ],
      answer: 1,
    },
    {
      arabic: "",
      question: "Antara yang berikut, yang manakah ayat ke-35 dalam surah ini?",
      options: [
        "قَالُواْ مَآ أَنتُمۡ إِلَّا بَشَرٞ مِّثۡلُنَا وَمَآ أَنزَلَ ٱلرَّحۡمَٰنُ مِن شَيۡءٍ إِنۡ أَنتُمۡ إِلَّا تَكۡذِبُونَ",
        "إِنِّيٓ ءَامَنتُ بِرَبِّكُمۡ فَٱسۡمَعُونِ",
        "لِيَأۡكُلُواْ مِن ثَمَرِهِۦ وَمَا عَمِلَتۡهُ أَيۡدِيهِمۡۚ أَفَلَا يَشۡكُرُونَ",
        "وَإِذَا قِيلَ لَهُمُ ٱتَّقُواْ مَا بَيۡنَ أَيۡدِيكُمۡ وَمَا خَلۡفَكُمۡ لَعَلَّكُمۡ تُرۡحَمُونَ",
      ],
      answer: 2,
    },
    {
      arabic: "",
      question: "Nyatakan ayat terakhir dalam surah ini.",
      options: [
        "فَسُبۡحَٰنَ ٱلَّذِي بِيَدِهِۦ مَلَكُوتُ كُلِّ شَيۡءٖ وَإِلَيۡهِ تُرۡجَعُونَ",
        "أَوَلَيۡسَ ٱلَّذِي خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ بِقَٰدِرٍ عَلَىٰٓ أَن يَخۡلُقَ مِثۡلَهُمۚ بَلَىٰ وَهُوَ ٱلۡخَلَّٰقُ ٱلۡعَلِيمُ",
        "ٱلَّذِي جَعَلَ لَكُم مِّنَ ٱلشَّجَرِ ٱلۡأَخۡضَرِ نَارٗا فَإِذَآ أَنتُم مِّنۡهُ تُوقِدُونَ",
        "قُلۡ يُحۡيِيهَا ٱلَّذِيٓ أَنشَأَهَآ أَوَّلَ مَرَّةٖۖ وَهُوَ بِكُلِّ خَلۡقٍ عَلِيمٌ",
      ],
      answer: 0,
    },
    {
      arabic: "وَمَا ______ ٱلشِّعۡرَ وَمَا يَنۢبَغِي لَهُۥٓۚ إِنۡ هُوَ إِلَّا ذِكۡرٞ وَقُرۡءَانٞ مُّبِينٞ ٦٩",
      question: "Lengkapkan ayat yang berikut.",
      options: [
        "ذِكۡرٞ",
        "عَلَّمۡنَٰهُ",
        "يَنۢبَغِي",
        "مُّبِينٞ",
      ],
      answer: 1,
    },
    {
      arabic: "",
      question: "Pilih ayat ke-27 daripada surah ini.",
      options: [
        "بِمَا غَفَرَ لِي رَبِّي وَجَعَلَنِي مِنَ ٱلۡمُكۡرَمِينَ",
        "وَجَعَلۡنَا فِيهَا جَنَّٰتٖ مِّن نَّخِيلٖ وَأَعۡنَٰبٖ وَفَجَّرۡنَا فِيهَا مِنَ ٱلۡعُيُونِ",
        "وَإِذَا قِيلَ لَهُمۡ أَنفِقُواْ مِمَّا رَزَقَكُمُ ٱللَّهُ قَالَ ٱلَّذِينَ كَفَرُواْ لِلَّذِينَ ءَامَنُوٓاْ أَنُطۡعِمُ مَن لَّوۡ يَشَآءُ ٱللَّهُ أَطۡعَمَهُۥٓ",
        "أَلَمۡ أَعۡهَدۡ إِلَيۡكُمۡ يَٰبَنِيٓ ءَادَمَ أَن لَّا تَعۡبُدُواْ ٱلشَّيۡطَٰنَۖ إِنَّهُۥ لَكُمۡ عَدُوّٞ مُّبِينٞ",
      ],
      answer: 0,
    },
    {
      arabic: "",
      question: "Teliti ayat manakah yang berada di kedudukan ke-10 dalam surah ini.",
      options: [
        "إِنَّمَا تُنذِرُ مَنِ ٱتَّبَعَ ٱلذِّكۡرَ وَخَشِيَ ٱلرَّحۡمَٰنَ بِٱلۡغَيۡبِۖ فَبَشِّرۡهُ بِمَغۡفِرَةٖ وَأَجۡرٖ كَرِيمٍ",
        "وَجَعَلۡنَا مِنۢ بَيۡنِ أَيۡدِيهِمۡ سَدّٗا وَمِنۡ خَلۡفِهِمۡ سَدّٗا فَأَغۡشَيۡنَٰهُمۡ فَهُمۡ لَا يُبۡصِرُونَ",
        "وَسَوَآءٌ عَلَيۡهِمۡ ءَأَنذَرۡتَهُمۡ أَمۡ لَمۡ تُنذِرۡهُمۡ لَا يُؤۡمِنُونَ",
        "وَٱضۡرِبۡ لَهُم مَّثَلًا أَصۡحَٰبَ ٱلۡقَرۡيَةِ إِذۡ جَآءَهَا ٱلۡمُرۡسَلُونَ",
      ],
      answer: 2,
    },
    {
      arabic: "فَٱلۡيَوۡمَ لَا تُظۡلَمُ نَفۡسٞ شَيۡـٔٗا وَلَا تُجۡزَوۡنَ إِلَّا مَا كُنتُمۡ تَعۡمَلُونَ ٥٤",
      question: "Apakah ayat selepas ayat ini?",
      options: [
        "سَلَٰمٞ قَوۡلٗا مِّن رَّبّٖ رَّحِيمٖ",
        "لَهُمۡ فِيهَا فَٰكِهَةٞ وَلَهُم مَّا يَدَّعُونَ",
        "هُمۡ وَأَزۡوَٰجُهُمۡ فِي ظِلَٰلٍ عَلَى ٱلۡأَرَآئِكِ مُتَّكِـُٔونَ",
        "إِنَّ أَصۡحَٰبَ ٱلۡجَنَّةِ ٱلۡيَوۡمَ فِي شُغُلٖ فَٰكِهُونَ",
      ],
      answer: 3,
    },
    {
      arabic: "أَوَلَمۡ يَرَوۡاْ أَنَّا خَلَقۡنَا لَهُم مِّمَّا عَمِلَتۡ أَيۡدِينَآ أَنۡعَٰمٗا فَهُمۡ لَهَا مَٰلِكُونَ",
      question: "Nyatakan kedudukan ayat ini.",
      options: [
        "Ayat ke-80",
        "Ayat ke-70",
        "Ayat ke-81",
        "Ayat ke-71",
      ],
      answer: 3,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(false);

  const q = questions[currentQuestion];

  function checkAnswer() {
    if (answer === null) { alert("Sila pilih jawapan dahulu."); return; }
    if (answer === q.answer) {
      setResult("betul");
      setScore(score + 1);
    } else {
      setResult("salah");
    }
    setChecked(true);
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer(null);
      setResult("");
      setChecked(false);
    } else {
      navigate("/resultltahfiz", { state: { score, total: 10 } });
    }
  }

  return (
    <div className="gameltahfiz-page">

      <div className="gameltahfiz-header">
        <img src={logo} alt="Logo" className="gameltahfiz-logo" />
        <h1>SURAH YASIN</h1>
      </div>

      <div className="gameltahfiz-card">

        <div className="gameltahfiz-badge">
          Soalan {currentQuestion + 1} / {questions.length}
        </div>

        {q.arabic !== "" && (
          <div className="gameltahfiz-arabic">{q.arabic}</div>
        )}

        <p className="gameltahfiz-question">{q.question}</p>

        <div className="gameltahfiz-options">
          {q.options.map((opt, i) => (
            <div
              key={i}
              className={`gameltahfiz-option ${answer === i ? "selected" : ""} ${
                checked ? i === q.answer ? "correct" : answer === i ? "wrong" : "" : ""
              }`}
              onClick={() => !checked && setAnswer(i)}
            >
              <span className="gameltahfiz-label">{String.fromCharCode(65 + i)}.</span>
              <span>{opt}</span>
            </div>
          ))}
        </div>

        {checked && (
          <div className={`gameltahfiz-result ${result}`}>
            {result === "betul"
              ? "✅ Tahniah! Jawapan anda BETUL."
              : `❌ Jawapan SALAH. Jawapan betul: ${q.options[q.answer]}`}
          </div>
        )}

        {!checked ? (
          <button className="gameltahfiz-submit" onClick={checkAnswer}>
            Semak Jawapan
          </button>
        ) : (
          <button className="gameltahfiz-submit" onClick={nextQuestion}>
            {currentQuestion === questions.length - 1
              ? "Lihat Keputusan ➜"
              : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="gameltahfiz-score">Markah: {score} / {questions.length}</p>

      </div>

      <button className="gameltahfiz-back" onClick={() =>navigate("/tahfiz/lanjutan")}>
        ← Kembali
      </button>

      <div className="gameltahfiz-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default GameLTahfiz;