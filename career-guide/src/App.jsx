import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ProfileSelection from './components/ProfileSelection';
import Questionnaire from './components/Questionnaire';
import ProjectSelection from './components/ProjectSelection';
import ProjectDetail from './components/ProjectDetail';
import Dashboard from './components/Dashboard';
import Recommendations from './components/Recommendations';
import StreamDetails from './components/StreamDetails';
import TaylorSwiftQuiz from './components/TaylorSwiftQuiz';

function App() {
  const [profile, setProfile] = useState(() => localStorage.getItem('careerGuide_profile') || null);
  const [currentView, setCurrentView] = useState('landing');
  const [questionnaireData, setQuestionnaireData] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [completedProjects, setCompletedProjects] = useState([]);
  const [projectResults, setProjectResults] = useState([]);
  const [selectedStream, setSelectedStream] = useState(null);

  const storageKey = (name) => `careerGuide_${profile || 'default'}_${name}`;

  // Load profile-specific data from localStorage when profile changes
  useEffect(() => {
    if (!profile) return;
    const savedQuestionnaireData = localStorage.getItem(storageKey('questionnaireData'));
    const savedCompletedProjects = localStorage.getItem(storageKey('completedProjects'));
    const savedProjectResults = localStorage.getItem(storageKey('projectResults'));

    setQuestionnaireData(savedQuestionnaireData ? JSON.parse(savedQuestionnaireData) : null);
    setCompletedProjects(savedCompletedProjects ? JSON.parse(savedCompletedProjects) : []);
    setProjectResults(savedProjectResults ? JSON.parse(savedProjectResults) : []);
    setSelectedProject(null);
    setSelectedStream(null);
    setCurrentView('landing');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  // Save questionnaire data to localStorage
  useEffect(() => {
    if (profile && questionnaireData) {
      localStorage.setItem(storageKey('questionnaireData'), JSON.stringify(questionnaireData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionnaireData, profile]);

  // Save completed projects to localStorage
  useEffect(() => {
    if (profile && completedProjects.length > 0) {
      localStorage.setItem(storageKey('completedProjects'), JSON.stringify(completedProjects));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completedProjects, profile]);

  // Save project results to localStorage
  useEffect(() => {
    if (profile && projectResults.length > 0) {
      localStorage.setItem(storageKey('projectResults'), JSON.stringify(projectResults));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectResults, profile]);

  const handleSelectProfile = (selected) => {
    localStorage.setItem('careerGuide_profile', selected);
    setProfile(selected);
  };

  const handleSwitchProfile = () => {
    localStorage.removeItem('careerGuide_profile');
    setProfile(null);
    setCurrentView('landing');
  };

  const handleQuestionnaireComplete = (data) => {
    setQuestionnaireData(data);
    setCurrentView('projects');
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setCurrentView('projectDetail');
  };

  const handleProjectComplete = (result) => {
    setCompletedProjects([...completedProjects, result.projectId]);
    setProjectResults([...projectResults, result]);
    setSelectedProject(null);
    setCurrentView('dashboard');
  };

  const handleViewRecommendations = () => {
    setCurrentView('recommendations');
  };

  const handleStreamSelect = (streamKey) => {
    setSelectedStream(streamKey);
    setCurrentView('streamDetails');
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setCurrentView('projects');
  };

  const handleBackToRecommendations = () => {
    setSelectedStream(null);
    setCurrentView('recommendations');
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  if (!profile) {
    return <ProfileSelection onSelect={handleSelectProfile} />;
  }

  const isAnika = profile === 'anika';
  const displayName = isAnika ? 'Anika' : 'Sonika';

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentView={currentView} onNavigate={handleNavigate} profile={profile} />

      <div className="flex-1 p-8">
        {currentView === 'landing' && (
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Welcome to Career Guide, {displayName}!
              </h1>
              <p className="text-gray-600 text-lg">
                {isAnika
                  ? 'Discover what you love through fun projects and quizzes!'
                  : 'Discover your perfect undergraduate stream through hands-on projects'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1" onClick={() => setCurrentView('questionnaire')}>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">📝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{isAnika ? 'My Interests' : 'Take Assessment'}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{isAnika ? 'Answer fun questions to discover what you love' : 'Answer questions about your interests and goals'}</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1" onClick={() => setCurrentView('projects')}>
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🛠️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{isAnika ? 'Fun Projects' : 'Complete Projects'}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{isAnika ? 'Try awesome projects made just for kids' : 'Do hands-on mini-projects to explore your interests'}</p>
              </div>

              {isAnika && (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-pink-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1" onClick={() => setCurrentView('taylorQuiz')}>
                  <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🎤</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Taylor Quiz!</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Test how big of a Swiftie you are!</p>
                </div>
              )}

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1" onClick={() => setCurrentView('dashboard')}>
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-6">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">View Dashboard</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Track your progress and see recommendations</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setCurrentView('questionnaire')}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {isAnika ? 'Start Exploring!' : 'Start Your Journey'}
              </button>
              <button
                onClick={handleSwitchProfile}
                className="px-6 py-4 bg-gray-200 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-300 transition-all duration-300"
              >
                Switch Profile
              </button>
            </div>
          </div>
        )}

        {currentView === 'questionnaire' && (
          <Questionnaire onComplete={handleQuestionnaireComplete} profile={profile} />
        )}

        {currentView === 'projects' && (
          <ProjectSelection
            streamScores={questionnaireData?.streamScores || {}}
            onSelectProject={handleProjectSelect}
            completedProjects={completedProjects}
            profile={profile}
          />
        )}

        {currentView === 'projectDetail' && (
          <ProjectDetail
            project={selectedProject}
            onComplete={handleProjectComplete}
            onBack={handleBackToProjects}
          />
        )}

        {currentView === 'taylorQuiz' && (
          <TaylorSwiftQuiz onBack={() => setCurrentView('landing')} />
        )}

        {currentView === 'dashboard' && (
          <Dashboard
            projectResults={projectResults}
            questionnaireData={questionnaireData}
            onViewRecommendations={handleViewRecommendations}
            profile={profile}
          />
        )}

        {currentView === 'recommendations' && (
          <Recommendations
            initialScores={questionnaireData?.streamScores || {}}
            projectResults={projectResults}
            onStreamSelect={handleStreamSelect}
            profile={profile}
          />
        )}

        {currentView === 'streamDetails' && (
          <StreamDetails
            streamKey={selectedStream}
            onBack={handleBackToRecommendations}
            profile={profile}
          />
        )}
      </div>
    </div>
  );
}

export default App;
