import { streams } from '../data/streams';
import { anikaStreams } from '../data/anikaStreams';
import { aanviStreams } from '../data/aanviStreams';

export default function Recommendations({ initialScores, projectResults, country, onStreamSelect, profile }) {
  const isKid = profile === 'anika' || profile === 'aanvi';
  const streamsData = profile === 'anika' ? anikaStreams : profile === 'aanvi' ? aanviStreams : streams;
  // Check if user has completed the assessment
  if (!initialScores || Object.keys(initialScores).length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="text-6xl mb-6">📋</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Complete Your Assessment First
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Please complete the questionnaire and at least 3 projects to get personalized stream recommendations.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
        >
          Start Assessment
        </button>
      </div>
    );
  }

  const calculateFinalScores = () => {
    const finalScores = { ...initialScores };
    
    projectResults.forEach(result => {
      const scorePercentage = result.score / result.maxScore;
      Object.keys(finalScores).forEach(stream => {
        finalScores[stream] += scorePercentage * 2;
      });
    });

    return finalScores;
  };

  const finalScores = calculateFinalScores();
  const sortedStreams = Object.entries(finalScores)
    .filter(([streamName]) => streamsData[streamName])
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  const topStream = sortedStreams[0][0];
  const topStreamData = streamsData[topStream];

  const generateReasoning = (streamName, score, rank) => {
    const reasons = [];
    
    if (rank === 1) {
      reasons.push(`Your questionnaire responses showed strong alignment with ${streamName} topics`);
      reasons.push(`Your project performance indicates genuine interest and capability in this area`);
      reasons.push(`This stream offers diverse career opportunities that match your profile`);
    } else if (rank === 2) {
      reasons.push(`You showed good potential in ${streamName} during the assessment`);
      reasons.push(`This could be a strong alternative or complementary field to explore`);
    } else {
      reasons.push(`Your assessment showed some interest in ${streamName}`);
      reasons.push(`Consider this as a potential minor or elective area of study`);
    }

    return reasons;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {isKid ? 'Your Dream Jobs' : 'Your Stream Recommendations'}
        </h1>
        <p className="text-gray-600">
          Based on your interests, project performance, and questionnaire responses
        </p>
      </div>

      <div className="mb-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-5xl shadow-lg shadow-blue-500/30">
              {topStreamData.icon}
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-2">
                🏆 Top Recommendation
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{topStreamData.name}</h2>
            </div>
          </div>
          
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            {topStreamData.description}
          </p>

          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why This Stream?</h3>
            <ul className="space-y-3">
              {generateReasoning(topStream, finalScores[topStream], 1).map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => onStreamSelect(topStream)}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Explore {topStreamData.name} in Detail
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {sortedStreams.slice(1).map(([streamName, score], idx) => (
          <div key={streamName} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-4xl">
                {streamsData[streamName].icon}
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1 font-semibold">Alternative #{idx + 2}</div>
                <h3 className="text-xl font-bold text-gray-900">{streamsData[streamName].name}</h3>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {streamsData[streamName].description}
            </p>

            <div className="space-y-2 mb-4">
              {generateReasoning(streamName, score, idx + 2).map((reason, rIdx) => (
                <div key={rIdx} className="flex items-start gap-2 text-gray-600 text-sm">
                  <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="font-medium">{reason}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onStreamSelect(streamName)}
              className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-semibold"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Start Over
        </button>
      </div>
    </div>
  );
}
