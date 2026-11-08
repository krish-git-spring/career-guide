const anikaStreamNames = {
  art: 'Artist',
  science: 'Scientist',
  sports: 'Athlete',
  music: 'Musician',
  animals: 'Animal Lover',
  helping: 'Helper',
  building: 'Builder',
  writing: 'Writer',
  tech: 'Tech Wizard',
  nature: 'Nature Explorer'
};

export default function Dashboard({ projectResults, questionnaireData, onViewRecommendations, profile }) {
  const isAnika = profile === 'anika';
  const displayName = isAnika ? 'Anika' : 'Sonika';
  const streamNames = isAnika ? anikaStreamNames : {
    engineering: 'Engineering',
    medical: 'Medical',
    commerce: 'Commerce',
    arts: 'Arts',
    science: 'Science'
  };
  const totalProjects = projectResults.length;
  const averageScore = totalProjects > 0 
    ? projectResults.reduce((acc, r) => acc + (r.score / r.maxScore) * 100, 0) / totalProjects 
    : 0;

  // Calculate stream scores from questionnaire data
  const streamScores = questionnaireData?.streamScores || {
    engineering: 0,
    medical: 0,
    commerce: 0,
    arts: 0,
    science: 0
  };

  // Calculate total score
  const totalScore = Object.values(streamScores).reduce((acc, val) => acc + val, 0);

  // Convert to percentages
  const streamPercentages = {};
  Object.keys(streamScores).forEach(stream => {
    streamPercentages[stream] = totalScore > 0 ? Math.round((streamScores[stream] / totalScore) * 100) : 0;
  });

  // Create strengths based on stream scores
  const strengths = Object.entries(streamPercentages)
    .map(([stream, score]) => ({
      name: streamNames[stream],
      score: Math.min(score * 2, 100) // Scale up for display
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  // Create interests for donut chart
  const interests = Object.entries(streamPercentages)
    .map(([stream, value]) => ({
      name: streamNames[stream],
      value: value
    }))
    .sort((a, b) => b.value - a.value);

  // Career paths based on top streams
  const careerPaths = Object.entries(streamScores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([stream, score]) => ({
      name: `${streamNames[stream]} Professional`,
      match: Math.min(Math.round((score / 10) * 100), 95)
    }));

  const projectsToGo = Math.max(3 - totalProjects, 0);
  const journeyMessages = isAnika
    ? [
        'You\'re just getting started — try your first fun project!',
        'Great start! One more project to go!',
        'Almost there! Just one more project!',
        'Amazing! You\'ve unlocked your dream job matches! 🌟'
      ]
    : [
        'You\'re just getting started — try your first project!',
        'Great start! One more project to go!',
        'Almost there! Just one more project!',
        'Amazing! You\'ve unlocked your stream recommendations!'
      ];
  const journeyMessage = journeyMessages[Math.min(totalProjects, 3)];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome, {displayName}!
        </h1>
        <p className="text-gray-600">
          {isAnika ? 'Let\'s find your dream job!' : 'Let\'s build your ideal career path with guidance'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Career Match Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Your Career Match</h3>
          <div className="flex flex-col items-center justify-center py-4">
            <div className="relative w-36 h-36">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="72" cy="72" r="60" stroke="#e5e7eb" strokeWidth="14" fill="none" />
                <circle 
                  cx="72" cy="72" r="60" 
                  stroke="#3b82f6" 
                  strokeWidth="14" 
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 60}`}
                  strokeDashoffset={`${2 * Math.PI * 60 * (1 - averageScore / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-gray-900">{Math.round(averageScore)}%</span>
              </div>
            </div>
            <span className="mt-4 text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Excellent Match</span>
          </div>
        </div>

        {/* Strengths Analysis */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Strengths Analysis</h3>
          <div className="space-y-4">
            {strengths.map((strength, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-700 font-medium">{strength.name}</span>
                  <span className="text-gray-500 font-semibold">{strength.score}%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${strength.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interest Mapping */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Interest Mapping</h3>
          <div className="flex justify-center py-4">
            <div className="relative w-36 h-36">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="72" cy="72" r="60" stroke="#e5e7eb" strokeWidth="24" fill="none" />
                {interests.map((interest, idx) => {
                  const offset = interests.slice(0, idx).reduce((acc, i) => acc + i.value, 0);
                  const circumference = 2 * Math.PI * 60;
                  return (
                    <circle
                      key={idx}
                      cx="72"
                      cy="72"
                      r="60"
                      stroke={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#f97316', '#84cc16', '#6366f1'][idx % 10]}
                      strokeWidth="24"
                      fill="none"
                      strokeDasharray={`${circumference * (interest.value / 100)}`}
                      strokeDashoffset={`-${circumference * (offset / 100)}`}
                    />
                  );
                })}
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {interests.map((interest, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#f97316', '#84cc16', '#6366f1'][idx % 10] }} />
                <span className="text-gray-600 font-medium">{interest.name} ({interest.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Recommended Career Paths */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Recommended Career Paths</h3>
          <div className="space-y-3">
            {careerPaths.map((path, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-gray-700 font-semibold">{path.name}</span>
                <span className="text-blue-600 font-bold">{path.match}% Match</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Progress */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Your Journey</h3>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-20 h-20 flex-shrink-0">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="40" cy="40" r="34" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                <circle
                  cx="40" cy="40" r="34"
                  stroke={totalProjects >= 3 ? '#10b981' : '#3b82f6'}
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 34}`}
                  strokeDashoffset={`${2 * Math.PI * 34 * (1 - Math.min(totalProjects, 3) / 3)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-900">{totalProjects}/3</span>
              </div>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">
                {totalProjects} project{totalProjects !== 1 ? 's' : ''} completed
              </p>
              <p className="text-gray-500 text-sm mt-1">{journeyMessage}</p>
            </div>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${totalProjects >= 3 ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-blue-500 to-blue-600'}`}
              style={{ width: `${Math.min(totalProjects, 3) / 3 * 100}%` }}
            />
          </div>
          {projectsToGo > 0 && (
            <p className="text-gray-400 text-xs mt-3 text-center">
              Complete {projectsToGo} more project{projectsToGo !== 1 ? 's' : ''} to unlock recommendations
            </p>
          )}
        </div>
      </div>

      {totalProjects >= 3 && (
        <div className="text-center">
          <button
            onClick={onViewRecommendations}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {isAnika ? 'See My Dream Jobs! 🌟' : 'Get Your Stream Recommendations'}
          </button>
        </div>
      )}
    </div>
  );
}
