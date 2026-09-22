import React from 'react';

export default function QuizActivity({ 
  task, 
  currentStepIndex, 
  totalSteps, 
  selectedAnswer, 
  setSelectedAnswer, 
  isLockedOut, 
  lockTimer, 
  quizFeedback, 
  onSubmit,
  onNext,
  isAlreadyCompleted = false
}) {
  return (
    <div>
      <span className="bg-amber-500/20 text-amber-300 text-xs px-3 py-1 rounded-full font-semibold border border-amber-500/30 mb-4 inline-block">
        Paso {currentStepIndex + 1} de {totalSteps} • Reto / Quiz
      </span>
      <h4 className="text-xl font-extrabold text-white mb-6">{task.question}</h4>
      
      <div className="space-y-3 mb-6">
        {task.options?.map((option, index) => {
          const isSelectedChoice = selectedAnswer === index;

          return (
            <button
              key={index}
              onClick={() => !isLockedOut && !isAlreadyCompleted && setSelectedAnswer(index)}
              disabled={isLockedOut || isAlreadyCompleted}
              className={`w-full text-left p-4 rounded-2xl text-sm font-medium transition-all border ${
                isAlreadyCompleted && isSelectedChoice
                  ? 'bg-green-600/30 text-green-200 border-green-500 shadow-md cursor-default'
                  : isLockedOut || isAlreadyCompleted 
                    ? 'opacity-70 cursor-not-allowed bg-slate-900/30 border-slate-800 text-slate-400' 
                    : isSelectedChoice 
                      ? 'bg-purple-600 text-white border-purple-400 shadow-md cursor-pointer' 
                      : 'bg-slate-900/60 text-slate-300 border-slate-700 hover:bg-slate-700/50 cursor-pointer'
              }`}
            >
              <span className="font-bold mr-2">Opción {index + 1}:</span> {option.text}
            </button>
          );
        })}
      </div>

      {quizFeedback && (
        <div className={`mb-6 p-4 rounded-xl text-sm font-semibold text-center ${
          quizFeedback.includes('Correcto') || quizFeedback.includes('superada')
            ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
            : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
        }`}>
          {quizFeedback} {isLockedOut && <span className="block mt-1 font-bold">({lockTimer}s)</span>}
        </div>
      )}

      <div className="flex justify-end">
        {isAlreadyCompleted || (quizFeedback && (quizFeedback.includes('Correcto') || quizFeedback.includes('superada'))) ? (
          <button 
            onClick={onNext}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
          >
            Siguiente Nivel 🚀
          </button>
        ) : (
          !isAlreadyCompleted && (
            <button
              onClick={onSubmit}
              disabled={selectedAnswer === null || isLockedOut}
              className="w-full bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-bold py-3 rounded-xl transition-all cursor-pointer shadow-lg"
            >
              {isLockedOut ? `Espera ${lockTimer}s...` : 'Comprobar respuesta'}
            </button>
          )
        )}
      </div>
    </div>
  );
}