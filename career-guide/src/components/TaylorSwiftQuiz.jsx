import { useState } from 'react';
import { taylorQuestions } from '../data/taylorQuiz';

const QUESTIONS_PER_GAME = 10;

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getResult(score, total) {
  const pct = (score / total) * 100;
  if (pct === 100) return { title: 'Swiftie Supreme 👑', message: 'You know EVERYTHING about Taylor Swift. You are a true Swiftie legend!', emoji: '👑', color: 'from-yellow-400 to-orange-500' };
  if (pct >= 80) return { title: 'Lover 💕', message: 'You really know your Taylor Swift! A few more listens and you\'ll be unstoppable!', emoji: '💕', color: 'from-pink-500 to-rose-500' };
  if (pct >= 60) return { title: 'Enchanted ✨', message: 'You\'re getting there! Keep listening to Taylor\'s songs to level up!', emoji: '✨', color: 'from-purple-500 to-indigo-500' };
  if (pct >= 40) return { title: 'Style Icon 😎', message: 'Nice start! Taylor has so many songs — go listen and try again!', emoji: '😎', color: 'from-blue-500 to-cyan-500' };
  return { title: 'Newbie Fan 🌟', message: 'Welcome to the Swiftie world! Start with "Love Story" and "Shake It Off"!', emoji: '🌟', color: 'from-teal-500 to-green-500' };
}

export default function TaylorSwiftQuiz({ onBack }) {
  const [gameId, setGameId] = useState(0);
  const [questions, setQuestions] = useState(() => shuffle(taylorQuestions).slice(0, QUESTIONS_PER_GAME));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const question = questions[current];
  const result = finished ? getResult(score, questions.length) : null;

  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === question.answer) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(c => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const handlePlayAgain = () => {
    setGameId(id => id + 1);
    setQuestions(shuffle(taylorQuestions).slice(0, QUESTIONS_PER_GAME));
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  };

  const progress = ((current + (selected !== null ? 1 : 0)) / questions.length) * 100;

  const backgroundImage =
    'linear-gradient(rgba(88, 28, 135, 0.75), rgba(219, 39, 119, 0.7)), ' +
    'url(https://commons.wikimedia.org/wiki/Special:FilePath/Taylor_Swift_Eras_Tour_-_Arlington%2C_TX_-_Tolerate_It.jpg?width=1600)';

  return (
    <div
      key={gameId}
      className="min-h-screen p-6"
      style={{
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-3">🎤✨</div>
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">Taylor Swift Quiz</h1>
          <p className="text-white/90 text-lg mt-2">How big of a Swiftie are you? 10 random questions every game!</p>
        </div>

        {!finished ? (
          <div className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl">
            {/* Progress */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500 font-semibold">Question {current + 1} of {questions.length}</span>
              <span className="px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-bold">Score: {score}</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-8">
              <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 rounded-full" style={{ width: `${progress}%` }} />
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
                className="w-full mt-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
              >
                {current < questions.length - 1 ? 'Next Question →' : 'See My Result! 🎉'}
              </button>
            )}
          </div>
        ) : (
          <div className="bg-white/95 backdrop-blur rounded-3xl p-10 shadow-2xl text-center">
            <div className="text-7xl mb-4">{result.emoji}</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{result.title}</h2>
            <p className="text-gray-600 text-lg mb-6">{result.message}</p>

            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                {score}/{questions.length}
              </div>
              <p className="text-gray-500 mt-2 font-medium">correct answers</p>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handlePlayAgain}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
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
