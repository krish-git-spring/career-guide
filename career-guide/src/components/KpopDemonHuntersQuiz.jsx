import LevelQuiz from './LevelQuiz';
import { kpopLevels } from '../data/kpopQuiz';

function getResult(score, total) {
  const pct = (score / total) * 100;
  if (pct === 100) return { title: 'HUNTR/X Legend 👑', message: 'You know EVERYTHING about K-Pop Demon Hunters. You are a true fan!', emoji: '👑', color: 'from-yellow-400 to-orange-500' };
  if (pct >= 80) return { title: 'Saja Slayer ⚔️', message: 'You really know your demons! A few more watches and you\'ll be unstoppable!', emoji: '⚔️', color: 'from-red-500 to-orange-500' };
  if (pct >= 60) return { title: 'Rumi\'s Fan ✨', message: 'You\'re getting there! Keep watching to level up your knowledge!', emoji: '✨', color: 'from-purple-500 to-indigo-500' };
  if (pct >= 40) return { title: 'New Hunter 🌟', message: 'Nice start! Watch the movie again and try to beat your score!', emoji: '🌟', color: 'from-blue-500 to-cyan-500' };
  return { title: 'Curious Listener 🎵', message: 'Welcome to the world of K-Pop Demon Hunters! Go watch the movie and come back!', emoji: '🎵', color: 'from-teal-500 to-green-500' };
}

export default function KpopDemonHuntersQuiz({ onBack, profile }) {
  return (
    <LevelQuiz
      title="K-Pop Demon Hunters Quiz"
      subtitle="How big of a fan are you? 10 levels of increasing difficulty!"
      emoji="👹🎤"
      levels={kpopLevels}
      questionsPerLevel={5}
      passMark={3}
      accentFrom="from-red-600"
      accentTo="to-purple-600"
      backgroundImage="https://commons.wikimedia.org/wiki/Special:FilePath/KPop_Demon_Hunters_cosplay_at_Fan_Expo_Denver_2026_01.jpg?width=1600"
      resultTiers={getResult}
      storageKey={`careerGuide_${profile || 'default'}_kpopQuizProgress`}
      onBack={onBack}
    />
  );
}
