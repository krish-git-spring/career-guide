import { useState } from 'react';

export default function ProjectDetail({ project, onComplete, onBack }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [evaluationAnswers, setEvaluationAnswers] = useState({});

  const handleEvaluationAnswer = (questionIndex, answer) => {
    setEvaluationAnswers({
      ...evaluationAnswers,
      [questionIndex]: answer
    });
  };

  const calculateScore = () => {
    let totalScore = 0;
    Object.values(evaluationAnswers).forEach(answer => {
      totalScore += answer.score;
    });
    return totalScore;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    onComplete({
      projectId: project.id,
      score,
      maxScore: project.evaluationQuestions.length * 5,
      answers: evaluationAnswers
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-semibold"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Projects
      </button>

      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        {currentStep === 0 && (
          <div>
            <div className="flex items-start justify-between mb-6">
              <span className="px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-bold">
                {project.difficulty}
              </span>
              <span className="text-gray-500 text-sm flex items-center gap-1 font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {project.duration}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-blue-800 font-medium leading-relaxed">
                  {project.whatYouWillLearn || project.skills.join(', ')}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Tools Needed</h2>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">How to Solve This Project</h2>
              <div className="space-y-3">
                {(project.howToSolve || project.steps).map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Detailed Steps</h2>
              <ol className="space-y-4">
                {(project.detailedSteps || project.steps).map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-md">
                      {idx + 1}
                    </span>
                    <span className="text-gray-700 pt-2 leading-relaxed font-medium">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
              <p className="text-yellow-800 font-semibold">
                <strong>Important:</strong> Complete all the steps above before proceeding to the evaluation.
              </p>
            </div>

            <button
              onClick={() => setCurrentStep(1)}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              I've Completed the Project - Take Evaluation
            </button>
          </div>
        )}

        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Project Evaluation
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Answer these questions honestly based on your experience completing the project.
            </p>

            <div className="space-y-6">
              {project.evaluationQuestions.map((question, qIdx) => (
                <div key={qIdx} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {qIdx + 1}. {question.question}
                  </h3>
                  <div className="space-y-3">
                    {question.options.map((option, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleEvaluationAnswer(qIdx, option)}
                        className={`w-full p-4 text-left rounded-xl transition-all duration-200 ${
                          evaluationAnswers[qIdx]?.text === option.text
                            ? 'bg-blue-100 border-2 border-blue-500 shadow-md'
                            : 'bg-white border-2 border-gray-200 hover:border-blue-300 hover:shadow-sm'
                        }`}
                      >
                        <span className="text-gray-700 font-medium">{option.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={handleSubmit}
                disabled={Object.keys(evaluationAnswers).length < project.evaluationQuestions.length}
                className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg disabled:transform-none"
              >
                Submit Evaluation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
