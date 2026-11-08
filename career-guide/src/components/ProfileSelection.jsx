export default function ProfileSelection({ onSelect }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-10">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center text-5xl mx-auto mb-6 shadow-2xl">
            🎓
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Welcome to Career Guide!
          </h1>
          <p className="text-white/90 text-lg md:text-xl">
            Who is exploring careers today? Pick your name to start your adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <button
            onClick={() => onSelect('sonika')}
            className="group bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
              👩‍🎓
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Sonika</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Explore streams, complete hands-on projects, and discover your perfect undergraduate path.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all">
              Start exploring
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </button>

          <button
            onClick={() => onSelect('anika')}
            className="group bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
              🧒
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Anika</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Fun quizzes, awesome projects, and dream jobs made just for a curious 8-year-old!
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-pink-600 font-bold group-hover:gap-3 transition-all">
              Let's play & learn
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
