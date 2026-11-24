export default function Sidebar({ currentView, onNavigate, profile }) {
  const isAnika = profile === 'anika';
  const isAanvi = profile === 'aanvi';
  const isKid = isAnika || isAanvi;
  const displayName = isAnika ? 'Anika' : isAanvi ? 'Aanvi' : 'Sonika';

  const navItems = [
    { id: 'landing', label: 'Home', icon: '🏠' },
    { id: 'questionnaire', label: isKid ? 'My Interests' : 'Assessments', icon: '📋' },
    { id: 'projects', label: 'Projects', icon: '🛠️' },
    ...(isAnika ? [{ id: 'taylorQuiz', label: 'Taylor Quiz! 🎤', icon: '🎤' }] : []),
    ...(isAanvi ? [
      { id: 'kpopQuiz', label: 'K-Pop Quiz! 👹', icon: '👹' },
      { id: 'activities', label: 'Art Activities 🎨', icon: '🎨' }
    ] : []),
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'recommendations', label: isKid ? 'Dream Jobs' : 'Recommendations', icon: '🎯' },
  ];

  return (
    <div className="w-72 bg-white border-r border-gray-200 min-h-screen p-6 flex flex-col">
      <div className="mb-12">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-xl shadow-blue-500/30">
          🎓
        </div>
        <p className="mt-3 text-sm font-bold text-gray-800">{displayName}'s Career Guide</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  currentView === item.id
                    ? 'bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="pt-6 border-t border-gray-200">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 transition-all duration-200">
          <span className="text-xl">👤</span>
          <span className="font-medium">Profile</span>
        </button>
      </div>
    </div>
  );
}
