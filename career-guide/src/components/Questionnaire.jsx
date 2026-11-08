import { useState } from 'react';
import { anikaQuestions } from '../data/anikaQuestions';

const sonikaQuestions = [
  {
    id: 1,
    category: 'interests',
    question: 'Imagine you have a free weekend with no obligations. What would you most likely spend your time doing?',
    options: [
      { text: 'Building something - maybe a DIY project, fixing a gadget, or writing code', streams: ['engineering'] },
      { text: 'Learning about health topics, maybe reading medical articles or helping someone who\'s sick', streams: ['medical'] },
      { text: 'Reading about business news, planning a small venture, or tracking market trends', streams: ['commerce'] },
      { text: 'Creating something artistic - writing, painting, music, or analyzing a social issue', streams: ['arts'] },
      { text: 'Exploring how things work - conducting experiments, researching nature, or solving puzzles', streams: ['science'] }
    ]
  },
  {
    id: 2,
    category: 'activities',
    question: 'You\'re watching a documentary. Which topic would you choose to watch?',
    options: [
      { text: 'How the latest smartphone or AI technology was developed', streams: ['engineering'] },
      { text: 'The human body, medical breakthroughs, or healthcare innovations', streams: ['medical'] },
      { text: 'How successful companies built their empires or economic theories', streams: ['commerce'] },
      { text: 'A historical event, biography of an artist, or cultural movement', streams: ['arts'] },
      { text: 'Space exploration, climate science, or cutting-edge research', streams: ['science'] }
    ]
  },
  {
    id: 3,
    category: 'problem_solving',
    question: 'Your friend is struggling with a challenge. Which one would you feel most equipped to help with?',
    options: [
      { text: 'Their computer won\'t work or they need to build something practical', streams: ['engineering'] },
      { text: 'They\'re not feeling well or need advice about health and wellness', streams: ['medical'] },
      { text: 'They\'re confused about managing money or starting a small business', streams: ['commerce'] },
      { text: 'They\'re going through a personal issue or need help understanding people', streams: ['arts'] },
      { text: 'They want to understand a complex scientific concept or research something', streams: ['science'] }
    ]
  },
  {
    id: 4,
    category: 'learning_style',
    question: 'You\'re learning something new. What approach feels most natural to you?',
    options: [
      { text: 'Jump right in and figure it out by doing - trial and error', streams: ['engineering', 'arts'] },
      { text: 'Observe carefully, take notes, and understand the underlying principles', streams: ['medical', 'science'] },
      { text: 'Look at real-world examples and case studies to understand the pattern', streams: ['commerce'] },
      { text: 'Discuss it with others, debate ideas, and analyze different perspectives', streams: ['arts'] },
      { text: 'Research thoroughly, gather data, and analyze the evidence', streams: ['science', 'commerce'] }
    ]
  },
  {
    id: 5,
    category: 'career_goals',
    question: 'Ten years from now, what kind of work would make you feel most fulfilled?',
    options: [
      { text: 'Creating technology that changes how people live and work', streams: ['engineering'] },
      { text: 'Directly improving people\'s health and quality of life', streams: ['medical'] },
      { text: 'Building successful businesses and understanding how markets work', streams: ['commerce'] },
      { text: 'Creating art, stories, or ideas that influence how people think', streams: ['arts'] },
      { text: 'Discovering new knowledge and pushing the boundaries of what\'s possible', streams: ['science'] }
    ]
  },
  {
    id: 6,
    category: 'environment',
    question: 'You\'re in a bookstore with time to browse. Which section draws you in first?',
    options: [
      { text: 'Technology, programming, or engineering books', streams: ['engineering'] },
      { text: 'Health, medicine, biology, or psychology section', streams: ['medical'] },
      { text: 'Business, finance, entrepreneurship, or economics', streams: ['commerce'] },
      { text: 'Literature, philosophy, art, or social sciences', streams: ['arts'] },
      { text: 'Science, physics, chemistry, or mathematics section', streams: ['science'] }
    ]
  },
  {
    id: 7,
    category: 'teamwork',
    question: 'You\'re working on a group project. What role do you naturally gravitate toward?',
    options: [
      { text: 'The technical lead - figuring out how to make things work', streams: ['engineering'] },
      { text: 'The researcher - gathering information and ensuring accuracy', streams: ['medical', 'science'] },
      { text: 'The organizer - managing resources, timeline, and coordination', streams: ['commerce'] },
      { text: 'The creative director - shaping the vision and presentation', streams: ['arts'] },
      { text: 'The analyst - evaluating data and finding patterns', streams: ['science', 'commerce'] }
    ]
  },
  {
    id: 8,
    category: 'curiosity',
    question: 'When you hear about a new discovery or innovation, what\'s your first thought?',
    options: [
      { text: 'How was it built? What technology made it possible?', streams: ['engineering'] },
      { text: 'How does it affect human health or biology?', streams: ['medical'] },
      { text: 'What\'s the business model? How will it make money?', streams: ['commerce'] },
      { text: 'What\'s the cultural impact? How does it change society?', streams: ['arts'] },
      { text: 'What\'s the scientific principle behind it?', streams: ['science'] }
    ]
  },
  {
    id: 9,
    category: 'challenges',
    question: 'What type of challenge excites you the most?',
    options: [
      { text: 'Building something from scratch that solves a practical problem', streams: ['engineering'] },
      { text: 'Understanding complex biological systems and finding cures', streams: ['medical'] },
      { text: 'Turning an idea into a profitable venture', streams: ['commerce'] },
      { text: 'Expressing complex emotions or ideas through creative work', streams: ['arts'] },
      { text: 'Uncovering hidden truths through research and experimentation', streams: ['science'] }
    ]
  },
  {
    id: 10,
    category: 'values',
    question: 'If you could change one thing about the world, what would it be?',
    options: [
      { text: 'Make technology more accessible and solve technical problems', streams: ['engineering'] },
      { text: 'Eliminate disease and improve healthcare for everyone', streams: ['medical'] },
      { text: 'Create economic opportunities and reduce poverty', streams: ['commerce'] },
      { text: 'Promote understanding, empathy, and cultural appreciation', streams: ['arts'] },
      { text: 'Advance scientific knowledge and solve global challenges', streams: ['science'] }
    ]
  }
];

export default function Questionnaire({ onComplete, profile }) {
  const questions = profile === 'anika' ? anikaQuestions : sonikaQuestions;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [streamScores, setStreamScores] = useState({
    engineering: 0,
    medical: 0,
    commerce: 0,
    arts: 0,
    science: 0
  });

  const handleAnswer = (option) => {
    const newAnswers = { ...answers, [currentQuestion]: option };
    setAnswers(newAnswers);

    const tags = option.streams || option.interests;
    if (tags) {
      const newScores = { ...streamScores };
      tags.forEach(stream => {
        newScores[stream] = (newScores[stream] || 0) + 1;
      });
      setStreamScores(newScores);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete({
        answers: newAnswers,
        streamScores
      });
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{profile === 'anika' ? 'What Do You Love?' : 'Career Assessment'}</h1>
        <p className="text-gray-600">{profile === 'anika' ? 'Answer these fun questions to discover what you love!' : 'Answer these questions to help us understand your interests'}</p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600 text-sm font-medium">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-bold">{Math.round(progress)}%</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">
          {questions[currentQuestion].question}
        </h2>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full p-5 text-left bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-500 rounded-xl transition-all duration-200 group hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-full border-2 border-gray-300 group-hover:border-blue-500 flex items-center justify-center transition-colors bg-white">
                  <div className="w-4 h-4 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-gray-700 group-hover:text-gray-900 font-semibold transition-colors text-lg">
                  {option.text}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
