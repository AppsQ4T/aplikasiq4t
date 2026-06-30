import "./GameLTafsir.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaInfoCircle, FaQuestionCircle, FaHome } from "react-icons/fa";
import logo from "../../images/logo.png";

function GameLTafsir() {
  const navigate = useNavigate();

  const questions = [
    {
      arabic: "",
      question: "Nyatakan kandungan besar bagi surah Yasin.",
      options: [
        "Akidah, tugas Nabi SAW, dan al-ba'th.",
        "Ibadah, tugas malaikat, dan akidah.",
        "Akidah, ibadah, israiliyyat, dan al-ba'th.",
        "Tauhid, kekuasaan Nabi SAW, dan akidah.",
      ],
      answer: 0,
    },
    {
      arabic: "",
      question: "Berapakah bilangan ayat yang terdapat dalam surah ini?",
      options: [
        "93 ayat",
        "73 ayat",
        "83 ayat",
        "63 ayat",
      ],
      answer: 2,
    },
    {
      arabic: "يسٓ١ وَٱلۡقُرۡءَانِ ٱلۡحَكِيمِ٢ إِنَّكَ لَمِنَ ٱلۡمُرۡسَلِينَ٣ عَلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ٤ تَنزِيلَ ٱلۡعَزِيزِ ٱلرَّحِيمِ٥ لِتُنذِرَ قَوۡمٗا مَّآ أُنذِرَ ءَابَآؤُهُمۡ فَهُمۡ غَٰفِلُونَ٦ ... إِنَّا نَحۡنُ نُحۡيِ ٱلۡمَوۡتَىٰ وَنَكۡتُبُ مَا قَدَّمُواْ وَءَاثَٰرَهُمۡۚ وَكُلَّ شَيۡءٍ أَحۡصَيۡنَٰهُ فِيٓ إِمَامٖ مُّبِينٖ١٢",
      question: "Perihalkan tema bagi ayat 1-12 surah ini.",
      options: [
        "Al-Quran, rasul dan malaikat.",
        "Al-Quran, tugas rasul, dan umat manusia terdahulu.",
        "Al-Quran, ibadah, dan tauhid kepada Allah.",
        "Al-Quran, rasul dan umat manusia yang diutus rasul kepada mereka.",
      ],
      answer: 3,
    },
    {
      arabic: "وَٱضۡرِبۡ لَهُم مَّثَلًا أَصۡحَٰبَ ٱلۡقَرۡيَةِ إِذۡ جَآءَهَا ٱلۡمُرۡسَلُونَ١٣ ... بِمَا غَفَرَ لِي رَبِّي وَجَعَلَنِي مِنَ ٱلۡمُكۡرَمِينَ٢٧",
      question: "Nyatakan tema bagi ayat 13-27 surah ini.",
      options: [
        "Kisah ashabul Madyan.",
        "Kisah ashabul kahfi.",
        "Kisah ashabul qaryah.",
        "Kisah nabi ulul azmi.",
      ],
      answer: 2,
    },
    {
      arabic: "قَالَ يَٰقَوۡمِ ٱتَّبِعُواْ ٱلۡمُرۡسَلِينَ",
      question: "Nyatakan amalan yang boleh diamalkan dalam kehidupan berdasarkan ayat ini.",
      options: [
        "Sentiasa memuji Allah.",
        "Sampaikanlah kebenaran atau cegahlah kemungkaran.",
        "Pergilah ke masjid untuk beribadah.",
        "Sentiasa mengucapkan tasbih dan tahmid.",
      ],
      answer: 1,
    },
    {
      arabic: "وَءَايَةٞ لَّهُمُ ٱلۡأَرۡضُ ٱلۡمَيۡتَةُ أَحۡيَيۡنَٰهَا وَأَخۡرَجۡنَا مِنۡهَا حَبّٗا فَمِنۡهُ يَأۡكُلُونَ٣٣",
      question: "Apakah tanda yang menjadi bukti petunjuk wujud Allah SWT dan kuasa-Nya dalam melaksanakan al-ba'th dalam ayat ini?",
      options: [
        "Allah menghidupkan bumi yang tandus yang tidak memiliki tumbuh-tumbuhan dengan menurunkan air hujan.",
        "Allah menurunkan bala kepada mereka yang tidak beriman.",
        "Allah memberi pahala kepada mereka yang beriman.",
        "Allah menyediakan segala kenikmatan kepada ahli syurga.",
      ],
      answer: 0,
    },
    {
      arabic: "أَوَلَمۡ يَرَ ٱلۡإِنسَٰنُ أَنَّا خَلَقۡنَٰهُ مِن نُّطۡفَةٖ فَإِذَا هُوَ خَصِيمٞ مُّبِينٞ٧٧",
      question: "Ringkaskan sebab penurunan ayat 77 surah ini.",
      options: [
        "Kaum Quraisy meminta mukjizat dari langit kepada Nabi Muhammad SAW.",
        "Seorang lelaki Quraisy menghina kebangkitan semula dengan membawa tulang yang telah hancur.",
        "Para sahabat bertanya kepada Nabi SAW tentang proses kebangkitan di akhirat.",
        "Seorang wanita membawa bayinya yang meninggal lalu bertanya adakah dia akan hidup kembali.",
      ],
      answer: 1,
    },
    {
      arabic: "ٱلَّذِي جَعَلَ لَكُم مِّنَ ٱلشَّجَرِ ٱلۡأَخۡضَرِ نَارٗا فَإِذَآ أَنتُم مِّنۡهُ تُوقِدُونَ٨٠",
      question: "Berdasarkan ayat tersebut, Allah mengeluarkan api daripada pohon kayu yang hijau dan basah. Ini menunjukkan bahawa __________.",
      options: [
        "Kuasa Allah mengatasi kuasa manusia.",
        "Menguasai alam semesta.",
        "Allah maha pemurah kepada hamba-hamba-Nya.",
        "Allah berkuasa menjadikan sesuatu daripada sesuatu yang menjadi lawannya.",
      ],
      answer: 3,
    },
    {
      arabic: "",
      question: "Rumuskan tindakan orang kafir yang tetap menyembah berhala walaupun mengetahui ia tidak mampu memberi manfaat atau mudarat.",
      options: [
        "Mereka menyembah berhala kerana yakin ia adalah jelmaan para malaikat.",
        "Mereka ingin mendapatkan pertolongan daripada sembahan itu ketika ditimpa azab, walaupun ia tidak berkuasa langsung.",
        "Mereka ingin menunjukkan protes terhadap hukum yang dibawa oleh Nabi Muhammad SAW.",
        "Mereka memanfaatkan sembahan tersebut sebagai simbol budaya dan warisan nenek moyang.",
      ],
      answer: 1,
    },
    {
      arabic: "سَلَٰمٞ قَوۡلٗا مِّن رَّبّٖ رَّحِيمٖ٥٨ وَٱمۡتَٰزُواْ ٱلۡيَوۡمَ أَيُّهَا ٱلۡمُجۡرِمُونَ٥٩ ... وَمَا عَلَّمۡنَٰهُ ٱلشِّعۡرَ وَمَا يَنۢبَغِي لَهُۥٓۚ إِنۡ هُوَ إِلَّا ذِكۡرٞ وَقُرۡءَانٞ مُّبِينٞ٦٩",
      question: "Nyatakan secara ringkas balasan kepada pendosa berdasarkan ayat 58-69 surah ini.",
      options: [
        "Para pendosa akan diberi peluang untuk bersama orang Mukmin sebelum dihumban ke neraka.",
        "Para pendosa akan dihukum secara rawak tanpa mengira amalan dan kepercayaan.",
        "Pemisahan para pendosa daripada orang Mukmin adalah bentuk penghinaan dan persiapan ke neraka.",
        "Semua umat beragama akan dihimpunkan tanpa dibezakan kepercayaannya di akhirat.",
      ],
      answer: 2,
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
      navigate("/resultltafsir", { state: { score, total: 10 } });
    }
  }

  return (
    <div className="gameltafsir-page">

      <div className="gameltafsir-header">
        <img src={logo} alt="Logo" className="gameltafsir-logo" />
        <h1>SURAH YASIN</h1>
      </div>

      <div className="gameltafsir-card">

        <div className="gameltafsir-badge">
          Soalan {currentQuestion + 1} / {questions.length}
        </div>

        {q.arabic !== "" && (
          <div className="gameltafsir-arabic">{q.arabic}</div>
        )}

        <p className="gameltafsir-question">{q.question}</p>

        <div className="gameltafsir-options">
          {q.options.map((opt, i) => (
            <div
              key={i}
              className={`gameltafsir-option ${answer === i ? "selected" : ""} ${
                checked ? i === q.answer ? "correct" : answer === i ? "wrong" : "" : ""
              }`}
              onClick={() => !checked && setAnswer(i)}
            >
              <span className="gameltafsir-label">{String.fromCharCode(65 + i)}.</span>
              <span>{opt}</span>
            </div>
          ))}
        </div>

        {checked && (
          <div className={`gameltafsir-result ${result}`}>
            {result === "betul"
              ? "✅ Tahniah! Jawapan anda BETUL."
              : `❌ Jawapan SALAH. Jawapan betul: ${q.options[q.answer]}`}
          </div>
        )}

        {!checked ? (
          <button className="gameltafsir-submit" onClick={checkAnswer}>
            Semak Jawapan
          </button>
        ) : (
          <button className="gameltafsir-submit" onClick={nextQuestion}>
            {currentQuestion === questions.length - 1
              ? "Lihat Keputusan ➜"
              : "Soalan Seterusnya ➜"}
          </button>
        )}

        <p className="gameltafsir-score">Markah: {score} / {questions.length}</p>

      </div>

      <button className="gameltafsir-back" onClick={() => window.location.href = "/tafsir/lanjutan"}>
        ← Kembali
      </button>

      <div className="gameltafsir-nav">
        <FaHome onClick={() => navigate("/dashboard")} />
        <FaBookOpen onClick={() => navigate("/askexpert")} />
        <FaInfoCircle onClick={() => navigate("/about")} />
        <FaQuestionCircle onClick={() => navigate("/help")} />
      </div>

    </div>
  );
}

export default GameLTafsir;
