import { streams } from '../data/streams';
import { anikaStreams } from '../data/anikaStreams';

export default function StreamDetails({ streamKey, onBack, profile }) {
  const streamsData = profile === 'anika' ? anikaStreams : streams;
  const streamData = streamsData[streamKey];

  return (
    <div className="max-w-6xl mx-auto">
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-semibold"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Recommendations
      </button>

      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-5xl shadow-lg shadow-blue-500/30">
            {streamData.icon}
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{streamData.name}</h1>
            <p className="text-gray-600 text-lg leading-relaxed">{streamData.description}</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {profile === 'anika' ? 'Fun Things You Can Try' : 'Sub-Streams and Specializations'}
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {streamData.subStreams.map((subStream, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {subStream.name}
            </h3>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {subStream.description}
            </p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-500 mb-2">Key Skills</h4>
              <div className="flex flex-wrap gap-2">
                {subStream.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-500 mb-2">{profile === 'anika' ? 'Dream Jobs' : 'Career Paths'}</h4>
              <div className="space-y-2">
                {subStream.careerPaths.map((path, pIdx) => (
                  <div key={pIdx} className="text-gray-700 text-sm font-medium flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {path}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-500 mb-2">{profile === 'anika' ? 'When You Grow Up' : 'Program Duration'}</h4>
              <div className="text-gray-700 font-semibold">{subStream.duration}</div>
            </div>

            {subStream.countries ? (
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-gray-500 mb-3">
                Available Programs
              </h4>
              
              <div className="mb-4">
                <h5 className="text-xs font-bold text-blue-600 mb-2 flex items-center gap-2">
                  <span>🇺🇸</span> USA
                </h5>
                <div className="space-y-2">
                  {subStream.countries.usa.map((program, prIdx) => (
                    <div key={prIdx} className="text-gray-700 text-sm font-medium flex items-start gap-2">
                      <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {program}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-xs font-bold text-green-600 mb-2 flex items-center gap-2">
                  <span>🇮🇳</span> India
                </h5>
                <div className="space-y-2">
                  {subStream.countries.india.map((program, prIdx) => (
                    <div key={prIdx} className="text-gray-700 text-sm font-medium flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {program}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            ) : profile === 'anika' ? (
              <div className="bg-pink-50 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-pink-600 mb-2">🌟 Fun Fact</h4>
                <p className="text-gray-700 text-sm font-medium">Keep practicing these skills — every great artist, scientist, and athlete started exactly where you are now!</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-blue-900 mb-4">
          Next Steps
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-blue-800">
            <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <span className="font-medium">Research the specific programs that interest you most</span>
          </li>
          <li className="flex items-start gap-3 text-blue-800">
            <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <span className="font-medium">Look into admission requirements for your target universities</span>
          </li>
          <li className="flex items-start gap-3 text-blue-800">
            <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <span className="font-medium">Consider talking to professionals in these fields</span>
          </li>
          <li className="flex items-start gap-3 text-blue-800">
            <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <span className="font-medium">Explore internships or volunteer opportunities in related areas</span>
          </li>
          <li className="flex items-start gap-3 text-blue-800">
            <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <span className="font-medium">Prepare for entrance exams if required (JEE, SAT, etc.)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
