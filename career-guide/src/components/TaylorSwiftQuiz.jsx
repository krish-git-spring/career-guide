import LevelQuiz from './LevelQuiz';
import { taylorLevels } from '../data/taylorQuiz';

function getResult(score, total) {
  const pct = (score / total) * 100;
  if (pct === 100) return { title: 'Swiftie Supreme 👑', message: 'You know EVERYTHING about Taylor Swift. You are a true Swiftie legend!', emoji: '👑', color: 'from-yellow-400 to-orange-500' };
  if (pct >= 80) return { title: 'Lover 💕', message: 'You really know your Taylor Swift! A few more listens and you\'ll be unstoppable!', emoji: '💕', color: 'from-pink-500 to-rose-500' };
  if (pct >= 60) return { title: 'Enchanted ✨', message: 'You\'re getting there! Keep listening to Taylor\'s songs to level up!', emoji: '✨', color: 'from-purple-500 to-indigo-500' };
  if (pct >= 40) return { title: 'Style Icon 😎', message: 'Nice start! Taylor has so many songs — go listen and try again!', emoji: '😎', color: 'from-blue-500 to-cyan-500' };
  return { title: 'Newbie Fan 🌟', message: 'Welcome to the Swiftie world! Start with "Love Story" and "Shake It Off"!', emoji: '🌟', color: 'from-teal-500 to-green-500' };
}

export default function TaylorSwiftQuiz({ onBack, profile }) {
  return (
    <LevelQuiz
      title="Taylor Swift Quiz"
      subtitle="How big of a Swiftie are you? 10 levels of increasing difficulty!"
      emoji="🎤✨"
      levels={taylorLevels}
      questionsPerLevel={5}
      passMark={3}
      accentFrom="from-purple-600"
      accentTo="to-pink-600"
      backgroundImage="https://commons.wikimedia.org/wiki/Special:FilePath/Taylor_Swift_Eras_Tour_-_Arlington%2C_TX_-_Tolerate_It.jpg?width=1600"
      resultTiers={getResult}
      storageKey={`careerGuide_${profile || 'default'}_taylorQuizProgress`}
      onBack={onBack}
    />
  );
}
