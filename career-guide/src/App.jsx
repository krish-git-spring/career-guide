import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Questionnaire from './components/Questionnaire';
import ProjectSelection from './components/ProjectSelection';
import ProjectDetail from './components/ProjectDetail';
import Dashboard from './components/Dashboard';
import Recommendations from './components/Recommendations';
import StreamDetails from './components/StreamDetails';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [questionnaireData, setQuestionnaireData] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [completedProjects, setCompletedProjects] = useState([]);
  const [projectResults, setProjectResults] = useState([]);
  const [selectedStream, setSelectedStream] = useState(null);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedQuestionnaireData = localStorage.getItem('careerGuide_questionnaireData');
    const savedCompletedProjects = localStorage.getItem('careerGuide_completedProjects');
    const savedProjectResults = localStorage.getItem('careerGuide_projectResults');

    if (savedQuestionnaireData) {
      setQuestionnaireData(JSON.parse(savedQuestionnaireData));
    }
    if (savedCompletedProjects) {
      setCompletedProjects(JSON.parse(savedCompletedProjects));
    }
    if (savedProjectResults) {
      setProjectResults(JSON.parse(savedProjectResults));
    }
  }, []);

  // Save questionnaire data to localStorage
  useEffect(() => {
    if (questionnaireData) {
      localStorage.setItem('careerGuide_questionnaireData', JSON.stringify(questionnaireData));
    }
  }, [questionnaireData]);

  // Save completed projects to localStorage
  useEffect(() => {
    if (completedProjects.length > 0) {
      localStorage.setItem('careerGuide_completedProjects', JSON.stringify(completedProjects));
    }
  }, [completedProjects]);

  // Save project results to localStorage
  useEffect(() => {
    if (projectResults.length > 0) {
      localStorage.setItem('careerGuide_projectResults', JSON.stringify(projectResults));
    }
  }, [projectResults]);

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

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentView={currentView} onNavigate={handleNavigate} />
      
      <div className="flex-1 p-8">
        {currentView === 'landing' && (
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Welcome to Career Guide, Sonika
              </h1>
              <p className="text-gray-600 text-lg">
                Discover your perfect undergraduate stream through hands-on projects
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1" onClick={() => setCurrentView('questionnaire')}>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">📝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Take Assessment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Answer questions about your interests and goals</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1" onClick={() => setCurrentView('projects')}>
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🛠️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Projects</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Do hands-on mini-projects to explore your interests</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1" onClick={() => setCurrentView('dashboard')}>
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-6">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">View Dashboard</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Track your progress and see recommendations</p>
              </div>
            </div>

            <button
              onClick={() => setCurrentView('questionnaire')}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Your Journey
            </button>
          </div>
        )}

        {currentView === 'questionnaire' && (
          <Questionnaire onComplete={handleQuestionnaireComplete} />
        )}

        {currentView === 'projects' && (
          <ProjectSelection
            streamScores={questionnaireData?.streamScores || {}}
            onSelectProject={handleProjectSelect}
            completedProjects={completedProjects}
          />
        )}

        {currentView === 'projectDetail' && (
          <ProjectDetail
            project={selectedProject}
            onComplete={handleProjectComplete}
            onBack={handleBackToProjects}
          />
        )}

        {currentView === 'dashboard' && (
          <Dashboard
            projectResults={projectResults}
            questionnaireData={questionnaireData}
            onViewRecommendations={handleViewRecommendations}
          />
        )}

        {currentView === 'recommendations' && (
          <Recommendations
            initialScores={questionnaireData?.streamScores || {}}
            projectResults={projectResults}
            onStreamSelect={handleStreamSelect}
          />
        )}

        {currentView === 'streamDetails' && (
          <StreamDetails
            streamKey={selectedStream}
            onBack={handleBackToRecommendations}
          />
        )}
      </div>
    </div>
  );
}

export default App;
