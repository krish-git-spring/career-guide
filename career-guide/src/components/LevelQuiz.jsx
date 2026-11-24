import { useState, useEffect } from 'react';

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const LEVEL_META = [
  { name: 'Level 1', label: 'Easy Peasy', icon: '🌱', color: 'from-green-400 to-emerald-500' },
  { name: 'Level 2', label: 'Warm Up', icon: '🌿', color: 'from-teal-400 to-cyan-500' },
  { name: 'Level 3', label: 'Heating Up', icon: '🔥', color: 'from-orange-400 to-amber-500' },
  { name: 'Level 4', label: 'Getting Tough', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
  { name: 'Level 5', label: 'Tricky', icon: '🌪️', color: 'from-blue-400 to-indigo-500' },
  { name: 'Level 6', label: 'Sharp', icon: '🎯', color: 'from-indigo-500 to-purple-600' },
  { name: 'Level 7', label: 'Tough', icon: '💪', color: 'from-purple-500 to-violet-600' },
  { name: 'Level 8', label: 'Very Hard', icon: '🔥', color: 'from-red-500 to-rose-600' },
  { name: 'Level 9', label: 'Demon Level', icon: '👹', color: 'from-fuchsia-600 to-purple-700' },
  { name: 'Level 10', label: 'Legend', icon: '🏆', color: 'from-yellow-400 to-pink-600' }
];

export default function LevelQuiz({
  title,
  subtitle,
  emoji,
  levels,
  questionsPerLevel = 5,
  passMark = 3,
  accentFrom = 'from-purple-600',
  accentTo = 'to-pink-600',
  backgroundImage,
  resultTiers,
  storageKey,
  onBack
}) {
  const [unlocked, setUnlocked] = useState(() => {
    if (!storageKey) return 0;
    const saved = localStorage.getItem(storageKey);
    return saved ? parseInt(saved, 10) : 0;
  });
  const [phase, setPhase] = useState('select'); // select | playing | levelResult | champion
  const [levelIdx, setLevelIdx] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [totalScore, setTotalScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [runId, setRunId] = useState(0);

  const levelCount = levels.length;
  const currentLevel = levels[levelIdx] || [];
  const question = questions[qIdx];
  const levelPassed = score >= passMark;

  useEffect(() => {
    if (storageKey) localStorage.setItem(storageKey, String(unlocked));
  }, [unlocked, storageKey]);

  const startLevel = (idx) => {
    setLevelIdx(idx);
    setQuestions(shuffle(levels[idx]).slice(0, questionsPerLevel));
    setQIdx(0);
    setScore(0);
    setSelected(null);
    setPhase('playing');
    setRunId(id => id + 1);
  };

  const handleSelect = (optIdx) => {
    if (selected !== null) return;
    setSelected(optIdx);
    if (optIdx === question.answer) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (qIdx < questions.length - 1) {
      setQIdx(i => i + 1);
      setSelected(null);
    } else {
      // Level finished
      const newTotal = totalScore + score;
      const newAnswered = totalAnswered + questions.length;
      setTotalScore(newTotal);
      setTotalAnswered(newAnswered);
      setPhase('levelResult');
    }
  };

  const handleNextLevel = () => {
    if (levelIdx + 1 < levelCount) {
      if (levelIdx + 1 > unlocked) setUnlocked(levelIdx + 1);
      startLevel(levelIdx + 1);
    } else {
      setPhase('champion');
    }
  };

  const handleRetry = () => {
    startLevel(levelIdx);
  };

  const handlePlayAgain = () => {
    setTotalScore(0);
    setTotalAnswered(0);
    setUnlocked(0);
    if (storageKey) localStorage.setItem(storageKey, '0');
    setPhase('select');
  };

  const progress = question ? ((qIdx + (selected !== null ? 1 : 0)) / questions.length) * 100 : 0;
  const meta = LEVEL_META[levelIdx] || LEVEL_META[0];
  const championResult = phase === 'champion' ? resultTiers(totalScore, totalAnswered) : null;

  const bgStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(76, 29, 149, 0.8), rgba(219, 39, 119, 0.75)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }
    : { background: 'linear-gradient(135deg, #7c3aed, #db2777)' };

  return (
    <div key={runId} className="min-h-screen p-6" style={bgStyle}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-3">{emoji}</div>
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">{title}</h1>
          <p className="text-white/90 text-lg mt-2">{subtitle}</p>
        </div>

        {/* LEVEL SELECT */}
        {phase === 'select' && (
          <div className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Choose Your Level</h2>
            <p className="text-gray-500 text-center mb-8">Pass each level to unlock the next one!</p>
            <div className="space-y-4">
              {levels.map((lvl, idx) => {
                const isLocked = idx > unlocked;
                const meta = LEVEL_META[idx] || LEVEL_META[LEVEL_META.length - 1];
                return (
                  <button
                    key={idx}
                    disabled={isLocked}
                    onClick={() => startLevel(idx)}
                    className={`w-full flex items-center gap-4 p-5 rounded-2xl border-2 transition-all ${
                      isLocked
                        ? 'bg-gray-100 border-gray-200 opacity-60 cursor-not-allowed'
                        : 'bg-white border-gray-200 hover:border-purple-400 hover:shadow-lg transform hover:-translate-y-0.5'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${meta.color} flex items-center justify-center text-3xl shadow-md`}>
                      {isLocked ? '🔒' : meta.icon}
                    </div>
                    <div className="text-left flex-1">
                      <div className="font-bold text-gray-900 text-lg">{meta.name} — {meta.label}</div>
                      <div className="text-gray-500 text-sm">{lvl.length}+ questions • Get {passMark}+ right to pass</div>
                    </div>
                    {!isLocked && <span className="text-2xl">▶️</span>}
                  </button>
                );
              })}
            </div>
            {onBack && (
              <button onClick={onBack} className="w-full mt-6 py-3 bg-gray-200 text-gray-700 rounded-2xl font-bold hover:bg-gray-300 transition-all">
                ← Back
              </button>
            )}
          </div>
        )}

        {/* PLAYING */}
        {phase === 'playing' && question && (
          <div className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500 font-semibold">
                {meta.name} • Question {qIdx + 1} of {questions.length}
              </span>
              <span className="px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-bold">Score: {score}</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-8">
              <div className={`h-full bg-gradient-to-r ${accentFrom} ${accentTo} transition-all duration-500 rounded-full`} style={{ width: `${progress}%` }} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-8 leading-snug">{question.q}</h2>

            <div className="space-y-3">
              {question.options.map((opt, idx) => {
                let cls = 'bg-gray-50 border-2 border-gray-200 hover:border-pink-400 hover:bg-pink-50';
                if (selected !== null) {
                  if (idx === question.answer) cls = 'bg-green-100 border-2 border-green-500';
                  else if (idx === selected) cls = 'bg-red-100 border-2 border-red-400';
                  else cls = 'bg-gray-50 border-2 border-gray-200 opacity-60';
                }
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    disabled={selected !== null}
                    className={`w-full p-4 text-left rounded-2xl transition-all duration-200 font-semibold text-gray-800 ${cls}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {selected !== null && (
              <button
                onClick={handleNext}
                className={`w-full mt-6 py-4 bg-gradient-to-r ${accentFrom} ${accentTo} text-white rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-lg`}
              >
                {qIdx < questions.length - 1 ? 'Next Question →' : 'See My Score! 🎉'}
              </button>
            )}
          </div>
        )}

        {/* LEVEL RESULT */}
        {phase === 'levelResult' && (
          <div className="bg-white/95 backdrop-blur rounded-3xl p-10 shadow-2xl text-center">
            <div className="text-7xl mb-4">{levelPassed ? '🎉' : '💪'}</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {levelPassed ? `${meta.name} Complete!` : 'So Close!'}
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              {levelPassed
                ? `You got ${score}/${questions.length} — you passed! ${levelIdx + 1 < levelCount ? 'Get ready for the next level!' : 'You finished all levels!'}`
                : `You got ${score}/${questions.length} — you need ${passMark} to pass. Try again!`}
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <div className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${accentFrom} ${accentTo}`}>
                {score}/{questions.length}
              </div>
              <p className="text-gray-500 mt-2 font-medium">correct answers</p>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              {levelPassed && levelIdx + 1 < levelCount && (
                <button
                  onClick={handleNextLevel}
                  className={`px-8 py-4 bg-gradient-to-r ${accentFrom} ${accentTo} text-white rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-lg`}
                >
                  Next Level: {LEVEL_META[levelIdx + 1].name} ▶
                </button>
              )}
              {levelPassed && levelIdx + 1 >= levelCount && (
                <button
                  onClick={() => setPhase('champion')}
                  className={`px-8 py-4 bg-gradient-to-r ${accentFrom} ${accentTo} text-white rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-lg`}
                >
                  See Final Result! 🏆
                </button>
              )}
              {!levelPassed && (
                <button
                  onClick={handleRetry}
                  className={`px-8 py-4 bg-gradient-to-r ${accentFrom} ${accentTo} text-white rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-lg`}
                >
                  Try Again 🔄
                </button>
              )}
              <button
                onClick={() => setPhase('select')}
                className="px-8 py-4 bg-gray-200 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-300 transition-all"
              >
                Level Select
              </button>
            </div>
          </div>
        )}

        {/* CHAMPION */}
        {phase === 'champion' && championResult && (
          <div className="bg-white/95 backdrop-blur rounded-3xl p-10 shadow-2xl text-center">
            <div className="text-7xl mb-4">{championResult.emoji}</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{championResult.title}</h2>
            <p className="text-gray-600 text-lg mb-6">{championResult.message}</p>

            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <div className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${championResult.color}`}>
                {totalScore}/{totalAnswered}
              </div>
              <p className="text-gray-500 mt-2 font-medium">total correct across all levels</p>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={handlePlayAgain}
                className={`px-8 py-4 bg-gradient-to-r ${accentFrom} ${accentTo} text-white rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-lg`}
              >
                Play Again 🔄
              </button>
              {onBack && (
                <button
                  onClick={onBack}
                  className="px-8 py-4 bg-gray-200 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-300 transition-all"
                >
                  Back
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
