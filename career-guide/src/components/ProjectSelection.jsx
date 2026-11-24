import { projects } from '../data/projects';
import { anikaProjects } from '../data/anikaProjects';
import { aanviProjects } from '../data/aanviProjects';

export default function ProjectSelection({ streamScores, onSelectProject, completedProjects, profile }) {
  const isKid = profile === 'anika' || profile === 'aanvi';
  const projectsData = profile === 'anika' ? anikaProjects : profile === 'aanvi' ? aanviProjects : projects;
  const sortedStreams = Object.entries(streamScores)
    .sort(([, a], [, b]) => b - a)
    .filter(([, score]) => score > 0);

  const getRecommendedProjects = () => {
    const recommended = [];
    sortedStreams.forEach(([streamName]) => {
      const streamProjects = projectsData[streamName] || [];
      const availableProjects = streamProjects.filter(
        p => !completedProjects.includes(p.id)
      );
      recommended.push(...availableProjects.slice(0, 2));
    });
    return recommended.slice(0, 6);
  };

  const recommendedProjects = getRecommendedProjects();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{isKid ? 'Fun Projects!' : 'Recommended Projects'}</h1>
        <p className="text-gray-600">{isKid ? 'Pick a project you want to try — have fun!' : 'Complete at least 3 projects to get accurate stream recommendations'}</p>
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full">
          <span className="text-sm font-semibold">Projects Completed: {completedProjects.length}/3+</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {recommendedProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold">
                {project.difficulty}
              </span>
              <span className="text-gray-500 text-sm flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {project.duration}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {project.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-4">
              <p className="text-gray-500 text-xs mb-2 font-semibold">Tools needed:</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => onSelectProject(project)}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
            >
              {isKid ? 'Start Project 🎨' : 'Start Project'}
            </button>
          </div>
        ))}
      </div>

      {completedProjects.length >= 3 && (
        <div className="text-center">
          <button
            onClick={() => window.location.reload()}
            className="px-10 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {isKid ? 'See My Dream Jobs! 🌟' : 'View My Recommendations'}
          </button>
        </div>
      )}
    </div>
  );
}
